<template>
  <a href="#" :class="iconItemClass">
    <BaseIcon :icon="icon" :state="state" />
  </a>
</template>

<script lang="ts">
export default {
  name: 'BaseIconItem',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useCva } from '@/utils/useCva';

interface Props {
  icon: string;
  state?: 'active' | 'ordinary';
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  state: 'ordinary',
});

const iconItemClass = computed(() =>
  useCva(
    'group rounded-xl p-2',
    {
      variants: {
        state: {
          active: 'bg-black-100',
          ordinary: 'hover:bg-black-100',
        },
      },
      compoundVariants: [],
      defaultVariants: {},
    },
    { state: props.state },
  ),
);
</script>

<style scoped></style>
