<template>
    <div class="appWrapper">
      <div class="card" v-if="show">
        <h2 v-color:[type].blink.hover="myColor">Разговор про директивы</h2>
        <div class="form-control">
          <label for="input">Активный по умолчанию</label>
          <input v-focus type="text" id="input">
        </div>

        <button class="add-button active" @click="myColor = 'darkblue'">Сделать синим</button>
        <button class="add-button active" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Переключить тип: {{ type }}</button>
      </div>
    </div>
  </template>

<script>
import focusDirective from './directives/focusDirective'
import colorDirective from './directives/colorDirective'

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective
  },
  data () {
    return {
      myColor: 'darkred',
      type: 'color',
      show: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 5000)
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
