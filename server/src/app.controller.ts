import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
    constructor() { }

    @UseGuards(AuthGuard())
    @Get('protected')
    getProtected(): string {
        return 'This route is protected.';
    }
}