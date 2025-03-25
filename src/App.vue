<template>
  <the-nav-bar :visible="isAuth"></the-nav-bar>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'

export default {
  components: { TheNavBar },
  provide () {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: '1', theme: 'Купил себе PlayStation 5' },
        { id: '2', theme: 'Выучил Vue Router' },
        { id: '3', theme: 'Хочу изучить весь Vue' },
        { id: '4', theme: 'А следующий блок про Vuex!' },
        { id: '5', theme: 'А что там насчет Vue Hooks?' }
      ]
    }
  },
  data () {
    return {
      isAuth: false
    }
  },
  methods: {
    login () {
      this.isAuth = true
      if (this.$route.query.page) {
        this.$router.push(this.$route.query.page)
      } else {
        this.$router.push('/dashboard')
      }
    },
    logout () {
      this.isAuth = false
      this.$router.push({
        path: '/login',
        query: {
          page: this.$route.path
        }
      })
    }
  }
}

</script>

<style scoped lang="scss">
.appWrapper {
  padding: 15px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: rgb(38, 38, 73);
  height: 100%;
}

.card {
  display:  flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  margin-top: 20px;
  width: 80%;
  align-items: stretch;
  gap: 20px;
  background-color: aliceblue;
  border-radius: 20px;
}

.add-button {
        width: 20%;
        padding: 8px;
        align-self: center;
        text-align: center;
        color: white;
        border: 0;
        border-radius: 20px;
    }
    .active {
        background: rgb(125, 204, 125);
        &:hover {
            cursor: pointer;
        }
    }

    .error {
      background-color: rgb(177, 99, 99);
      &:hover {
        cursor: pointer;
      }
    }
    .form-control {
      width: 100%;
    }

    input {
      width: 100%;
    }

@media (max-width: 900px) {
  .cv-container {
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  gap: 20px;
  align-items: stretch;
}
}

</style>
