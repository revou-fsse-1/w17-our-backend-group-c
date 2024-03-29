import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ default: 1 })
  price: number;

  @IsNumber()
  @ApiProperty({ default: 1 })
  @IsOptional()
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
  wishlistId?: number | null;
}
