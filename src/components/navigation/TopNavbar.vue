<template>
  <div class="flex justify-between items-center border-b border-black-20 gap-x-1 p-4">
    <h4 class="font-inter text-3xl/8 text-black-100 font-semibold">Картина дня</h4>
    <div class="w-full max-w-[55%]">
      <BaseSearch v-model="searchStore.searchName" :options="searchStore.preparedSearchItems" @update:model-value="searchStore.findItem">
        <template #afterInput>
          <Filter :relative="false" />
        </template>
      </BaseSearch>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopNavbar',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import Filter from '@/components/filter/Filter.vue';

const searchStore = useSearchStore();
</script>

<style scoped></style>
