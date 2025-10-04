<template>
  <div class="flex gap-x-4 bg-white rounded-card py-3 px-4">
    <div class="grid w-1/2">
      <p class="font-inter text-base/6 font-semibold text-black-100">
        {{ time }}
      </p>
      <p class="font-inter text-xs/4 font-semibold text-black-100">
        {{ title }}
      </p>
    </div>
    <div class="flex items-center gap-x-2 w-1/2">
      <div class="w-8 h-8 bg-black-60 rounded-full"></div>
      <div class="flex-1 overflow-hidden">
        <p class="font-inter text-sm/5 font-semibold text-black-100 truncate">
          {{ fullName }}
        </p>
        <p class="font-inter text-xs/4 font-normal text-black-60">
          {{ position }} <b v-if="extraInfo" class="text-xs/4 font-semibold text-black-100">{{ extraInfo }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardEvent',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
interface Props {
  time?: string;
  title?: string;
  fullName?: string;
  position?: string;
  extraInfo?: string;
}

const props = withDefaults(defineProps<Props>(), {
  time: '',
  title: '',
  fullName: '',
  position: '',
  extraInfo: '',
});
</script>

<style scoped></style>
