<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 7.44772 0.447715 7 1 7C1.55228 7 2 7.44772 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C7.44772 2 7 1.55228 7 1C7 0.447715 7.44772 0 8 0ZM8 3.5C8.55229 3.5 9 3.94772 9 4.5L9 7.46484L11.5547 9.16797L11.6367 9.22852C12.0282 9.55079 12.1193 10.1238 11.832 10.5547C11.5448 10.9855 10.9812 11.1218 10.5332 10.8848L10.4453 10.832L7 8.53516V4.5C7 3.94772 7.44772 3.5 8 3.5ZM3 3C3.55228 3 4 3.44772 4 4C4 4.55228 3.55228 5 3 5H1C0.447715 5 4.82823e-08 4.55228 0 4C-4.82823e-08 3.44772 0.447715 3 1 3L3 3ZM5.10254 0.00488281C5.60667 0.0562144 6 0.482323 6 1C6 1.51768 5.60667 1.94379 5.10254 1.99512L5 2L1 2C0.447715 2 7.68122e-08 1.55228 0 1C1.10026e-07 0.447715 0.447715 7.68122e-08 1 0L5 0L5.10254 0.00488281Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconTimeplan',
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
