import { Module } from '@nestjs/common';
import { AuthModule } from './modules/authentication/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig]
    }),
    AuthModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
