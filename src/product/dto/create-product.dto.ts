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
  @ApiProperty({
    type: Number,
    format: 'double',
  })
  price: Decimal;

  @ApiProperty({ default: 1 })
  quantity: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Category' })
  categories: string;

  // nanti image akan di hapus ketika sudah integrasi 3rd party
  @ApiProperty({ default: 'image.png' })
  image?: string;

  // @IsNumber()
  // @IsOptional()
  // @ApiProperty({required: false})
  // wishlistId?: number | null;
}
