import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWishlist } from './dto/create-wishlist.dto';
import { UpdateWishlist } from './dto/update-wishlist.dto';
import { PatchWishlist } from './dto/patch-wishlist.dto';
import { instanceToPlain } from 'class-transformer';
import { error } from 'console';

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
      // include: { product: true },
    });

    if (!wishlist || wishlist === null) {
      throw new NotFoundException(`wishlist with id: ${id} not found`);
    }

    return instanceToPlain(wishlist, { excludePrefixes: ['password'] });
  }

  // business logic create wishlist
  async createWishlist(wishlistDto: CreateWishlist) {
    try {
      return await this.prismaService.wishlist.create({
        data: {
          ...wishlistDto,
        },
      });
    } catch (error) {
      if (error) {
        throw new NotFoundException();
      }
    }
    throw error;
  }

  // business logic update wishlist (PUT)
  async updateWishlist(id: number, wishlistDto: UpdateWishlist) {
    try {
      return await this.prismaService.wishlist.update({
        where: {
          id: id,
        },
        data: wishlistDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(error.meta.cause);
      }
      throw error;
    }
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
