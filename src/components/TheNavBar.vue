<template>
    <header v-if="visible">
        <h3>Gmail</h3>
        <ul>
            <li><router-link to="/dashboard">Главная</router-link></li>
            <li>
              <router-link to="/mail" custom v-slot="{ navigate, href }">
                <a href="#" @click="navigate" :class="{
                  active: $route.path.indexOf(href) !== -1
                }">Почта</a>
              </router-link>
            </li>
            <li><a href="#" @click.prevent="logout()">Выйти</a></li>
        </ul>
    </header>
</template>

<script>
export default {
  inject: ['logout'],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
}

ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

a {
  text-decoration: none;
}

.active {
  color: red;
}
</style>
