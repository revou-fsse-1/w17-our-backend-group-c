import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dto';
import { PatchProduct } from './dto/patch-product.dto';

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
    });

    if (!product || product === null) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // business logic create product
  async createProduct(createProductDto: CreateProduct) {
    // const { price, ...rest } = createProductDto;

    // let parsedPrice: number;

    // if (typeof price === 'number') {
    //   // If price is already a number, assign it directly
    //   parsedPrice = price;
    // } else {
    //   // If price is a string, parse it into a number
    //   parsedPrice = parseFloat(price);
    // }

    // const product = await this.prismaService.product.create({
    //   data: {
    //     ...rest,
    //     price: parsedPrice,
    //   },
    // });

    // const responseProduct = {
    //   ...product,
    //   price: parsedPrice, // Convert the parsedPrice to a number in the response
    // };

    // return responseProduct;

    const product = await this.prismaService.product.create({
      data: {
        ...createProductDto,
      },
    });
    return product;
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
      const { title, description, categories, price, wishlistId } =
        patchProductDto;
      return await this.prismaService.product.update({
        where: {
          id: id,
        },
        // jika value yang dimasukkan tidak ada, maka tidak akan mengganti field
        data: {
          title: title ? title : undefined,
          description: description ? description : undefined,
          categories: categories ? categories : undefined,
          price: price ? price : undefined,
          wishlistId: wishlistId ? wishlistId : undefined,
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
