import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUser } from './dto/create-user.dto';
import { AuthGuard, RoleGuard } from './guard/auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { CreateAdmin } from './dto/create-admin.dto';
import { AdminEntity } from 'src/admin/entity/admin.entity';
import { UserRegisterEntity } from './entities/user.register.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Register User
  @ApiCreatedResponse({ type: UserRegisterEntity })
  @Post('register/user')
  async registerUser(@Body() createUserDto: CreateUser) {
    return this.authService.registerUser(createUserDto);
  }

  // Login User
  @Post('login/user')
  @ApiOkResponse({
    status: 200,
    description: '"access_token": "example token"',
  })
  async loginUser(@Body() loginUserDto: LoginDto) {
    return this.authService.loginUser(loginUserDto);
  }

  // Register Admin
  @ApiCreatedResponse({ type: AdminEntity })
  @Post('register/admin')
  async registerAdmin(@Body() createAdminDto: CreateAdmin) {
    return this.authService.registerAdmin(createAdminDto);
  }

  // Login Admin
  @ApiOkResponse({
    status: 200,
    description: '"access_token": "example token"',
  })
  @Post('login/admin')
  async loginAdmin(@Body() loginAdminDto: LoginDto) {
    return this.authService.loginAdmin(loginAdminDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profileuser')
  getProfileUser(@Request() req) {
    return req.user;
  }

  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profileadmin')
  getProfileAdmin(@Request() req) {
    return req.user;
  }
}
