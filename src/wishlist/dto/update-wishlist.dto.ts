import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateWishlist {
  @IsString()
  @IsNotEmpty()
  name: string;
}
