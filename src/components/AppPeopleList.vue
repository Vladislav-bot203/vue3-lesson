<template>
    <div v-if="people.length !== 0">
        <div class="card" v-for="person in people" :key="person.id">
        <h3>{{ person.firstName }}</h3>
        <button @click="$emit('delete', person.id)" class="submit-btn">Delete</button>
    </div>
    </div>
    <div v-else class="card">
        <h4>There is no people</h4>
        <button class='submit-btn' @click="$emit('loadPeople')">Download list</button>
    </div>
</template>

<script>

export default {
  emits: ['loadPeople', 'delete'],
  props: {
    people: Array
  }
}
</script>

<style scoped lang="scss">
    .card {
      width: 600px;
      border-radius: 15px;
      background-color: azure;
      padding: 15px;
      margin-bottom: 20px;
  }

  .submit-btn {
    border: 0;
    border-radius: 20px;
    padding: 8px;
    background-color: rgb(80, 179, 80);
    color: white;
  }
</style>
