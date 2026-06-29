<template>
  <section class="production-page">
    <header class="production-page__header">
      <div>
        <h1>Dashboard de produção</h1>
        <p>Resumo inicial carregado diretamente do backend.</p>
      </div>

      <v-btn
        color="primary"
        prepend-icon="mdi-refresh"
        variant="flat"
        :loading="isLoading"
        @click="loadSummary"
      >
        Atualizar
      </v-btn>
    </header>

    <LoadingState v-if="isLoading && !summary" />

    <ErrorState v-else-if="errorMessage" :message="errorMessage">
      <template #action>
        <v-btn
          color="error"
          size="small"
          variant="tonal"
          :loading="isLoading"
          @click="loadSummary"
        >
          Tentar novamente
        </v-btn>
      </template>
    </ErrorState>

    <ProductionSummaryCards v-else-if="summary" :summary="summary" />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import ErrorState from '@/shared/components/ErrorState.vue'
import LoadingState from '@/shared/components/LoadingState.vue'

import ProductionSummaryCards from '../components/ProductionSummaryCards.vue'

import { productionService } from '../services/CProductionService'
import type { IProductionOrdersSummary } from '../types/IProductionOrdersSummary'

const summary = ref<IProductionOrdersSummary | null>(null)
const isLoading = ref(false)
const errorMessage = ref('')

async function loadSummary() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    summary.value = await productionService.getOrdersSummary()
  } catch {
    errorMessage.value = 'Não foi possível carregar o resumo da produção.'
  } finally {
    isLoading.value = false
  }
}

onMounted(loadSummary)
</script>

<style scoped>
.production-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

.production-page__header {
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
}

.production-page__header h1 {
  color: rgb(var(--v-theme-darkText));
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin: 0;
}

.production-page__header p {
  color: rgb(var(--v-theme-darksecondary));
  margin: 4px 0 0;
}

@media (max-width: 600px) {
  .production-page {
    padding: 16px;
  }

  .production-page__header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
