import { ApiProperty } from '@nestjs/swagger';
import { Wishlist } from '@prisma/client';

export class WishlistEntity implements Wishlist {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'Example Name' })
  name: string;

  @ApiProperty({ default: 1 })
  userId: number;

  productId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
