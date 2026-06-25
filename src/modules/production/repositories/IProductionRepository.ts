import type { IProductionOrdersSummary } from '../types/IProductionOrdersSummary'

export interface IProductionRepository {
  getOrdersSummary(): Promise<IProductionOrdersSummary>
}
