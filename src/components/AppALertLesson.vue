<template>
    <div class="alert" :class="type">
        <p>{{ title }}</p>
        <p>{{ text }}</p>
        <button class="add-button" v-if="closable" @click="$emit('close')">Close</button>
    </div>
</template>

<script>

export default {
  emits: ['close'],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      default: false,
      required: false
    },
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'error', 'success'].includes(value)
      }
    }

  }
}
</script>

<style scoped lang="scss">
    .error {
        background-color: rgb(211, 155, 155);
    }

    .success {
        background-color: rgb(162, 201, 154);
    }

    .primary {
        background-color: aqua;
    }

    .alert {
        border-radius: 20px;
        width: 600px;
        padding: 30px 0px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
    }

    .add-button {
        width: 20%;
        padding: 8px;
        align-self: center;
        text-align: center;
        color: white;
        border: 0;
        border-radius: 20px;
        background-color: aquamarine;

        &:hover {
            cursor: pointer;
        }
    }

</style>
