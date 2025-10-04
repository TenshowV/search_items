<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      :class="pathClass"
      d="M8.00018 1C8.55237 1.00011 9.00018 1.44778 9.00018 2V7L14.0002 7L14.1027 7.00488C14.6068 7.05621 15.0001 7.4824 15.0002 8C15.0002 8.51767 14.6068 8.94378 14.1027 8.99512L14.0002 9L9.00018 9V14L8.9953 14.1025C8.94398 14.6066 8.51777 14.9999 8.00018 15C7.48251 15 7.05641 14.6067 7.00507 14.1025L7.00018 14L7.00018 9H2.00018C1.4479 9 1.00018 8.55228 1.00018 8C1.00027 7.44779 1.44795 7 2.00018 7L7.00018 7L7.00018 2C7.00018 1.44772 7.4479 1 8.00018 1Z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconPlus',
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
