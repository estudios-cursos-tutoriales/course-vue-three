import { createApp } from 'vue'
// import Contador from './examples/ContadorComposition.vue';
// import Contador from './examples/ContadorOptions.vue';
import ProductsList from './examples/ProductsLits.vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
});

const app = createApp(ProductsList)
app.use(vuetify);
app.mount('#app')