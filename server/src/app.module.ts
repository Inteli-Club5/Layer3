import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/authentication/auth.module';
import { AppController } from './app.controller';
import { WalletModule } from './modules/wallet/wallet.module';

import appConfig from './config/app.config';
import authConfig from './config/auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig],
      envFilePath: ['.env', '.env.local'],
    }),
    AuthModule,
    WalletModule,
  ],
  controllers: [AppController],
})
export class AppModule {}