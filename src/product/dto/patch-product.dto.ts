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

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: 'Example Category' })
  categories: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    type: Number,
    format: 'double',
    required: false,
    default: 0,
  })
  price: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 0 })
  wishlistId?: number | null;
}
