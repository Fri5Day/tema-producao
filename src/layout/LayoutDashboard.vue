<template>
  <v-navigation-drawer
    class="app-sidebar"
    :rail="!isPinned"
    :rail-width="70"
    :width="265"
    :expand-on-hover="!isPinned"
    permanent
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="sidebar-header">
      <v-list-item
        prepend-avatar="https://homepage.teksystem.com.br/wp-content/uploads/2025/05/cropped-favicon2024-tek-system.png"
        title="TEK DASHBOARD"
      />

      <v-btn
        v-show="showPinButton"
        class="pin-button"
        :icon="pinIcon"
        size="small"
        variant="text"
        @click.stop="togglePin"
      />
    </div>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="Geral" value="geral" />
    </v-list>
  </v-navigation-drawer>

  <v-main>

      <v-card max-width="350" class="ml-16">
        <v-card-title>Conteúdo do Dashboard</v-card-title>
        <v-card-text> Aqui vai o conteúdo principal do dashboard. </v-card-text>
        <v-btn color="primary">Botão de Exemplo</v-btn>
      </v-card>

  </v-main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const isPinned = ref(false)
const isHovered = ref(false)

const pinIcon = computed(() => {
  return isPinned.value ? 'mdi-pin-off' : 'mdi-pin'
})

const showPinButton = computed(() => isPinned.value || isHovered.value)

function togglePin() {
  isPinned.value = !isPinned.value
}
</script>

<style scoped>
.app-sidebar {
  border-right: 1px solid rgba(var(--v-border-color), 0.12);
}

.sidebar-header {
  position: relative;
  padding-right: 32px;
}

.app-sidebar :deep(.v-avatar) {
  width: 40px;
  height: 40px;
}

.app-sidebar :deep(.v-list-item__prepend > .v-icon) {
  font-size: 28px;
}

.user-info {
  min-height: 64px;
}

.pin-button {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 28px;
  height: 28px;
  min-width: 28px;
  opacity: 0.65;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    background-color 0.2s ease;
}

.pin-button:hover {
  opacity: 1;
  transform: scale(1.08);
}
</style>
