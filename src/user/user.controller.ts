import { Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    // get all users
    @Get()
    async getAllUsers(){
        return await this.userService.getAllUsers()
    }

    // update user(PATCH)
    @Patch(':id')
    async updateUserPatch(@Param('id', ParseIntPipe) id: number){
        return await this.userService.updateUser(id)
    }

    // delete user
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number){
        return await this.userService.deleteUser(id)
    }
}
