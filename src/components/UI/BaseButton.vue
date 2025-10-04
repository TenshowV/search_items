<template>
  <a href="#" :class="buttonClass">
    <span v-if="text" class="truncate">{{ text }}</span>
    <small v-if="smallText" class="text-tiny/3 text-black-60">{{ smallText }}</small>
    <BaseIcon v-if="icon" :icon="icon" :state="color == 'black' ? 'active' : 'accompanying'" />
  </a>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useCva } from '@/utils/useCva';

interface Props {
  icon?: string;
  text?: string;
  smallText?: string;
  size?: 'default' | 'small';
  color?: 'default' | 'black';
  width?: 'auto' | 'fixed';
  radiuses?: 'default' | 'search';
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  text: '',
  smallText: '',
  size: 'default',
  color: 'default',
  width: 'auto',
  radiuses: 'default',
});

const buttonClass = computed(() =>
  useCva(
    'group flex items-center gap-x-3 font-inter py-2',
    {
      variants: {
        size: {
          large: 'text-base/6 font-semibold p-4',
          medium: 'text-base/6 font-semibold p-3',
          default: 'text-base/6 font-semibold pr-2',
          small: 'text-sm/5 font-semibold gap-x-1 px-4 py-2.5',
          tiny: 'text-xs/4 font-normal pr-1',
        },
        color: {
          default: 'bg-black-05 text-black-100',
          black: 'bg-black-100 text-white',
        },
        width: {
          auto: 'w-max pl-3',
          full: 'w-full',
          fixed: 'w-39.25 justify-center px-1',
        },
        radiuses: {
          default: 'rounded-xl',
          search: 'rounded-md',
        },
      },
      compoundVariants: [],
      defaultVariants: {},
    },
    { size: props.size, color: props.color, width: props.width, radiuses: props.radiuses },
  ),
);
</script>

<style scoped></style>
