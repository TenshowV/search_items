<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M2 0V1.5L2.00488 1.60254C2.05621 2.10667 2.48232 2.5 3 2.5H4.04199C4.28007 1.08118 5.51353 0 7 0L13 0C14.6569 0 16 1.34315 16 3V4C16 5.65685 14.6569 7 13 7L7 7C5.51364 7 4.28215 5.91866 4.04395 4.5L3 4.5C2.64888 4.5 2.31314 4.43604 2 4.3252L2 10.5C2 11.0523 2.44772 11.5 3 11.5H4.04199C4.28007 10.0812 5.51353 9 7 9L13 9C14.6569 9 16 10.3431 16 12V13C16 14.6569 14.6569 16 13 16L7 16C5.51364 16 4.28215 14.9187 4.04395 13.5H3C1.34315 13.5 3.9364e-07 12.1569 0 10.5L0 0L2 0ZM7 11C6.44772 11 6 11.4477 6 12V13C6 13.5523 6.44772 14 7 14L10 14V11L7 11ZM12 14H13C13.5523 14 14 13.5523 14 13V12C14 11.4477 13.5523 11 13 11H12V14ZM7 2C6.44772 2 6 2.44772 6 3L6 4C6 4.55228 6.44772 5 7 5H10V2L7 2ZM12 5H13C13.5523 5 14 4.55228 14 4V3C14 2.44772 13.5523 2 13 2H12V5Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconStructure',
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
