import { ApiProperty } from '@nestjs/swagger';
import { Roles, User } from '@prisma/client';
import { WishlistEntity } from 'src/wishlist/entities/wishlist.entity';

export class UserRelationEntity implements User {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'Example Email' })
  email: string;
  password: string;

  @ApiProperty({ default: 'user / admin' })
  roles: Roles;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, type: WishlistEntity })
  wishlist?: WishlistEntity;
}
