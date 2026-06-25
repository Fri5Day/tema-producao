import { httpClient } from '@/shared/http/CHttpClient'

import {
  mapProductionOrdersSummary,
  type ProductionOrdersSummaryResponse,
} from '../mappers/productionMapper'
import type { IProductionOrdersSummary } from '../types/IProductionOrdersSummary'
import type { IProductionRepository } from './IProductionRepository'

export class CProductionApiRepository implements IProductionRepository {
  async getOrdersSummary(): Promise<IProductionOrdersSummary> {
    const response = await httpClient.get<ProductionOrdersSummaryResponse>(
      '/production/summary',
    )

    return mapProductionOrdersSummary(response)
  }
}
