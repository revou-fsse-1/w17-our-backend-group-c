import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
