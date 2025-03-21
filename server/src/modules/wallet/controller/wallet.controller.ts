import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../authentication/jwt/jwt-auth.guard';
import { GetUser } from '../../authentication/decorator/get-user.decorator';
import { UpdateWalletDto } from '../dto/wallet-update.dto';
import { WalletService } from '../service/wallet.service';

@UseGuards(JwtAuthGuard)
@Controller('wallet')
export class WalletController {
    constructor(private readonly walletService: WalletService) { }

    @Get()
    async getWallet(@GetUser() user: { auth0Id: string }) {
        return this.walletService.getWallet(user.auth0Id);
    }

    @Put()
    async updateWallet(
        @GetUser() user: { auth0Id: string },
        @Body() updateWalletDto: UpdateWalletDto,
    ) {
        return this.walletService.updateWallet(user.auth0Id, updateWalletDto);
    }

}