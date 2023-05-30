import { Controller, Delete, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('admins')
@ApiTags('admins')
export class AdminController {

    constructor(private adminService: AdminService) {}

    // get all admins
    @Get()
    async getAllAdmins() {
        return this.adminService.getAllAdmins();
    }

    // delete admin
    @Delete(':id')
    async deleteAdmin(@Param('id', ParseIntPipe) id: number) {
        return this.adminService.deleteAdmin(id);
    }
}
