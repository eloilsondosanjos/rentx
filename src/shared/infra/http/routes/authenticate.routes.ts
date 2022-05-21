import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateUserController.handel);

export { authenticateRoutes };
