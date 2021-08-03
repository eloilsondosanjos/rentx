import { getRepository, Repository } from 'typeorm';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../../../repositories/ISpecificationsRepository';
import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification)
  }
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })

    await this.repository.save(specification)
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      name,
    });
    
    return specification;
  }
}

export { SpecificationsRepository };
