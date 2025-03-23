const alertMixin = {
  data () {
    return {
      alert: false
    }
  },
  methods: {
    toggleAlert () {
      this.alert = !this.alert
    }
  }
}

export default alertMixin
