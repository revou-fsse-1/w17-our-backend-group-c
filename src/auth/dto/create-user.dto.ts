import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '../enums/user.enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'user@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'example password' })
  password: string;

  @IsEnum(Role)
  @IsOptional()
  roles?: Role;
}
