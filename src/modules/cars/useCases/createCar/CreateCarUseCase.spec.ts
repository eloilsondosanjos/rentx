import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemorey"
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  })

  it("Should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "REN-2021",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  })

  it("Should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Name Car1",
        description: "Description Car1",
        daily_rate: 100,
        license_plate: "REN-2021",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Name Car2",
        description: "Description Car2",
        daily_rate: 100,
        license_plate: "REN-2021",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError)
  })
})