import { Auth0Client } from '@auth0/auth0-spa-js';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly auth0Client: Auth0Client) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AUTH0_SECRET,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: `https://${process.env.AUTH0_DOMAIN}/`
        });
    }

    validate(payload: any) {
        return this.auth0Client.getUser();
    }
}