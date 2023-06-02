import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dto';
import { PatchProduct } from './dto/patch-product.dto';
import { createApi as unsplashCreateApi } from 'unsplash-js';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  // business logic get all products
  async getAllProducts() {
    return await this.prismaService.product.findMany();
  }
  // business logic search product
  async searchProduct(query: string) {
    return await this.prismaService.product.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });
  }

  // business logic get product by id
  async getProductById(id: number) {
    const product = await this.prismaService.product.findFirst({
      where: {
        id: id,
      },
      include: { wishlists: true },
    });

    if (!product || product === null) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // business logic create product
  async createProduct(createProductDto: CreateProduct) {
    //   const product = await this.prismaService.product.create({
    //     data: {
    //       ...createProductDto,
    //       price: createProductDto.price,
    //     },
    //   });

    //   return product;

    const unsplash = unsplashCreateApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
    });

    const result = await unsplash.photos.getRandom({
      query: createProductDto.title,
      count: 1,
    });
    const randomImageUrl = result.response[0].urls.regular;

    return await this.prismaService.product.create({
      data: {
        ...createProductDto,
        image: randomImageUrl,
      },
    });
  }

  // business logic update product
  async updateProduct(id: number, updateProductDto: UpdateProduct) {
    try {
      return await this.prismaService.product.update({
        where: {
          id: id,
        },
        data: updateProductDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(error.meta.cause);
      }
      throw error;
    }
  }

  // business logic patch product
  async patchProduct(id: number, patchProductDto: PatchProduct) {
    try {
      // desctructure object
      const {
        title,
        description,
        categories,
        quantity,
        price,
        image,
        // wishlistId,
      } = patchProductDto;
      return await this.prismaService.product.update({
        where: {
          id: id,
        },
        // jika value yang dimasukkan tidak ada, maka tidak akan mengganti field
        data: {
          title: title ? title : undefined,
          description: description ? description : undefined,
          categories: categories ? categories : undefined,
          quantity: quantity ? quantity : undefined,
          price: price ? price : undefined,
          image: image ? image : undefined,
          // wishlistId: wishlistId ? wishlistId : undefined,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(error.meta.cause);
      }
      throw error;
    }
  }

  // business logic delete product
  async deleteProduct(id: number) {
    try {
      await this.prismaService.product.delete({
        where: {
          id: id,
        },
      });
      return `Product with id: ${id} successfully deleted.`;
    } catch (error) {
      throw new NotFoundException(`Product with id: ${id} does not exist.`);
    }
  }
}
