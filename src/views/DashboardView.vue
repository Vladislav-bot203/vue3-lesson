<template>
    <div class="card">
        <h1>Привет на главной</h1>
        <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма</p>

        <router-link :to="{ name: 'email' }">В почту</router-link>
   </div>
</template>

<script>
export default {
  beforeRouteEnter () {
    console.log('beforeRouteEnter')
  },
  beforeRouteLeave (to, from, next) {
    const answer = confirm('Вы уверены?')

    if (answer) {
      next()
    } else {
      next(false)
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
</style>
