import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async validateUser(payload: JwtPayload) {
        const { sub: auth0Id } = payload;

        const email = String(payload.email ?? '');

        try {
            const user = await this.findUserByAuth0Id(auth0Id);
            return user;
        } catch (error) {
            if (error instanceof NotFoundException) {
                return this.createUser({
                    auth0Id,
                    email,
                    name: String(payload.name || ''),
                });
            }

            throw error;
        }
    }

    async findUserByAuth0Id(auth0Id: string) {
        const user = await this.prisma.user.findUnique({
            where: { auth0Id },
        });

        if (!user) {
            throw new NotFoundException(`User with Auth0 ID ${auth0Id} not found`);
        }

        return user;
    }

    async createUser(userData: { auth0Id: string; email: string; name?: string }) {
        try {
            const newUser = await this.prisma.user.create({
                data: {
                    auth0Id: userData.auth0Id,
                    email: userData.email,
                    name: userData.name,
                },
            });

            return newUser;
        } catch (error) {
            // Handle potential database errors
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    async updateUser(auth0Id: string, userData: { email?: string; name?: string }) {
        try {
            return await this.prisma.user.update({
                where: { auth0Id },
                data: userData,
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException(`User with Auth0 ID ${auth0Id} not found`);
            }
            throw error;
        }
    }

    async getProfile(auth0Id: string) {
        return this.findUserByAuth0Id(auth0Id);
    }

    async upsertUser(userData: { auth0Id: string; email: string; name?: string }) {
        return this.prisma.user.upsert({
            where: { auth0Id: userData.auth0Id },
            update: {
                email: userData.email,
                name: userData.name,
            },
            create: {
                auth0Id: userData.auth0Id,
                email: userData.email,
                name: userData.name,
            },
        });
    }
}