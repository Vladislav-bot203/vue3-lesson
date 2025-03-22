<template>
    <div class="cv-preview">
        <h2 v-if="!elements.length">Add first block to see the result</h2>
        <component v-for="({ text, type }, id) in elements" :is="`app-cv-${type}`" :key="id" :text="text"></component>
    </div>
</template>

<script>
import AppCvHeader from './AppCvHeader.vue'
import AppCvText from './AppCvText.vue'
import AppCvSubtitle from './AppCvSubtitle.vue'
import AppCvAvatar from './AppCvAvatar.vue'

export default {
  components: { AppCvHeader, AppCvText, AppCvSubtitle, AppCvAvatar },
  props: {
    elements: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">

.cv-preview {
    flex: 3;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: rgb(209, 221, 232);
    border-radius: 20px;
    padding: 3rem;
}

</style>
