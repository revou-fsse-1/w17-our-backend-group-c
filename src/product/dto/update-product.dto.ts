import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProduct {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Title' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Description' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Category' })
  categories: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    format: 'double',
  })
  price: Decimal;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  wishlistId?: number | null;
}
