<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M12 0C12.5523 2.41412e-08 13 0.447715 13 1V2C14.6569 2 16 3.34315 16 5V13L15.9961 13.1543C15.9158 14.7394 14.6051 16 13 16L3 16L2.8457 15.9961C1.31166 15.9184 0.0816253 14.6883 0.00390625 13.1543L0 13L0 5C1.28853e-07 3.34315 1.34315 2 3 2L3 1C3 0.447715 3.44772 -2.41412e-08 4 0C4.55228 2.41412e-08 5 0.447715 5 1V2L11 2V1C11 0.447715 11.4477 -2.41412e-08 12 0ZM2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13V8L2 8L2 13ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H7ZM4.99512 4.10254C4.94379 4.60667 4.51768 5 4 5C3.48232 5 3.05621 4.60667 3.00488 4.10254L3 4C2.44772 4 2 4.44772 2 5L2 6L14 6V5C14 4.44772 13.5523 4 13 4L12.9951 4.10254C12.9438 4.60667 12.5177 5 12 5C11.4823 5 11.0562 4.60667 11.0049 4.10254L11 4L5 4L4.99512 4.10254Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconCalendar',
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
