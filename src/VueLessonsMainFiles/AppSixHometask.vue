<template>
    <div class="appWrapper">
      <div class="cv-container">
        <app-cv-constructor
          @add-element="renderElement"
        ></app-cv-constructor>
        <app-cv-preview
          :elements="elements"
        ></app-cv-preview>
      </div>
      <button class="add-button active" @click="load" v-if="!isLoading">Load comments</button>
      <app-loader v-else></app-loader>
      <app-alert-message :alert="alert" @close="closeAlert"></app-alert-message>
      <app-comments :comments="comments"></app-comments>
      <!-- <button class="add-button active" @click="send">send</button> -->
    </div>
  </template>

<script>
import AppCvConstructor from './components/AppCvConstructor.vue'
import AppCvPreview from './components/AppCvPreview.vue'
import axios from 'axios'
import AppAlertMessage from './components/AppAlertMessage.vue'
import AppComments from './components/AppComments.vue'
import AppLoader from './components/AppLoader.vue'

export default {
  components: { AppCvConstructor, AppCvPreview, AppAlertMessage, AppComments, AppLoader },
  data () {
    return {
      elements: [],
      comments: [],
      isLoading: false,
      alert: null
    }
  },
  methods: {
    renderElement (type, text) {
      this.elements.push({ type, text })
    },
    async load () {
      try {
        this.isLoading = true
        const { data } = await axios.get('https://vue3-https-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
        if (!data) {
          throw new Error('No comments added')
        }
        this.alert = {
          type: 'success',
          title: 'Success!',
          message: 'Comments were loaded from the database!'
        }
        this.comments = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        this.isLoading = false
      } catch (error) {
        this.alert = {
          type: 'error',
          title: 'Error!',
          message: error.message
        }
        this.isLoading = false
      }
    },
    closeAlert () {
      this.alert = null
    }
    // async send () {
    //   await fetch('https://vue3-https-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       mail: 'vnaftolin228@gmail.com',
    //       text: 'asd asd asd asd asd asd asd asd asd asd asd asd asdasd asd asdasdasdasdv  v vvv  v asd v v v v'
    //     })
    //   })
    // }
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

  .cv-container {
    display:  flex;
    justify-content: center;
    margin-top: 20px;
    width: 80%;
    align-items: stretch;
    gap: 20px;
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
