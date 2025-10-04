<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M9.99998 14C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 9.99998 16L5.99998 16C5.4477 16 4.99998 15.5523 4.99998 15C4.99998 14.4477 5.4477 14 5.99998 14L9.99998 14ZM14 0C15.1046 0 16 0.895431 16 2V7C16 8.10457 15.1046 9 14 9H13.5V11C13.5 12.0357 12.7128 12.887 11.7041 12.9893L11.5 13L4.49998 13C3.46433 13 2.61299 12.2128 2.51073 11.2041L2.49998 11L2.49998 9H1.99998C0.964334 9 0.11299 8.21278 0.0107269 7.2041L-1.52588e-05 7L-1.52588e-05 2C-1.52588e-05 0.895431 0.895415 0 1.99998 0L14 0ZM4.49998 11L11.5 11V9L4.49998 9L4.49998 11ZM1.99998 7L14 7V2L1.99998 2L1.99998 7Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconApp',
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
