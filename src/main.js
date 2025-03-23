import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './theme.css'
// import alertMixin from './mixins/alertMixin'

const app = createApp(App)
app.component('async-component', defineAsyncComponent(() => {
  return import('./components/AsyncComponent.vue')
}))

// app.mixin(alertMixin)

app.mount('#app')
