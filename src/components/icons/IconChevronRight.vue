<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M5.84181 3.24727C6.23145 2.90664 6.81116 2.92215 7.18165 3.26777L7.25294 3.34199L10.7529 7.34199L11.3291 8.0002L10.7529 8.6584L7.25294 12.6584C6.88936 13.0739 6.25745 13.1165 5.84181 12.7531C5.4263 12.3895 5.38373 11.7576 5.74708 11.342L8.67091 8.0002L5.74708 4.6584L5.6836 4.57832C5.39027 4.16512 5.45222 3.58816 5.84181 3.24727Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconChevronRight',
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
