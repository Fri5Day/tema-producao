import type { IProductionOrdersSummary } from '../types/IProductionOrdersSummary'

export type ProductionOrdersSummaryResponse = {
  notStarted?: number
  startedWithoutStockEntry?: number
  partiallyReceived?: number
  fullyReceived?: number
}

export function mapProductionOrdersSummary(
  response: ProductionOrdersSummaryResponse,
): IProductionOrdersSummary {
  return {
    notStarted: response.notStarted ?? 0,
    startedWithoutStockEntry: response.startedWithoutStockEntry ?? 0,
    partiallyReceived: response.partiallyReceived ?? 0,
    fullyReceived: response.fullyReceived ?? 0,
  }
}
