import { Controller } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {

    constructor(private adminService: AdminService) {}

    // get all admin

    // patch admin

    // delete admin
}
