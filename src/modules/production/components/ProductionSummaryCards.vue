<template>
  <div class="summary-grid">
    <ProductionSummaryCard
      color="warning"
      icon="mdi-clock-outline"
      title="Produções não iniciadas"
      :value="summary.notStarted"
    />
    <ProductionSummaryCard
      color="success"
      icon="mdi-play-circle-outline"
      title="Produções iniciadas"
      :value="summary.started"
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
