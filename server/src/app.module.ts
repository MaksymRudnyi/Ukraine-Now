import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GeneralModule } from './modules/General/general.module';
import { CurrencyModule } from './modules/Currency/currency.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { ApolloServerPluginCacheControl } from 'apollo-server-core/dist/plugin/cacheControl';

@Module({
  imports: [
    GeneralModule,
    CurrencyModule,
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
        ApolloServerPluginCacheControl({ defaultMaxAge: 5 }), // optional
        responseCachePlugin(),
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
      exclude: ['/graphql*', '/api*'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
