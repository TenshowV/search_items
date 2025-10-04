<template>
  <div :class="['grid grid-rows-[auto_1fr] gap-y-6 p-6', { 'border-r border-black-20': hasRightBorder }]">
    <div class="flex justify-between items-center gap-x-2">
      <div class="flex gap-x-2">
        <h5 class="font-inter text-xl/6 font-semibold text-black-100">{{ itemName }}</h5>
        <span class="font-inter text-xl/6 font-semibold text-black-40">{{ itemsCount }}</span>
      </div>
      <a class="flex items-center gap-x-1" href="#" @click.prevent="emit('helpClick')">
        <p class="font-inter text-xs/4 font-semibold text-black-100">{{ helpText }}</p>
        <IconChevronRight hover-color="#0A0A0A" />
      </a>
    </div>
    <div class="flex flex-col gap-y-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseColumn',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import IconChevronRight from '@/components/icons/IconChevronRight.vue';
interface Props {
  itemName?: string;
  itemsCount?: string;
  helpText?: string;
  hasRightBorder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  itemName: '',
  itemsCount: '0',
  helpText: '',
  hasRightBorder: true,
});

const emit = defineEmits<{
  (e: 'helpClick'): void;
}>();
</script>

<style scoped></style>
