<template>
    <div class="appWrapper">
      <app-alert-lesson
      v-if="alert"
       text="Это очень важное сообщение, будьте бдительны"
       title="Внимание!"
       type="primary"
       :closable="true"
       @close="alert = false"
      ></app-alert-lesson>
      <div class="card">
        <button class="add-button active" @click="toggleAlert">{{ alert ? 'Close message' : 'Open message'}}</button>
      </div>

      <app-blog></app-blog>
    </div>
  </template>

<script>
import AppAlertLesson from './components/AppALertLesson.vue'
import AppBlog from './components/AppBlog.vue'
import alertMixin from './mixins/alertMixin'

export default {
  components: { AppAlertLesson, AppBlog },
  mixins: [alertMixin]
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
