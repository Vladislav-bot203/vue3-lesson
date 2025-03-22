<template>
  <div class="appWrapper">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form action="" class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>
      <div class="form-control">
        <label for="name">Input yor name</label>
        <input type="text" id="name" v-model.trim="name">
      </div>
      <button class="submit-btn" :disabled="name.length === 0">Create person</button>
    </form>
    <app-loader v-if="loading"></app-loader>
    <app-people-list
      v-else
      :people="people"
      @loadPeople="loadPeople"
      @delete="deletePerson($event)"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './components/AppPeopleList.vue'
import axios from 'axios'
import AppAlert from './components/AppAlert.vue'
import AppLoader from './components/AppLoader.vue'

export default {
  components: { AppPeopleList, AppAlert, AppLoader },
  data () {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted () {
    this.loadPeople()
  },
  methods: {
    async createPerson () {
      const response = await fetch('https://vue3-https-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const fireBaseData = await response.json()

      this.people.push({
        firstName: this.name,
        id: fireBaseData.name
      })

      this.name = ''
    },

    async loadPeople () {
      try {
        this.loading = true
        const { data } = await axios.get('https://vue3-https-default-rtdb.europe-west1.firebasedatabase.app/people.json')
        if (!data) {
          throw new Error('Список людей пуст!')
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key]
          }
        })
        this.loading = false
      } catch (error) {
        this.alert = {
          type: 'error',
          title: 'Error!',
          text: error.message
        }
        this.loading = false
      }
    },

    async deletePerson (id) {
      try {
        const personName = this.people.find(person => person.id === id).firstName
        await axios.delete(`https://vue3-https-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'success',
          title: 'Success!',
          text: `The user with name: "${personName}" was deleted`
        }
      } catch (error) {
        this.alert = {
          title: 'Error!',
          text: error.message
        }
      }
    }
  }
}

</script>

<style scoped lang="scss">
.appWrapper {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: rgb(38, 38, 73);
  padding: 20px;
}

.card {
  width: 600px;
  border-radius: 15px;
  background-color: azure;
  padding: 15px;
}

.form-control {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 40px;
}

.submit-btn {
  border: 0;
  border-radius: 20px;
  padding: 8px;
  background-color: rgb(80, 179, 80);
  color: white;
}
</style>
