import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { getRepository, Repository } from 'typeorm';

import { Car } from '../entities/Cars';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  create({
    name,
    description,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    throw new Error('Method not implemented.');
  }
  findByLicensePlate(license_plate: string): Promise<Car> {
    throw new Error('Method not implemented.');
  }
}
