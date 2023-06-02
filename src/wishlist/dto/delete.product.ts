import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteProduct {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  productId: number;
}
