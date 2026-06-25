<template>
  <v-card class="summary-card" elevation="0">
    <v-card-text class="summary-card__content">
      <v-avatar class="summary-card__icon" :color="color" rounded="lg">
        <v-icon :icon="icon" />
      </v-avatar>

      <div>
        <div class="summary-card__label">{{ title }}</div>
        <div class="summary-card__value">{{ value }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  icon: string
  title: string
  value: number
}>()
</script>

<style scoped>
.summary-card {
  border: 1px solid rgba(var(--v-border-color), 0.12);
  border-radius: 8px;
}

.summary-card__content {
  align-items: center;
  display: flex;
  gap: 16px;
}

.summary-card__icon {
  color: #ffffff;
}

.summary-card__label {
  color: rgb(var(--v-theme-darksecondary));
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.summary-card__value {
  color: rgb(var(--v-theme-darkText));
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
  margin-top: 4px;
}
</style>
