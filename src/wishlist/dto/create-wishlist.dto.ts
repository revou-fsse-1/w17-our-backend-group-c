import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWishlist {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Name' })
  name: string;
}
