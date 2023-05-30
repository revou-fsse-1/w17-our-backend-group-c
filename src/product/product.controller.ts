import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard, RoleGuard } from 'src/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductController {
    constructor(private productService: ProductService){}

    // get all products
    // @UseGuards(AuthGuard)
    // @ApiBearerAuth()
    @Get()
    async getAllProducts(){
        return await this.productService.getAllProducts();
    }

    // get product by id
    // @UseGuards(RoleGuard)
    // @UseGuards(AuthGuard)
    // @ApiBearerAuth()
    @Get(':id')
    async getProductById(@Param('id', ParseIntPipe) id: number){}
    
    // search product using query
    

    // create product

    // update product

    // put product

    // patch product

    // delete product

}
