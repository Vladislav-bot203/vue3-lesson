<template>
  <div class="appWrapper">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="app-button active" @click="$alert('test')">{{ $i18n('app.alertBtn') }}</button>
      <button class="app-button active" @click="changeLang">{{ $i18n('app.changeBtn') }}</button>
      <button class="app-button active" @click="modal = !modal">{{ $i18n('app.openModal') }}</button>

      <teleport to="body">
        <app-modal
          v-if="modal"
          @close="modal = false"
        ></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from './components/AppModal.vue'

export default {
  components: { AppModal },
  inject: ['changeI18N'],
  methods: {
    changeLang () {
      this.changeI18N()
      this.$forceUpdate()
    }
  },
  data () {
    return {
      modal: false
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
