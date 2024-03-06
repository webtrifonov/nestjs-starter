import { Body, Post, Get, Param, Controller, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, GetUserDto } from './dto/users.dto';
import { User } from './entities/users.entity';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  async getUserById(@Param() getUserDto: GetUserDto) {
    return this.usersService.getUserById(getUserDto);
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.createUser(createUserDto);
    } catch (error) {
      return 'Check email';
    }
  }

  @Delete('/')
  async removeUser(@Body() removeUserDto: CreateUserDto) {
    try {
      return await this.usersService.removeUser(removeUserDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      return error.message;
    }
  }
  @Delete('/:id')
  async deleteUser(@Param() deleteUserDto: GetUserDto) {
    try {
      return await this.usersService.deleteUser(deleteUserDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      return error.message;
    }
  }
}
