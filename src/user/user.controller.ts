import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard, RoleGuard } from 'src/auth/guard/auth.guard';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UserRelationEntity } from './entities/user.relation.entity';
import { DeleteWishlistInsideUser } from './dto/delete-user-wishlist.dto';
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

  // delete wishlist inside user
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    status: 200,
    description:
      'Successfully remove wishlists with ID: {wishlistsId} from current user',
  })
  @Put('deletewishlists/:id')
  async deleteWishlistInsideUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteWishlistInsideUserDto: DeleteWishlistInsideUser,
  ) {
    return await this.userService.deleteWishlistInsideUser(
      id,
      deleteWishlistInsideUserDto,
    );
  }

  // delete user
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    status: 200,
    description: 'Data with id: {id} successfully deleted.',
  })
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
}
