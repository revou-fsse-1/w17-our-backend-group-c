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
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dto';
import { PatchProduct } from './dto/patch-product.dto';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  // get all products
  // @UseGuards(AuthGuard)
  // @ApiBearerAuth()
  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  // get product by id
  // @UseGuards(RoleGuard)
  // @UseGuards(AuthGuard)
  // @ApiBearerAuth()
  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.getProductById(id);
  }

  // search product using query

  // create product
  @Post()
  async createProduct(@Body() createProductDto: CreateProduct) {
    return await this.productService.createProduct(createProductDto);
  }

  // update product
  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProduct,
  ) {
    return await this.productService.updateProduct(id, updateProductDto);
  }

  // patch product
  @Patch(':id')
  async patchProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchProductDto: PatchProduct,
  ) {
    return await this.productService.patchProduct(id, patchProductDto);
  }

  // delete product
  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteProduct(id);
  }
}
