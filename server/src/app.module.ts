import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CorruptionModule } from './modules/Corruption/corruption.module';
import { CurrencyModule } from './modules/Currency/currency.module';
import { WarModule } from './modules/War/war.module';
import { CountiesModule } from './modules/Counties/counties.module';
import { AppCheckMiddleware } from './middlewares/AppCheck';

@Module({
  imports: [
    CurrencyModule,
    CorruptionModule,
    WarModule,
    CountiesModule,
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AppCheckMiddleware).forRoutes();
  }
}
