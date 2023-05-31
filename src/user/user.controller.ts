import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { PatchUser } from './dto/patch-user.dto';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // get all users
  @UseGuards(AuthGuard)
  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  // update user(PATCH)
  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUserPatch(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDto: PatchUser,
  ) {
    return await this.userService.updateUserPatch(id, userDto);
  }

  // delete user
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
}
