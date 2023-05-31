import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PatchWishlist {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  userId: number;
}
