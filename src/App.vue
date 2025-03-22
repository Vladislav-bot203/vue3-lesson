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
    <button class="add-button active">Load comments</button>
  </div>
</template>

<script>
import AppCvConstructor from './components/AppCvConstructor.vue'
import AppCvPreview from './components/AppCvPreview.vue'

export default {
  components: { AppCvConstructor, AppCvPreview },
  data () {
    return {
      elements: []
    }
  },
  methods: {
    renderElement (type, text) {
      this.elements.push({ type, text })
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
