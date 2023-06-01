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
import { AuthGuard, RoleGuard } from 'src/auth/guard/auth.guard';
import { PatchUser } from './dto/patch-user.dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { WishlistRelationEntity } from 'src/wishlist/entities/wishlist.relation.entity';
import { UserRelationEntity } from './entities/user.relation.entity';
@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  // get all users
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  // get user by id
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserRelationEntity })
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }

  // delete user
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
}
