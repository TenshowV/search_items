<template>
  <LayoutMain>
    <BaseColumn class="w-1/4" item-name="Вакансии" items-count="3" help-text="Все">
      <CardVacancy position="Техник агропромышленного комплекса" subdivision="ООО «Агропром»" state="pending" />
      <CardVacancy position="Техник агропромышленного комплекса" subdivision="ООО «Агропром»" state="interview" />
    </BaseColumn>
    <BaseColumn class="w-1/2" item-name="События" items-count="6" help-text="Календарь">
      <CardEvent time="09:00" title="Интервью" full-name="Константинопольский Константин Константинович" position="Менеджер по продажам" extra-info="+3 вакансии" />
      <CardEvent time="09:00" title="Интервью" full-name="Константинопольский Константин Константинович" position="Менеджер по продажам" extra-info="" />
    </BaseColumn>
    <BaseColumn class="w-1/4" item-name="Задачи" items-count="212" help-text="Все" :has-right-border="false">
      <CardTask title="Разбор откликов" count="150" state="analysis" />
      <CardTask title="Назначение интервью" count="52" state="purpose" />
      <CardTask title="Обработка заявок" count="8" state="processing" />
      <CardTask title="Подготовка оффера" count="2" state="preparation" />
    </BaseColumn>
  </LayoutMain>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup lang="ts">
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import CardVacancy from '@/components/cards/CardVacancy.vue';
import CardEvent from '@/components/cards/CardEvent.vue';
import CardTask from '@/components/cards/CardTask.vue';
</script>

<style scoped></style>
