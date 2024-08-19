import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('signup')
export class UserController {
    @Inject()
    private readonly userService: UserService;
        
  @Post()
  async signupUser(
    @Body() userData:Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput 
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: data,
    });
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

}
