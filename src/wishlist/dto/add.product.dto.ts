import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddProduct {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  productId: number;
}
