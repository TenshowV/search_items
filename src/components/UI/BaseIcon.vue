<template>
  <component v-if="iconMap[icon]" :is="iconMap[icon]" :path-class="pathClass" />
</template>

<script lang="ts">
export default {
  name: 'BaseIcon',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import icons from '@/components/icons/index';
import { computed, type Component } from 'vue';
import { useCva } from '@/utils/useCva';

interface Props {
  icon: string;
  state?: 'active' | 'ordinary' | 'accompanying';
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  state: 'accompanying',
});

const pathClass = computed(() =>
  useCva(
    '',
    {
      variants: {
        state: {
          active: 'fill-white',
          accompanying: 'fill-black-100',
          ordinary: 'fill-black-100 hover:fill-white group-hover:fill-white',
        },
      },
      compoundVariants: [],
      defaultVariants: {},
    },
    { state: props.state },
  ),
);
const iconMap = computed<Record<string, Component>>(() => {
  const map: Record<string, Component> = {};

  Object.entries(icons).forEach(([key, component]) => {
    const name = key.replace(/^Icon/, '').toLowerCase();

    map[name] = component;
  });

  return map;
});
</script>

<style scoped></style>
