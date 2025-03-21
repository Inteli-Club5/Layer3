import { IsString, IsOptional } from 'class-validator';

export class UpdateWalletDto {

    @IsString()
    @IsOptional()
    privateKey?: string;

    @IsString()
    @IsOptional()
    publicKey?: string;

}