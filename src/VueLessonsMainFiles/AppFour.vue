<template>
    <div class="appWrapper">
      <form class="card" @submit.prevent="submitForm">
        <h1>Анкета на Vue разработчика!</h1>
        <app-input
          placeholder="Введите имя"
          :error="errors.name"
          label="Как тебя зовут?"
          v-model:modelValue="name"
        ></app-input>

        <div class="form-control">
          <label for="age">Выберите возраст</label>
          <input
            type="number"
            id="age"
            min="18"
            max="70"
            v-model.number="age"
          >
        </div>

        <div class="form-control">
          <label for="city">Твой город?</label>
          <select id="city" v-model="city">
            <option value="spb">Санкт-Петербург</option>
            <option value="msk">Москва</option>
            <option value="kzn">Казань</option>
            <option value="nsk">Новосибирск</option>
          </select>
        </div>

        <div class="form-control">
          <span>Готов к переезду в Токио?</span>

          <div>
            <label><input v-model="relocate" type="radio" name="trip" value="Yes">Да</label>
          </div>

          <div>
            <label><input v-model="relocate" type="radio" name="trip" value="No">Нет</label>
          </div>
        </div>

        <div class="form-control">
          <span>Что знаешь во Vue?</span>
          <div class="form-el">
            <label><input type="checkbox" name="skills" v-model="skills" value="vuex">Vuex</label>
          </div>

          <div class="form-el">
            <label><input type="checkbox" name="skills" v-model="skills" value="CLI">Vue CLI</label>
          </div>

          <div class="form-el">
            <label><input type="checkbox" name="skills" v-model="skills" value="router">Vue Router</label>
          </div>
        </div>

        <div class="form-control">
          <div class="form-el">
            <span style="display: block;">Чтобы продолжить нажмите "Разрешить"</span>
            <label><input type="checkbox" v-model="agree">Разрешить обработку персональных данных?</label>
          </div>
        </div>

        <button type="submit" class="submit-btn">Отправить</button>
      </form>
    </div>
  </template>

<script>
import AppInput from './components/AppInput.vue'

export default {
  components: { AppInput },
  methods: {
    formIsValid () {
      let isValid = true

      if (!this.name.length) {
        isValid = false
        this.errors.name = 'Имя не может быть пустой строкой'
      } else {
        this.errors.name = null
      }

      return isValid
    },
    submitForm (event) {
      if (this.formIsValid()) {
        console.group('Form Data')
        console.log('Name:', this.name)
        console.log('Age:', this.age)
        console.log('City:', this.city)
        console.log('To Tokyo:', this.relocate)
        console.log('Skills:', this.skills)
        console.log('Agree:', this.agree)
        console.groupEnd()
      }
    }
  },
  data () {
    return {
      name: '',
      age: 20,
      city: 'nsk',
      relocate: null,
      skills: [],
      agree: null,
      errors: {
        name: null
      }
    }
  }

}
</script>

  <style scoped lang="scss">
      .appWrapper {
      font-family: sans-serif;
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

    .form-control {
      display: flex;
      gap: 10px;
      flex-direction: column;
      margin-bottom: 40px;
    }

    .submit-btn {
      border: 0;
      border-radius: 20px;
      padding: 8px;
      background-color: rgb(80, 179, 80);
      color: white;
    }
  </style>
