<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M12.7527 5.84184C13.0934 6.23148 13.0778 6.81119 12.7322 7.18168L12.658 7.25297L8.65801 10.753L7.9998 11.3291L7.3416 10.753L3.3416 7.25297C2.92608 6.88939 2.88352 6.25748 3.24687 5.84184C3.61046 5.42633 4.24237 5.38376 4.65801 5.74711L7.9998 8.67094L11.3416 5.74711L11.4217 5.68363C11.8349 5.3903 12.4118 5.45225 12.7527 5.84184Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconChevronDown',
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
