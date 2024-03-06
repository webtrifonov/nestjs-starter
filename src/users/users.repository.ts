import { Repository } from 'typeorm';
import { CustomRepository } from '@app/typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/users.dto';

@CustomRepository(User)
export class UsersRepository extends Repository<User> {
  async getUsers() {
    return this.find();
  }

  async getUserById(id: number) {
    return this.findOneBy({ id });
  }
  async getUserByEmail(email: string) {
    return this.findOneBy({ email });
  }

  async createUser(data: CreateUserDto) {
    const { email, password } = data;
    const newUser = new User();
    newUser.email = email;
    newUser.password = password;
    await this.save(newUser);
    return newUser;
  }
}
