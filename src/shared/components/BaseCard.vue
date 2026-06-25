<template>
  <v-card class="base-card" elevation="0">
    <slot />
  </v-card>
</template>

<style scoped>
.base-card {
  border: 1px solid rgba(var(--v-border-color), 0.12);
  border-radius: 8px;
}
</style>
