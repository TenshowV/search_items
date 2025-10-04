<template>
  <div class="relative w-full">
    <input v-model="model" class="w-full border border-black-20 rounded-xl font-inter py-2 pl-2 pr-8" :placeholder="placeholder" type="text" />
    <BaseIcon v-if="icon" class="absolute translate-y-[-50%] top-[50%] right-3" :icon="icon" @click="emit('clickIcon')" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseInput',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
interface Props {
  icon?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  placeholder: '',
});

const model = defineModel<string | number>();

const emit = defineEmits<{
  (e: 'clickIcon'): void;
}>();
</script>

<style scoped></style>
