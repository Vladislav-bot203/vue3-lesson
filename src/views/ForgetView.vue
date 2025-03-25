<template>
    <div class="card">
        <h2>Забыл пароль? Так вспоминай!</h2>
        <button class="add-button active" @click="goToLogin">Обратно к лоигну</button>
    </div>
</template>

<script>
export default {
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
.card {
    margin: 0 auto;
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
</style>
