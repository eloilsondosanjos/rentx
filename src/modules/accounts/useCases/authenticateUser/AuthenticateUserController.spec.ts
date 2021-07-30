import { UsersRepositoryInMomery } from 'modules/accounts/repositories/in-memory/UsersRepositoryInMomery';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMomery = new UsersRepositoryInMomery();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMomery,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMomery);
  });
  it('');
});
