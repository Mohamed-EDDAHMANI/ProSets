import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClient, Role, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaClient,
    private jwtService: JwtService
  ) {}

  // ================= EMAIL / PASSWORD =================

  async login(createAuthDto: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      createAuthDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }

  async register(createAuthDto: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: createAuthDto.email,
        password: hashedPassword,
        firstName: createAuthDto.firstName,
        lastName: createAuthDto.lastName,
        role: Role.CLIENT,
      },
    });

    return {
      message: 'Registration successful',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }

  generateJwt(user: User): string {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  // ================= GOOGLE =================

  async validateGoogleUser(profile: {
    email: string;
    firstName: string;
    lastName: string;
    googleId?: string;
    avatar?: string;
  }) {
    let user = await this.prisma.user.findUnique({
      where: { email: profile.email },
    });

    // User exists → login
    if (user) {
      return user;
    }

    // User not exists → create
    const data: any = {
      email: profile.email,
      firstName: profile.firstName,
      lastName: profile.lastName,
      role: Role.CLIENT,
      password: '', // OAuth users don't have password
    };
    if (profile.googleId) data.googleId = profile.googleId;
    if (profile.avatar) data.avatar = profile.avatar;
    user = await this.prisma.user.create({ data });

    return user;
  }

  // ================= LOGOUT =================

  logout() {
    return { message: 'Logout successful' };
  }
}
