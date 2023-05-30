import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService){}

    // business logic get all products
    getAllProducts() {
        return this.prismaService.product.findMany();
    }
}
