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
      <v-list-item
        prepend-icon="mdi-factory"
        title="Produção"
        value="production"
        :to="{ name: 'production-dashboard' }"
      />
    </v-list>
  </v-navigation-drawer>

  <v-main class="app-main">
    <router-view />
  </v-main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const isPinned = ref(false)
const isHovered = ref(false)

const pinIcon = computed(() => (isPinned.value ? 'mdi-pin-off' : 'mdi-pin'))
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

.app-main {
  min-height: 100vh;
  background: rgb(var(--v-theme-surface));
}
</style>
