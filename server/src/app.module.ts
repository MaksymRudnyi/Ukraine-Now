import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import {GeneralModule} from "./modules/General/general.module";
import { CurrencyModule} from "./modules/Currency/currency.module";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GeneralModule,
    CurrencyModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts')
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
      exclude: ['/graphql*', '/api*']
    }),
    // GraphQLModule.forRoot({
    //   typePaths: ['./src/**/*.graphql'],
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.schema.ts')
    //   },
    //   // // @ts-ignore
    //   // plugins: [responseCachePlugin({
    //   //   sessionId: (requestContext) => (requestContext.request.http.headers.get('operator-id') || null)
    //   // })],
    // })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
