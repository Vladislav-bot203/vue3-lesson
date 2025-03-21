import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './theme.css'

const app = createApp(App)
app.component('async-component', defineAsyncComponent(() => {
  return import('./components/AsyncComponent.vue')
}))

app.mount('#app')
