import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiOkResponse } from '@nestjs/swagger';
import { WishlistService } from './wishlist.service';
import { CreateWishlist } from './dto/create-wishlist.dto';
import { UpdateWishlist } from './dto/update-wishlist.dto';
import { PatchWishlist } from './dto/patch-wishlist.dto';

@Controller('wishlists')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  // get all wishlist
  @UseGuards(AuthGuard)
  @Get()
  async getAllWishlists(@Query('q') query?: string) {
    return await this.wishlistService.getAllWishlist(query);
  }

  // get wishlist by id + show relation between wishlist and product
  @UseGuards(AuthGuard)
  @Get(':id')
  async getWishlistById(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.getWishlistbyId(id);
  }

  // create wishlist
  @UseGuards(AuthGuard)
  @Post()
  async createWishlist(@Body() wishlistDto: CreateWishlist) {
    return await this.wishlistService.createWishlist(wishlistDto);
  }

  // update wishlist (PATCH)
  @Patch(':id')
  async updateWishlistPatch(
    @Param('id', ParseIntPipe) id: number,
    @Body() wishlistDto: PatchWishlist,
  ) {
    return await this.wishlistService.updateWishlistPatch(id, wishlistDto);
  }

  // delete wishlist
  @Delete(':id')
  async deleteWishlist(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.deleteWishlist(id);
  }
}
