<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M14 12C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14L2 14C1.44772 14 1 13.5523 1 13C1 12.4477 1.44772 12 2 12L14 12ZM14 7C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9L2 9C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7L14 7ZM14 2C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4L2 4C1.44772 4 1 3.55228 1 3C1 2.44772 1.44772 2 2 2L14 2Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconTable',
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
