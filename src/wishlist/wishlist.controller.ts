import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { WishlistService } from './wishlist.service';
import { CreateWishlist } from './dto/create-wishlist.dto';
import { PatchWishlist } from './dto/patch-wishlist.dto';
import { WishlistEntity } from './entities/wishlist.entity';
import { WishlistRelationEntity } from './entities/wishlist.relation.entity';
import { AddProduct } from './dto/add.product.dto';
import { DeleteProduct } from './dto/delete.product';

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
  @ApiOkResponse({ type: WishlistRelationEntity })
  @ApiBearerAuth()
  @Get(':id')
  async getWishlistById(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.getWishlistbyId(id);
  }

  // create wishlist
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: WishlistEntity })
  @Post()
  async createWishlist(@Body() wishlistDto: CreateWishlist) {
    return await this.wishlistService.createWishlist(wishlistDto);
  }

  // add more product inside wishlist
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    status: 200,
    description:
      'Successfully adding product with ID: {productId} to current wishlists.',
  })
  @Put('addproduct/:id')
  async addProductInsideWishlist(
    @Param('id', ParseIntPipe) id: number,
    @Body() addProductInsideWishlist: AddProduct,
  ) {
    return await this.wishlistService.addProductInsideWishlist(
      id,
      addProductInsideWishlist,
    );
  }

  // delete product inside wishlist
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    status: 200,
    description:
      'Successfully remove product with ID: {productId} from current wishlists.',
  })
  @Put('deleteproduct/:id')
  async deleteProductInsideWishlist(
    @Param('id', ParseIntPipe) id: number,
    @Body() addMoreWishlistDto: DeleteProduct,
  ) {
    return await this.wishlistService.deleteProductInsideWishlist(
      id,
      addMoreWishlistDto,
    );
  }

  // update wishlist (PATCH)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: WishlistEntity })
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
  @ApiOkResponse({
    status: 200,
    description: 'Wishlist with id: {id} successfully deleted.',
  })
  @Delete(':id')
  async deleteWishlist(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.deleteWishlist(id);
  }
}
