import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateWishlist {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Example Name' })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  userId: number;
}
