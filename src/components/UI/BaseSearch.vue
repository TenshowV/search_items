<template>
  <div class="relative">
    <div class="flex items-center bg-white border-black-100 border rounded-xl p-2">
      <BaseIcon icon="search" class="mr-1" />
      <input class="font-inter text-base/6 text-black-100 flex-1 outline-none" v-model="model" type="text" />
      <slot name="afterInput"></slot>
    </div>
    <div v-if="model" class="absolute top-[115%] w-full bg-white rounded-2xl z-2">
      <div v-if="Object.keys(preparedOptions).length > 0" class="grid gap-y-4 p-6 not-last:border-b not-last:text-black-05">
        <template v-for="(sectionInfo, sectionId) of preparedOptions" :key="sectionId">
          <p class="font-inter text-sm/5 text-black-60">
            {{ SEARCH_SECTION[sectionId] }}
          </p>
          <div v-for="option in sectionInfo.options" :key="option.id" class="grid grid-cols-2 gap-x-1">
            <a class="font-inter text-black-100 text-base/6 font-normal" href="#">
              {{ option.name }}
            </a>
            <a class="font-inter text-black-60 text-base/6 font-normal" href="#">
              {{ option.position }}
            </a>
          </div>
          <BaseButton v-if="sectionInfo.count > 3" :text="`Показать всех ${sectionInfo.count}`" icon="arrowright" @click.prevent="console.log('Показать всех')" />
        </template>
      </div>
      <div v-else class="p-4">
        <p class="text-sm/5 text-black-60">Не найдено</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseSearch',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { SEARCH_SECTION } from '@/constants/business';
import type { FillterOption } from '@/types/componentTypes';

interface Props {
  options?: FillterOption[];
}
const model = defineModel<string>({ default: '' });

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
});

const preparedOptions = computed<Record<keyof typeof SEARCH_SECTION, { count: number; options: FillterOption[] }>>(() => {
  const structureOptions: Record<number, { count: number; options: FillterOption[] }> = {};
  let searchOptions: FillterOption[] = [];

  if (model) searchOptions = props.options.filter((option) => option.name.toLowerCase().includes(model.value.toLowerCase()));

  searchOptions.forEach((option) => {
    const sectionId = option.sectionId;

    if (!structureOptions[sectionId]) {
      structureOptions[sectionId] = { count: 0, options: [] };
    }

    const section = structureOptions[sectionId];
    section.count += 1;

    if (section.count <= 3) section.options.push(option);
  });

  return structureOptions;
});
</script>

<style scoped></style>
