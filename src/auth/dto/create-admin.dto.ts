import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '../enums/user.enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdmin {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty({ default: 'example@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty({ default: 'example password' })
  password: string;

  @IsEnum(Role)
  @IsOptional()
  roles?: Role;
}
