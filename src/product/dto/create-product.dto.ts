import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Title' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Description' })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  price: number;

  @IsNumber()
  @ApiProperty({ default: 1 })
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Category' })
  categories: string;

  // @IsNumber()
  // @IsOptional()
  // @ApiProperty({required: false})
  // wishlistId?: number | null;
}
