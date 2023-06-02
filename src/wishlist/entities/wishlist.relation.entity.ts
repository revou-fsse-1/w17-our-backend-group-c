import { ApiProperty } from '@nestjs/swagger';
import { Wishlist } from '@prisma/client';
import { ProductEntity } from 'src/product/entities/product.entity';

export class WishlistRelationEntity implements Wishlist {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'Example Name' })
  name: string;

  @ApiProperty({ default: 1 })
  userId: number;

  @ApiProperty({ default: 1 })
  productId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, type: ProductEntity })
  products?: ProductEntity;
}
