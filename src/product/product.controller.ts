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
import { ProductService } from './product.service';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dto';
import { PatchProduct } from './dto/patch-product.dto';
import { AuthGuard, RoleGuard } from 'src/auth/guard/auth.guard';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  // get all products
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('all')
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  // get product by id
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.getProductById(id);
  }

  // search product using query
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiQuery({
    name: 'q',
    description: 'query search for products',
    required: true,
    type: String,
  })
  async searchProduct(@Query('q') query: string) {
    return await this.productService.searchProduct(query);
  }

  // create product
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  async createProduct(@Body() createProductDto: CreateProduct) {
    return await this.productService.createProduct(createProductDto);
  }

  // update product
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProduct,
  ) {
    return await this.productService.updateProduct(id, updateProductDto);
  }

  // patch product
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  async patchProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchProductDto: PatchProduct,
  ) {
    return await this.productService.patchProduct(id, patchProductDto);
  }

  // delete product
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteProduct(id);
  }
}
