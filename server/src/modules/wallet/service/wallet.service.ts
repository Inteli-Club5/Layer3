import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateWalletDto } from '../dto/wallet-update.dto';

@Injectable()
export class WalletService {
    constructor(private prisma: PrismaService) { }

    async getWallet(auth0Id: string) {
        const user = await this.prisma.user.findUnique({
            where: { auth0Id },
            select: {
                id: true,
                publicKey: true,
            },
        });
        
        return user;
    }

    async updateWallet(auth0Id: string, updateWalletDto: UpdateWalletDto) {
        return this.prisma.user.update({
            where: { auth0Id },
            data: updateWalletDto,
            select: {
                id: true,
                publicKey: true,
            },
        });
    }
}