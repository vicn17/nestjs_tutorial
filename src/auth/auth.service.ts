import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(ur_email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(ur_email);
    if (user != null || user != undefined) {
      const isMatch = await bcrypt.compare(pass, user.ur_pass);
      if (isMatch != false) {
        const payload = {
          sub: user._id,
          ur_name: user.ur_name,
          ur_email: user.ur_email,
          ur_role: user.ur_role,
        };
        return payload;
      }
    }
    return null;
  }

  async login(dataUser: any): Promise<{ access_token: string }> {
    return {
      access_token: this.jwtService.sign(dataUser),
    };
  }

  async verifyToken(token: string) {
    return {
      user: this.jwtService.verify(token),
    };
  }
}
