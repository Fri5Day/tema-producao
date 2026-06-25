<template>
  <v-alert border="start" type="error" variant="tonal">
    <div class="error-state">
      <span>{{ message }}</span>
      <slot name="action" />
    </div>
  </v-alert>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    message?: string
  }>(),
  {
    message: 'Não foi possível carregar as informações.',
  },
)
</script>

<style scoped>
.error-state {
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
}
</style>
