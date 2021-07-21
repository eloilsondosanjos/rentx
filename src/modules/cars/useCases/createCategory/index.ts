import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategryController(
  createCategoryUseCase,
);

export { createCategoryController };
