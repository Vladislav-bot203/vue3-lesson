import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './plugins/translatePlugin'
import router from './router'
// import alertMixin from './mixins/alertMixin'

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

const app = createApp(App)

app.use(router)
app.use(translatePlugin, { ru, en })

app.component('async-component', defineAsyncComponent(() => {
  return import('./components/AsyncComponent.vue')
}))

// global mixin
// app.mixin(alertMixin)

// global directive
// app.directive('focus', {
//   mounted (el) {
//     el.focus()
//   }
// })

app.mount('#app')
