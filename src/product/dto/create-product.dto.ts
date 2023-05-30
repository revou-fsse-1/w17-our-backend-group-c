import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    format: 'double',
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categories: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty()
  // image: string;

  // @IsNumber()
  // @IsOptional()
  // @ApiProperty({required: false})
  // wishlistId?: number | null;
}
