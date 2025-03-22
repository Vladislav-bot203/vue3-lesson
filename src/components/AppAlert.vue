<template>
    <div v-if="alert" :class="alert.type" class="alert">
        <h3>{{ alert.title }}</h3>
        <p>{{ alert.text }}</p>
        <button class="submit-btn" @click="$emit('close')">Close</button>
    </div>
</template>

<script>

export default {
  props: ['alert'],
  emits: ['close']
}
</script>

<style scoped lang="scss">
    .error {
        background-color: rgb(211, 155, 155);
    }

    .success {
        background-color: rgb(162, 201, 154);
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

    .submit-btn {
    border: 0;
    border-radius: 20px;
    padding: 8px 20px;
    background-color: rgb(80, 179, 80);
    color: white;
  }
</style>
