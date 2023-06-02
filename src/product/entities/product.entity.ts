import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'Example Title' })
  title: string;

  @ApiProperty({ default: 'Example Description' })
  description: string;

  @ApiProperty({ default: 1000 })
  price: number;

  @ApiProperty({ default: 1 })
  quantity: number;

  @ApiProperty({ default: 'Example Categories' })
  categories: string;

  image: string;

  wishlistId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
