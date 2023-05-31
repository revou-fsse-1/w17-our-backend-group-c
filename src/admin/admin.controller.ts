import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard, RoleGuard } from 'src/auth/guard/auth.guard';
import { AdminEntity } from './entity/admin.entity';

@Controller('admins')
@ApiTags('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // get all admins
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AdminEntity, isArray: true })
  @Get()
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  // delete admin
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    status: 200,
    description: 'Admin with {id} successfully deleted.',
  })
  @Delete(':id')
  async deleteAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteAdmin(id);
  }
}
