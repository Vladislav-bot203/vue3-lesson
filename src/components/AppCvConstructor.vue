<template>
    <div class="form__container">
        <form class="form-items__container" @submit.prevent="submit">
            <div class="form-item__container">
                <label for="type">Type of header</label>
                <select id="type" v-model="type">
                    <option value="header">Header</option>
                    <option value="avatar">Avatar</option>
                    <option value="subtitle">Subtitle</option>
                    <option value="text">Text</option>
                </select>
            </div>

            <div class="form-item__container">
                <label for="textarea">Value</label>
                <textarea id="textarea" v-model="text"></textarea>
            </div>
            <button class="add-button" :class="isValidText ? 'active' : 'inactive'">Add</button>
        </form>
    </div>
</template>

<script>

export default {
  emits: ['addElement'],
  data () {
    return {
      type: 'header',
      text: ''
    }
  },
  methods: {
    submit () {
      this.$emit('addElement', this.type, this.text)
      this.type = 'header'
      this.text = ''
    }
  },
  computed: {
    isValidText () {
      return this.text.length >= 4
    }
  }
}

</script>

<style scoped lang="scss">
    .form__container {
        flex: 1;
        display: flex;
        align-items: stretch;
        min-width: 350px;
    }

    .form-items__container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        background-color: rgb(209, 221, 232);
        border-radius: 20px;
        padding: 3rem;
        align-items: stretch;
    }

    .form-item__container {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        font-size: 16px;
        resize: none;
    }

    .add-button {
        width: 40%;
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

    .inactive {
        background: #ccc;
        &:hover {
            cursor: not-allowed;
        }
    }

    @media (max-width: 900px) {
        .form__container {
        display: block;
        }
    }
</style>
