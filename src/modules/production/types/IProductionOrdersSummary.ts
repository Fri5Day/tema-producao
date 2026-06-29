export interface IProductionOrdersSummary {
  notStarted: number
  startedWithoutStockEntry: number
  partiallyReceived: number
  fullyReceived: number
}
