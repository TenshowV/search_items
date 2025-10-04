import type { CustomDirective } from '@/types/types';
import type { DirectiveBinding, Ref } from 'vue';

interface ClickOutsideElement extends HTMLElement {
  clickOutside?: (event: Event) => void;
}

interface ClickOutsideOptions {
  handler: (event: Event) => void;
}

const VClickOutside: CustomDirective = {
  name: 'click-outside',
  value: {
    mounted(element: ClickOutsideElement, binding: DirectiveBinding<ClickOutsideOptions>) {
      element.clickOutside = function (event: Event) {
        if (!(element == event.target || (event.target && element.contains(event.target as Node)))) {
          binding.value.handler(event);
        }
      };

      document.body.addEventListener('click', element.clickOutside);
    },
    unmounted(element: ClickOutsideElement, binding: DirectiveBinding<ClickOutsideOptions>) {
      if (element?.clickOutside) {
        document.body.removeEventListener('click', element.clickOutside);
      }
    },
  },
};

export default VClickOutside;
