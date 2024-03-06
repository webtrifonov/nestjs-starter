export class GetUserDto {
  readonly id: string;
}
export class CreateUserDto {
  readonly email: string;
  readonly password: string;
}
export class RemoveUserDto {
  readonly email: string;
}
