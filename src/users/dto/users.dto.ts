export class CreateUserDto {
  readonly email: string;
  readonly password: string;
}

export class GetUserDto {
  readonly id: string;
}
