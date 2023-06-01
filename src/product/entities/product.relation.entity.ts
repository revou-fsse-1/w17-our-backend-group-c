import { ApiProperty } from '@nestjs/swagger';
import { Product, Wishlist } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { WishlistEntity } from 'src/wishlist/entities/wishlist.entity';

export class ProductRelationEntity implements Product {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'Example Title' })
  title: string;

  @ApiProperty({ default: 'Example Description' })
  description: string;

  @ApiProperty({ default: 1000 })
  price: Decimal;

  @ApiProperty({ default: 1 })
  quantity: number;

  @ApiProperty({ default: 'Example Categories' })
  categories: string;

  @ApiProperty({ default: 'image.png' })
  image: string;

  @ApiProperty({ required: false, default: 1 })
  wishlistId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, type: WishlistEntity })
  wishlist?: WishlistEntity;
}
