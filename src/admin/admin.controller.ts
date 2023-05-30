import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard, RoleGuard } from 'src/auth/guard/auth.guard';

@Controller('admins')
@ApiTags('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // get all admins
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  // delete admin
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deleteAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteAdmin(id);
  }
}
