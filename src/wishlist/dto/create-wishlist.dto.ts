import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWishlist {
  @IsString()
  @IsNotEmpty()
  name: string;
}
