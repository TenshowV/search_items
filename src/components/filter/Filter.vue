<template>
  <div :class="containerClass">
    <BaseButton text="Фильтр" :icon="model ? 'close' : 'filter'" :color="model ? 'black' : 'default'" size="tiny" radiuses="search" @click.prevent="model = !model" />
    <FilterPlate :visible="model" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Filter',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useCva } from '@/utils/useCva';
import FilterPlate from '@/components/filter/FilterPlate.vue';

interface Props {
  relative?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  relative: true,
});

const model = defineModel<boolean>({ default: false });

const containerClass = computed(() =>
  useCva(
    '',
    {
      variants: {
        relative: {
          true: 'relative',
        },
      },
      compoundVariants: [],
      defaultVariants: {},
    },
    { state: props.relative },
  ),
);
</script>

<style scoped></style>
