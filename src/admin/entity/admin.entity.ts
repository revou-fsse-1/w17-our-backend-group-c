import { ApiProperty } from '@nestjs/swagger';
import { Admin } from '@prisma/client';
import { Role } from 'src/auth/enums/user.enums';

export class AdminEntity implements Admin {
  @ApiProperty({ default: 1 })
  id: number;

  @ApiProperty({ default: 'example@gmail.com' })
  email: string;

  password: string;

  @ApiProperty({ default: 'admin' })
  roles: Role;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
