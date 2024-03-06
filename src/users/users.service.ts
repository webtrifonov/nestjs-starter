import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, GetUserDto, RemoveUserDto } from './dto/users.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepo: UsersRepository
  ) {}

  async getUsers() {
    return await this.usersRepo.getUsers();
  }

  async getUserById(getUserDto: GetUserDto) {
    const id = Number(getUserDto.id);
    return await this.usersRepo.getUserById(id);
  }

  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const user = await this.usersRepo.getUserByEmail(email);
    if (user) throw new Error('User already exists');
    return await this.usersRepo.createUser({ email, password });
  }

  async removeUser(removeUserDto: RemoveUserDto) {
    const email = removeUserDto.email;
    const user = await this.usersRepo.getUserByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return await this.usersRepo.remove(user);
  }

  async deleteUser(deleteUserDto: GetUserDto) {
    const id = Number(deleteUserDto.id);
    const user = await this.usersRepo.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return await this.usersRepo.remove(user);
  }
}
