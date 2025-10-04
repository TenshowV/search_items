import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import '@/style.css';
import App from '@/App.vue';
import components from '@/components/UI';
import directives from '@/directives';

const app = createApp(App);
const pinia = createPinia();

components.forEach((component) => {
  if (component?.name) {
    app.component(component.name, component);
  }
});

directives.forEach((directive) => {
  app.directive(directive.name, directive.value);
});

app.use(pinia).use(router).mount('#app');
