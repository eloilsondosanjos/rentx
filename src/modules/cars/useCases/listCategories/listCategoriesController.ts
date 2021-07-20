import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './listCategoriesUseCase';

class ListCategoriesController {
  constructor(private listeCategoryUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listeCategoryUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
