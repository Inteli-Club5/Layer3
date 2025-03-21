import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
@UseGuards(AuthGuard())
export class ProfileController {
  @Get()
  getProfile() {
    
  }
}