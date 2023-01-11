import { join } from 'path';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GeneralModule } from './modules/General/general.module';
import { CorruptionModule } from './modules/Corruption/corruption.module';
import { CurrencyModule } from './modules/Currency/currency.module';
import { WarModule } from './modules/War/war.module';
import { AppCheckMiddleware } from './middlewares/AppCheck';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { ApolloServerPluginCacheControl } from 'apollo-server-core/dist/plugin/cacheControl';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Configuration } from './config'

// console.log('-----', `${Configuration.mongoDBs.atlas.protocol}://${Configuration.mongoDBs.atlas.host}/${Configuration.mongoDBs.atlas.database}`)
@Module({
  imports: [
    GeneralModule,
    CurrencyModule,
    CorruptionModule,
    WarModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.graphql'],
      definitions: {
        path:
          process.env.NODE_ENV === 'development'
            ? join(process.cwd(), 'src/graphql.schema.ts')
            : '/tmp/src/graphql.schema.ts',
      },
      plugins: [
        ApolloServerPluginCacheControl({ defaultMaxAge: 3600 }), // optional
        responseCachePlugin(),
      ],
    }),
    // MongooseModule.forRoot(
    //   // 'mongodb+srv://ukraine-now-mongo:V3FOC99GhcedN26f@cluster0.um2gvlr.mongodb.net/ukraine_now'
    //   // `${Configuration.mongoDBs.atlas.protocol}://${Configuration.mongoDBs.atlas.host}/${Configuration.mongoDBs.atlas.database}`
    //   'mongodb+srv://ukraine-now-mongo:V3FOC99GhcedN26f@cluster0.um2gvlr.mongodb.net/mongodbVSCodePlaygroundDB'
    // ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
      exclude: ['/graphql*', '/api*'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AppCheckMiddleware).forRoutes('/graphql', '/general');
  }
}
