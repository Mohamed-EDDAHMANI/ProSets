import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // ================= EMAIL / PASSWORD =================

  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }

  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  // ================= GOOGLE AUTH =================

  @Get('login/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Google redirect
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    // req.user comes from GoogleStrategy.validate
    const user = await this.authService.validateGoogleUser(req.user);
    console.log('Google user authenticated:', user);

    // generate a JWT if you want
    const token = this.authService.generateJwt(user);

    // redirect to frontend with token
    return res.redirect(`http://localhost:3000?token=${token}`);
  }

  // ================= LOGOUT =================

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
