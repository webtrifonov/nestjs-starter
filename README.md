# Nestjs starter main backend project

Start

1. sh start.sh
2. npm run start:dev

## Migrations

#### Doesn't work

`npm run migration:generate --name="CreateNewUser"`

#### Create new migration in src/common/database/migrations/1711851739039-CreateNewUser.ts

`npm run migration:create --name="CreateNewUser"`

#### Run all migrations

`npm run migration:run`

#### Revert all migrations

`npm run migration:revert`

#### Show migrations ([X] is applied)

`npm run migration:show`
