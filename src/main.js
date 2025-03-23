import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './plugins/translatePlugin'
// import alertMixin from './mixins/alertMixin'

const app = createApp(App)
app.component('async-component', defineAsyncComponent(() => {
  return import('./components/AsyncComponent.vue')
}))

const ru = {
  app: {
    title: 'Как работают плагины во Vue?',
    changeBtn: 'Изменить язык',
    alertBtn: 'Вызвать алерт',
    openModal: 'Открыть модальное окно'
  }
}

const en = {
  app: {
    title: 'How plugins work in Vue?',
    changeBtn: 'Change language',
    alertBtn: 'Call alert',
    openModal: 'Open modal'
  }
}
// global mixin
// app.mixin(alertMixin)

// global directive
// app.directive('focus', {
//   mounted (el) {
//     el.focus()
//   }
// })

app.use(translatePlugin, { ru, en })

app.mount('#app')
