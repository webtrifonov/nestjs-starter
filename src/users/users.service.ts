import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, GetUserDto } from './dto/users.dto';
import { User } from './entities/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepo: UsersRepository
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    return await this.usersRepo.createUser({ email, password });
  }

  async getUserById(getUserDto: GetUserDto): Promise<User> {
    const id = Number(getUserDto.id);
    return await this.usersRepo.getUserById(id);
  }
}
