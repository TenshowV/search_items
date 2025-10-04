<template>
  <div class="grid gap-y-4 self-start bg-white rounded-card py-3 px-4">
    <div class="overflow-hidden">
      <p class="font-inter text-base/6 font-semibold text-black-100 truncate">
        {{ position }}
      </p>
      <p class="font-inter text-xs/4 font-normal text-black-60">
        {{ subdivision }}
      </p>
    </div>
    <div class="flex justify-between items-center gap-x-2">
      <div class="flex items-center gap-x-1">
        <div class="w-3 h-3 rounded-full bg-black-100"></div>
        <p :class="['font-inter text-xs/4 font-semibold text-black-100', { 'text-black-40': state == 'interview' }]">
          {{ states[state] }}
        </p>
      </div>
      <a v-if="state == 'pending'" href="#" class="flex gap-x-[2px]">
        <div class="w-1 h-1 bg-black-40"></div>
        <div class="w-1 h-1 bg-black-40"></div>
        <div class="w-1 h-1 bg-black-40"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardVacancy',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
interface Props {
  position?: string;
  subdivision?: string;
  state?: 'pending' | 'interview';
}

const props = withDefaults(defineProps<Props>(), {
  position: '',
  subdivision: '',
  state: 'pending',
});

const states: Record<string, string> = {
  pending: 'Кандидат',
  interview: 'Собеседование',
};
</script>

<style scoped></style>
