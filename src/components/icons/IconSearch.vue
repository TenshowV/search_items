<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M7 0C10.866 0 14 3.13401 14 7C14 8.57659 13.4781 10.031 12.5986 11.2012C12.636 11.2293 12.673 11.2589 12.707 11.293L15.707 14.293L15.7754 14.3691C16.0957 14.7619 16.0731 15.3409 15.707 15.707C15.3409 16.0731 14.7619 16.0957 14.3691 15.7754L14.293 15.707L11.293 12.707C11.2589 12.673 11.2293 12.636 11.2012 12.5986C10.031 13.4781 8.57659 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0ZM7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconSearch',
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
