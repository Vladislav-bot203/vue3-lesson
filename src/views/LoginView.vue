<template>
    <div class="appWrapper">
      <div class="card">
        <form @submit.prevent="submit">
          <h2>Mini clone of Gmail</h2>
          <label for="email">Email</label>
          <input type="text" id="email" v-model.trim="email" autocomplete="username">
          <label for="password">Password</label>
          <input type="password" id="password" autocomplete="current-password" v-model="password">
          <button class="app-button active" type="submit">Войти</button>
          <router-link to="forget">
            <button class="app-button error">Забыл пароль?</button>
          </router-link>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
  inject: ['login', 'logout'],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return this.email !== '' && this.password !== ''
    }
  },
  methods: {
    submit () {
      if (this.isValid) {
        this.login()
      }
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
