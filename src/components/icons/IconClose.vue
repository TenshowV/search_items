<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M2.29289 2.29281C2.68342 1.90229 3.31643 1.90229 3.70696 2.29281L7.99992 6.58578L12.2929 2.29281L12.3681 2.22445C12.7609 1.90392 13.3408 1.92663 13.707 2.29281C14.0731 2.65899 14.0958 3.2389 13.7753 3.63168L13.707 3.70687L9.41399 7.99984L13.707 12.2928L13.7753 12.368C14.0958 12.7608 14.0731 13.3407 13.707 13.7069C13.3408 14.0731 12.7609 14.0958 12.3681 13.7752L12.2929 13.7069L7.99992 9.41391L3.70696 13.7069C3.31643 14.0974 2.68342 14.0974 2.29289 13.7069C1.90237 13.3163 1.90237 12.6833 2.29289 12.2928L6.58586 7.99984L2.29289 3.70687C1.90237 3.31635 1.90237 2.68334 2.29289 2.29281Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconClose',
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
