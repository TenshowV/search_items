<template>
  <div class="grid grid-rows-[auto_1fr_auto] h-full w-18 border-r border-black-20 py-4 px-3">
    <div>
      <img src="@/assets/images/logo.png" alt="logo-image" class="w-12 h-12" />
    </div>
    <div class="flex flex-col justify-between pt-12 px-2 pb-6">
      <div class="grid gap-y-2">
        <BaseIconItem icon="app" state="active" />
        <BaseIconItem icon="list" state="ordinary" />
        <BaseIconItem icon="contact" state="ordinary" />
        <BaseIconItem icon="statistic" state="ordinary" />
        <BaseIconItem icon="tiles" state="ordinary" />
      </div>
      <div class="grid gap-y-2">
        <BaseIconItem icon="settings" state="ordinary" />
        <BaseIconItem icon="timeplan" state="ordinary" />
      </div>
    </div>
    <div class="grid gap-y-2 border-t border-black-20 pt-6">
      <a href="#" class="bg-black-100 rounded-full p-4">
        <BaseIcon icon="plus" state="active" />
      </a>
      <a class="relative" href="#">
        <img class="w-12 h-12 rounded-full" src="@/assets/images/user.jpg" alt="user-pic" />
        <div class="absolute right-0 top-0 rounded-full w-3 h-3 p-[2.5px] bg-black-05 before:w-full before:h-full before:bg-black-100 before:block before:rounded-full"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sidebar',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts"></script>

<style scoped></style>
