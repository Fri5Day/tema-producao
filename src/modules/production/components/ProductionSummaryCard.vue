<template>
  <v-card class="summary-card" :class="`summary-card--${tone}`" elevation="0">
    <v-card-text class="summary-card__content">
      <div class="summary-card__header">
        <div class="summary-card__icon-wrapper">
          <v-icon class="summary-card__icon" :icon="icon" size="28" />
        </div>

        <div class="summary-card__value">{{ value }}</div>
      </div>

      <div class="summary-card__body">
        <div class="summary-card__label">{{ title }}</div>
        <div v-if="description" class="summary-card__description">
          {{ description }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  description?: string
  icon: string
  title: string
  tone: 'danger' | 'warning' | 'info' | 'success'
  value: number
}>()
</script>

<style scoped>
.summary-card {
  --summary-accent: rgb(var(--v-theme-primary));
  --summary-accent-soft: rgb(var(--v-theme-lightprimary));

  background: #ffffff;
  border: 1px solid rgba(var(--v-border-color), 0.12);
  border-left: 4px solid var(--summary-accent);
  border-radius: 8px;
  box-shadow: var(--v-card-shadow, 0 1px 4px rgba(0, 0, 0, 0.08));
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.summary-card:hover {
  border-color: color-mix(in srgb, var(--summary-accent), transparent 72%);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  transform: translateY(-1px);
}

.summary-card--danger {
  --summary-accent: rgb(var(--v-theme-error));
  --summary-accent-soft: rgb(var(--v-theme-lighterror));
}

.summary-card--warning {
  --summary-accent: rgb(var(--v-theme-warning));
  --summary-accent-soft: rgb(var(--v-theme-lightwarning));
}

.summary-card--info {
  --summary-accent: rgb(var(--v-theme-info));
  --summary-accent-soft: rgb(var(--v-theme-lightprimary));
}

.summary-card--success {
  --summary-accent: rgb(var(--v-theme-success));
  --summary-accent-soft: rgb(var(--v-theme-lightsuccess));
}

.summary-card__content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 148px;
  padding: 18px;
}

.summary-card__header {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
}

.summary-card__icon-wrapper {
  align-items: center;
  background: var(--summary-accent-soft);
  border-radius: 8px;
  color: var(--summary-accent);
  display: flex;
  height: 46px;
  justify-content: center;
  width: 46px;
}

.summary-card__icon {
  opacity: 0.95;
}

.summary-card__value {
  color: rgb(var(--v-theme-darkText));
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 2.5rem;
}

.summary-card__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.summary-card__label {
  color: rgb(var(--v-theme-darkText));
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.3rem;
}

.summary-card__description {
  color: rgb(var(--v-theme-darksecondary));
  font-size: 0.8125rem;
  line-height: 1.15rem;
}
</style>
