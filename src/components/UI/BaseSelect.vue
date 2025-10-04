<template>
  <div class="relative w-full">
    <select v-model="model" class="appearance-none w-full border border-black-20 rounded-xl font-inter py-2 pl-2 pr-4">
      <option v-if="placeholder" value="" disabled hidden>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <BaseIcon class="absolute translate-y-[-50%] top-[50%] right-3" icon="chevrondown" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseSelect',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import type { SelectOption } from '@/types/componentTypes';

interface Props {
  options?: SelectOption[];
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  placeholder: '',
});

const model = defineModel<string | number>();

const emit = defineEmits<{
  (e: 'clickIcon'): void;
}>();
</script>

<style scoped></style>
