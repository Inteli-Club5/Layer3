import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './modules/authentication/jwt/jwt-auth.guard';

@Controller()
export class AppController {
    constructor() { }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getProtected(): string {
        return 'This route is protected.';
    }
}