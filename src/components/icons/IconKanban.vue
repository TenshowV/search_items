<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M3 1C3.55228 1 4 1.44772 4 2L4 14C4 14.5523 3.55228 15 3 15C2.44772 15 2 14.5523 2 14L2 2C2 1.44772 2.44772 1 3 1ZM8 1C8.55228 1 9 1.44772 9 2V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10L7 2C7 1.44772 7.44772 1 8 1ZM13 1C13.5523 1 14 1.44772 14 2V6C14 6.55228 13.5523 7 13 7C12.4477 7 12 6.55228 12 6V2C12 1.44772 12.4477 1 13 1Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconKanban',
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
