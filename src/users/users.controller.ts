import { Body, Post, Get, Param, Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, GetUserDto } from './dto/users.dto';
import { User } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/:id')
  async getUserById(@Param() getUserDto: GetUserDto): Promise<User> {
    console.log(`>>> getUserDto = `, getUserDto);
    return this.usersService.getUserById(getUserDto);
  }
}
