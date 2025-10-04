<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M9.20715 1.29286C8.81665 0.902356 8.18362 0.902407 7.79309 1.29286C7.40257 1.68338 7.40257 2.31639 7.79309 2.70692L12.0861 6.99989L1.00012 6.99989L0.897583 7.00477C0.393451 7.0561 0.000123024 7.48221 0.00012207 7.99989C0.000123024 8.55217 0.447838 8.99989 1.00012 8.99989L12.0861 8.99989L7.79309 13.2929L7.72473 13.369C7.40438 13.7618 7.42698 14.3408 7.79309 14.7069C8.15921 15.073 8.73823 15.0956 9.13098 14.7753L9.20715 14.7069L15.9142 7.99989L9.20715 1.29286Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconArrowRight',
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
