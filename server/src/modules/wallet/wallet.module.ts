import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthModule } from '../authentication/auth.module';
import { WalletController } from './controller/wallet.controller';
import { WalletService } from './service/wallet.service';

@Module({
  imports: [AuthModule],
  controllers: [WalletController],
  providers: [WalletService, PrismaService],
})
export class WalletModule { }