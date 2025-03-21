import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.AUTH0_SECRET,
      signOptions: { expiresIn: '6h' },
    }),
  ],
  providers: [],
})
export class AuthModule {}