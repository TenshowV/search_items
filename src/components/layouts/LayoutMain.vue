<template>
  <div class="flex h-screen bg-black-05">
    <Sidebar />
    <div class="grid grid-rows-[auto_1fr] h-full bg-black-05 grow">
      <TopNavbar />
      <div class="flex h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LayoutMain',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import Sidebar from '@/components/navigation/Sidebar.vue';
import TopNavbar from '../navigation/TopNavbar.vue';
</script>

<style scoped></style>
