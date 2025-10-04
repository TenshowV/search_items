import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { getSearchItems } from '@/api/services/searchApi';
import type { FillterOption } from '@/types/componentTypes';

export const useSearchStore = defineStore('search', () => {
  const searchItems = ref<Record<string, unknown>[]>([]);
  const searchName = ref('');

  const preparedSearchItems = computed<FillterOption[]>(() =>
    searchItems.value.map((item) => {
      return {
        id: item.id as number,
        name: item.name as string,
        position: item.position as string,
        sectionId: item.section_id as number,
      };
    }),
  );

  const findItem = async () => {
    const response = await getSearchItems({ q: searchName.value, limit: 30 });

    if (response.state == 'success') {
      searchItems.value = response.data.items;
    }

    return response;
  };

  return {
    searchName,
    preparedSearchItems,
    findItem,
  };
});
