import type { IProductionOrdersSummary } from '../types/IProductionOrdersSummary'

export type ProductionOrdersSummaryResponse = {
  notStarted?: number
  started?: number
}

export function mapProductionOrdersSummary(
  response: ProductionOrdersSummaryResponse,
): IProductionOrdersSummary {
  return {
    notStarted: response.notStarted ?? 0,
    started: response.started ?? 0,
  }
}

