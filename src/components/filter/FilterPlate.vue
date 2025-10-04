<template>
  <div v-show="visible" class="absolute top-[115%] left-0 w-full bg-white rounded-2xl z-2">
    <div class="flex border-b border-black-05">
      <div class="grid gap-y-4 flex-1 border-r border-black-05 p-6">
        <p class="font-inter text-black-100 text-sm/5">Свойства кандидатов</p>
        <div class="grid gap-y-2">
          <div class="grid gap-y-1">
            <label class="font-inter text-xs/4 text-black-60">ФИО кандидата</label>
            <div class="flex gap-x-2">
              <BaseInput />
            </div>
          </div>
          <div class="grid gap-y-1">
            <label class="font-inter text-xs/4 text-black-60">Этапы воронок</label>
            <div class="flex gap-x-2">
              <BaseSelect />
              <BaseButton size="medium" icon="structure" />
            </div>
          </div>
          <div class="grid gap-y-1">
            <label class="font-inter text-xs/4 text-black-60">Дата события</label>
            <div class="flex gap-x-2 w-1/3">
              <BaseInput icon="calendar" />
            </div>
          </div>
          <div class="grid gap-y-1">
            <label class="font-inter text-xs/4 text-black-60">Список событий</label>
            <div class="flex gap-x-2">
              <BaseSelect />
              <BaseButton size="medium" icon="structure" />
            </div>
          </div>
          <div class="grid gap-y-1">
            <label class="font-inter text-xs/4 text-black-60">Содержимое резюме</label>
            <div class="flex gap-x-2">
              <BaseInput />
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-[auto_1fr] gap-y-4 p-6">
        <p class="font-inter text-black-100 text-sm/5">События</p>
        <div class="flex flex-col justify-start gap-y-2 max-w-54.25">
          <BaseButton text="Интервью у заказчика" small-text="897" size="small" width="full" />
          <BaseButton text="Проверка СБ" small-text="897" size="small" width="full" />
          <BaseButton text="Интервью с руководителем" small-text="897" size="small" width="full" />
          <BaseButton text="Оффер" small-text="897" size="small" width="full" />
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center gap-x-2 p-6">
      <div class="flex justify-start gap-x-4">
        <BaseButton size="large" icon="settings" />
        <BaseButton size="medium" text="Все фильтры" />
      </div>
      <div class="flex justify-end gap-x-4">
        <BaseButton width="fixed" size="medium" text="Очистить" />
        <BaseButton width="fixed" size="medium" text="Применить" color="black" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FilterPlate',
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
interface Props {
  visible: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
});
</script>

<style scoped></style>
