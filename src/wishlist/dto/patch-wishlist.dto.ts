import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PatchWishlist {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: 'Example Name' })
  name: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 1 })
  userId: number;
}
