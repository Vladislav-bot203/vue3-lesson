<template>

    <div class="appWrapper">
      <div class="card">
        <async-component></async-component>
        <h2>Dynamic and async components</h2>

        <app-button
          ref="myBtn"
          class="btns"
          :color="oneColor"
          @action="active = 'one'"
        >One</app-button>
        <app-button
          class="btns"
          :color="twoColor"
          @action="active = 'two'"
        >Two</app-button>
      </div>
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
    </div>
  </template>

<script>
import AppButton from './components/AppButton.vue'
import AppTextOne from './components/AppTextOne.vue'
import AppTextTwo from './components/AppTextTwo.vue'

export default {
  components: { AppButton, AppTextOne, AppTextTwo },
  data () {
    return {
      active: 'one'
    }
  },
  mounted () {
    // usage of refs
    this.$refs.myBtn.btnLog()
  },
  computed: {
    // componentName () {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {
        console.log('ComponentName', value)
      }
    },
    oneColor () {
      return this.active === 'one' ? 'readable' : 'primary'
    },
    twoColor () {
      return this.active === 'two' ? 'readable' : 'primary'
    }
  }
}
</script>

  <style scoped lang="scss">
      .appWrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      background-color: rgb(38, 38, 73);
      padding: 20px;
    }

    .card {
      width: 600px;
      border-radius: 15px;
      background-color: azure;
      padding: 15px;
    }

    .btns {
      margin: 0 10px;
    }
  </style>
