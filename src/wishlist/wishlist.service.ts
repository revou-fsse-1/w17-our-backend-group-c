import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWishlist } from './dto/create-wishlist.dto';
import { PatchWishlist } from './dto/patch-wishlist.dto';
import { instanceToPlain } from 'class-transformer';
import { error } from 'console';
import { AddProduct } from './dto/add.product.dto';
import { DeleteProduct } from './dto/delete.product';

@Injectable()
export class WishlistService {
  constructor(private prismaService: PrismaService) {}

  // business logic get all wishlist
  async getAllWishlist(query: string) {
    return await this.prismaService.wishlist.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });
  }

  // business logic get wishlist by id + show relation between wishlist and product
  async getWishlistbyId(id: number) {
    const wishlist = await this.prismaService.wishlist.findFirst({
      where: { id },
      include: { products: true },
    });

    if (!wishlist || wishlist === null) {
      throw new NotFoundException(`wishlist with id: ${id} not found`);
    }

    return instanceToPlain(wishlist, { excludePrefixes: ['quantity'] });
  }

  // business logic create wishlist
  async createWishlist(wishlistDto: CreateWishlist) {
    try {
      const wishlist = await this.prismaService.wishlist.create({
        data: {
          name: wishlistDto.name,
          user: { connect: { id: wishlistDto.userId } },
          products: { connect: { id: wishlistDto.productId } },
        },
      });
      return `successfully adding new wishlist with ID: ${wishlist.id} `;
    } catch (error) {
      if (error) {
        throw new NotFoundException();
      }
    }
    throw error;
  }

  // business logic add more product inside wishlist
  async addProductInsideWishlist(
    id: number,
    addProductInsideWishlist: AddProduct,
  ) {
    try {
      await this.prismaService.wishlist.update({
        where: { id: id },
        data: {
          products: { connect: { id: addProductInsideWishlist.productId } },
        },
      });

      return `Successfully adding product with ID: ${addProductInsideWishlist.productId} to current wishlists`;
    } catch (error) {
      if (error) {
        throw new NotFoundException();
      }
    }
    throw error;
  }

  // delete product inside wishlist
  async deleteProductInsideWishlist(
    id: number,
    addMoreWishlistDto: DeleteProduct,
  ) {
    try {
      await this.prismaService.wishlist.update({
        where: { id: id },
        data: {
          products: { disconnect: { id: addMoreWishlistDto.productId } },
        },
      });

      return `Successfully remove product with ID: ${addMoreWishlistDto.productId} from current wishlists`;
    } catch (error) {
      if (error) {
        throw new NotFoundException();
      }
    }
    throw error;
  }

  // business logic update wishlist (PATCH)
  async updateWishlistPatch(id: number, wishlistDto: PatchWishlist) {
    try {
      const { name, userId } = wishlistDto;
      return await this.prismaService.wishlist.update({
        where: {
          id: id,
        },
        data: {
          name: name ? name : undefined,
          userId: userId ? userId : undefined,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(error.meta.cause);
      }
      throw error;
    }
  }

  // business logic delete wishlist
  async deleteWishlist(id: number) {
    try {
      await this.prismaService.wishlist.delete({
        where: {
          id: id,
        },
      });
      return `Data with id: ${id} successfully deleted`;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(error.meta.cause);
      }
      throw error;
    }
  }
}
