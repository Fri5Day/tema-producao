<template>
  <v-navigation-drawer
    :rail="!isPinned"
    :expand-on-hover="!isPinned"
    permanent
    class="app-sidebar"
  >
    <div class="sidebar-header">
      <v-list-item
        prepend-avatar="https://homepage.teksystem.com.br/wp-content/uploads/2025/05/cropped-favicon2024-tek-system.png"
        title="TEK DASHBOARD"
      />

      <v-btn
        class="pin-button"
        :icon="pinIcon"
        size="x-small"
        variant="text"
        @click.stop="togglePin"
      />
    </div>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" />

      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Shared with me"
        value="shared"
      />

      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const isPinned = ref(false)

const pinIcon = computed(() => {
  return isPinned.value ? 'mdi-pin-off' : 'mdi-pin'
})

function togglePin() {
  isPinned.value = !isPinned.value
}
</script>

<style scoped>
.app-sidebar {
  border-right: 1px solid rgba(0, 0, 0, 0.08);
}

.sidebar-header {
  position: relative;
  padding-right: 32px;
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
