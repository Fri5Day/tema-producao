import { CProductionApiRepository } from '../repositories/CProductionApiRepository'
import type { IProductionRepository } from '../repositories/IProductionRepository'

export class CProductionService {
  constructor(
    private readonly productionRepository: IProductionRepository =
      new CProductionApiRepository(),
  ) {}

  getOrdersSummary() {
    return this.productionRepository.getOrdersSummary()
  }
}

export const productionService = new CProductionService()
