import { Controller, Get, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private configService: ConfigService) {}

  @Get('login')
  redirectToAuth0() {
    const domain = this.configService.get<string>('auth.domain');
    const clientId = this.configService.get<string>('auth.clientId');
    const redirectUri = 'http://localhost:3000/callback';

    return `https://${domain}/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid profile email`;
  }
}