import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PatchProduct {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: 'Example Title' })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: 'Example Description' })
  description: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    type: Number,
    format: 'double',
    required: false,
    default: 0,
  })
  price: Decimal;

  @ApiProperty({ default: 1 })
  quantity: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: 'Example Category' })
  categories: string;

  // nanti image akan di hapus ketika sudah integrasi 3rd party
  @IsOptional()
  @ApiProperty({ default: 'image.png' })
  image?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 0 })
  wishlistId?: number | null;
}
