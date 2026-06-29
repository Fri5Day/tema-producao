<template>
  <div class="summary-grid">
    <ProductionSummaryCard
      description="Criadas e ainda sem início"
      icon="mdi-clipboard-outline"
      title="Produções não iniciadas"
      tone="danger"
      :value="summary.notStarted"
    />
    <ProductionSummaryCard
      description="Iniciadas sem entrada física"
      icon="mdi-factory"
      title="Iniciadas sem entrada"
      tone="warning"
      :value="summary.startedWithoutStockEntry"
    />
    <ProductionSummaryCard
      description="Com quantidade recebida parcial"
      icon="mdi-package-variant"
      title="Entrada parcial"
      tone="info"
      :value="summary.partiallyReceived"
    />
    <ProductionSummaryCard
      description="Quantidade planejada recebida"
      icon="mdi-package-variant-closed"
      title="Entrada completa"
      tone="success"
      :value="summary.fullyReceived"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProductionOrdersSummary } from '../types/IProductionOrdersSummary'
import ProductionSummaryCard from './ProductionSummaryCard.vue'

defineProps<{
  summary: IProductionOrdersSummary
}>()
</script>

<style scoped>
.summary-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>
