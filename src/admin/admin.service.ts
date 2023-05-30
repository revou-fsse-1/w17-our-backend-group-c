import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
    constructor(private prismaService: PrismaService){}

    // business logic get all admins
    async getAllAdmins(){
        return await this.prismaService.admin.findMany({
            select: {
                id: true,
                email: true,
                roles: true,
                createdAt: true,
                updatedAt: true,
            }
        });
    }

    // business logic delete admin
    async deleteAdmin(id: number){
        try{
        const admin = await this.prismaService.admin.delete({
            where: {
                id: id,
            }
        });
        return `Admin with id: ${id} successfully deleted.`;
        }catch(error){
        throw new ForbiddenException(`Admin with id: ${id} is not found`);
    }
 }
}
