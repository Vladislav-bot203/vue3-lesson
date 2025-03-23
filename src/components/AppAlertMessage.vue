<template>
    <div v-if="alert" :class="alert.type" class="alert">
        <h3>{{ alert.title }}</h3>
        <p>{{ alert.message }}</p>
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
        border-left: 10px solid red;
    }

    .success {
        background-color: rgb(162, 201, 154);
        border-left: 10px solid green;
    }

    .alert {
        padding: 20px 20px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        text-align: center;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .submit-btn {
    border: 0;
    padding: 8px 20px;
    background-color: rgb(80, 179, 80);
    color: white;

    &:hover {
        cursor: pointer;
    }
  }
</style>
