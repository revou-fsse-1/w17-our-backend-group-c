import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWishlist {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Name' })
  name: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 1 })
  userId?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  productId: number;
}
