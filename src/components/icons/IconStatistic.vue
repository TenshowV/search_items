<template>
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M14 14L-1.52588e-05 14L-1.52588e-05 12L14 12V14ZM13.1025 0.00488281C13.6067 0.0562145 14 0.482323 14 1L14 11L-1.52588e-05 11L-1.52588e-05 6C-1.51944e-05 5.44772 0.4477 5 0.999985 5L3.99998 5L3.99998 3C3.99998 2.44772 4.4477 2 4.99998 2L7.99998 2V1C7.99998 0.447715 8.4477 1.61064e-08 8.99998 0L13 0L13.1025 0.00488281ZM1.99998 9H3.99998V7L1.99998 7V9ZM5.99998 9L7.99998 9L7.99998 4H5.99998V9ZM9.99998 9H12L12 2L9.99998 2L9.99998 9Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconStatistic',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
interface Props {
  pathClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  pathClass: 'fill-black-100',
});
</script>

<style scoped></style>
