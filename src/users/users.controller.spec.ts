import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { execSync } from 'child_process';

const UsersServiceProvider = {
  provide: UsersService,
  useValue: {},
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersServiceProvider],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('GET /users', async () => {
    const getUsersResponse = await execSync(`curl -H "Content-Type: application/json" http:/localhost:5000/api/users`, {
      encoding: 'utf-8',
    });
    const users = JSON.parse(getUsersResponse);
    expect(users).toEqual(expect.any(Array));
    // .toEqual([{"id":1,"createdAt":"2024-02-29T00:56:34.194Z","updatedAt":null,"email":"admin@admin.com","password":"123"},{"id":3,"createdAt":"2024-03-05T00:50:40.102Z","updatedAt":null,"email":"qwe@qwe.qwe","password":"qwe"}]);
  });
  it('GET /users/{id}', async () => {
    const getUserResponse = await execSync(
      `curl -H "Content-Type: application/json" http:/localhost:5000/api/users/3`,
      {
        encoding: 'utf-8',
      }
    );
    // .toEqual({"id":1,"createdAt":"2024-02-29T00:56:34.194Z","updatedAt":null,"email":"admin@admin.com","password":"123"})
    const user = JSON.parse(getUserResponse);
    expect(user?.id).toBe(3);
  });
  it('POST /users', async () => {
    const createUserResponse = await execSync(
      `curl \
        -X "POST" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "email=zxc5@zxc.zxc&password=Qwerty1!" \
        http:/localhost:5000/api/users`,
      { encoding: 'utf-8' }
    );
    const newUser = JSON.parse(createUserResponse);
    // .toEqual({"id":1,"createdAt":"2024-02-29T00:56:34.194Z","updatedAt":null,"email":"admin@admin.com","password":"123"})
    expect(newUser?.email).toBe('zxc5@zxc.zxc');
  });
  it('DELETE /users', async () => {
    const deleteUserResponse = await execSync(
      `curl \
        -X "DELETE" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "email=zxc5@zxc.zxc" \
        http:/localhost:5000/api/users`,
      { encoding: 'utf-8' }
    );
    const deletedUser = JSON.parse(deleteUserResponse);
    // .toEqual({"id":1,"createdAt":"2024-02-29T00:56:34.194Z","updatedAt":null,"email":"admin@admin.com","password":"123"})
    expect(deletedUser?.email).toBe('zxc5@zxc.zxc');
  });
});
