import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Role } from 'src/auth/enums/user.enums';

export class UserRegisterEntity implements User {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'user@gmail.com' })
  email: string;

  password: string;

  @ApiProperty({ default: 'user' })
  roles: Role;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
