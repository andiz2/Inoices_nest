import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        console.log('user auth serv', user)
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }


    async login(user: any) {
        console.log('user auth serv 2', user)
        const payload = { email: user.email, sub: user.id };
        console.log('payload auth serv', payload)
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}