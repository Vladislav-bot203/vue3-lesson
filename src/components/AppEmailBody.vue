<template>
    <div v-if="email">
        <h2>{{ email.theme }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut minima voluptates doloribus quod voluptatibus atque dolores quisquam aliquid facilis, mollitia, harum, consequuntur porro dolore reprehenderit incidunt accusamus veritatis cumque.</p>
        <button class="app-button active" @click="$router.push('/mail')">Закрыть</button>
    </div>
    <div v-else>
        <h4>Выберите письмо</h4>
    </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: {
    mailId: {
      type: String
    }
  },
  computed: {
    email () {
      return this.emails.find(e => e.id === this.mailId)
    }
  }
}
</script>

<style scoped lang="scss">
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
