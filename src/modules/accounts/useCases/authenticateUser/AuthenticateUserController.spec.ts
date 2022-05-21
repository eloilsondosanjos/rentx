import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AuthenticateUserUseCase } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase';
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase';

import { AppError } from '@shared/errors/AppError';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );

    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'User Test',
      email: 'user@test.com',
      password: '1234',
      driver_license: '99999',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an noneexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'fake@email.com',
        password: '4321',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'User Test',
        email: 'user@user.com',
        password: '1234',
        driver_license: '9999',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '4321',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
