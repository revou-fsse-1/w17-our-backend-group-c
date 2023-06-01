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
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { WishlistService } from './wishlist.service';
import { CreateWishlist } from './dto/create-wishlist.dto';
import { UpdateWishlist } from './dto/update-wishlist.dto';
import { PatchWishlist } from './dto/patch-wishlist.dto';
import { ProductEntity } from 'src/product/entities/product.entity';
import { WishlistEntity } from './entities/wishlist.entity';

@Controller('wishlists')
@ApiTags('wishlists')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  // get all wishlist
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  @ApiQuery({
    name: 'q',
    description: 'query search for products',
    required: false,
    type: String,
  })
  @Get()
  async getAllWishlists(@Query('q') query?: string) {
    return await this.wishlistService.getAllWishlist(query);
  }

  // get wishlist by id + show relation between wishlist and product
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  @ApiBearerAuth()
  @Get(':id')
  async getWishlistById(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.getWishlistbyId(id);
  }

  // create wishlist
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  async createWishlist(@Body() wishlistDto: CreateWishlist) {
    return await this.wishlistService.createWishlist(wishlistDto);
  }

  // update wishlist (PATCH)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  async updateWishlistPatch(
    @Param('id', ParseIntPipe) id: number,
    @Body() wishlistDto: PatchWishlist,
  ) {
    return await this.wishlistService.updateWishlistPatch(id, wishlistDto);
  }

  // delete wishlist
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deleteWishlist(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.deleteWishlist(id);
  }
}
