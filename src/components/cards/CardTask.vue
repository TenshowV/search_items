<template>
  <div :class="cardClass">
    <p :class="['font-inter text-base/6 font-semibold', cardTextClass]">
      {{ title }}
    </p>
    <p :class="['font-inter text-base/6 font-semibold opacity-50', cardTextClass]">
      {{ count }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardTask',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { useCva } from '@/utils/useCva';
import { computed } from 'vue';

interface Props {
  title?: string;
  count?: string | number;
  state?: 'analysis' | 'purpose' | 'processing' | 'preparation';
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  count: 0,
  state: 'analysis',
});

const cardClass = computed(() =>
  useCva(
    'flex justify-between gap-x-2 rounded-card py-3 px-4',
    {
      variants: {
        state: {
          analysis: 'bg-black-80',
          purpose: 'bg-black-60',
          processing: 'bg-black-40',
          preparation: 'bg-black-20',
        },
      },
      compoundVariants: [],
      defaultVariants: {},
    },
    { state: props.state },
  ),
);

const cardTextClass = computed(() =>
  useCva(
    '',
    {
      variants: {
        state: {
          analysis: 'text-white',
          purpose: 'text-white',
          processing: 'text-white',
          preparation: 'text-black-100',
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
