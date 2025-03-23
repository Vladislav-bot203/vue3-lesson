export default {
  install (app, options) {
    let current = 'ru'

    const changeLanguage = () => {
      if (current === 'ru') {
        current = 'en'
      } else {
        current = 'ru'
      }
    }

    app.config.globalProperties.$alert = (text) => {
      window.alert(text)
    }

    app.config.globalProperties.$i18n = key => {
      return key.split('.').reduce((value, k) => {
        return value[k] || '=== UNKNOWN ==='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}
