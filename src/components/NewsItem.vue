<template>
    <div>
        <h3>{{ title }}</h3>
        <button  @click="open">{{ isOpen ? 'Закрыть' : 'Открыть' }}</button>
        <button v-if="wasRead" @click="$emit('unmark-news', id)">Отметить непрочитанной</button>
        <div v-if="isOpen">
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sint atque amet possimus qui libero sapiente fugit unde veritatis. Nulla repudiandae corrupti architecto, repellat distinctio voluptas ea veritatis vero a.</p>
            <button v-show="!wasRead" @click="mark">Прочесть новость</button>
        </div>
    </div>
</template>

<script>

export default {
// emits: ['open-news']
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('No param of id for read-news')
      return false
    },
    'unmark-news' (id) {
      if (id) {
        return true
      }
      console.warn('No param of id for read-news')
      return false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: Number,
    wasRead: Boolean
    // isOpen: {
    //   type: Boolean,
    //   default: false,
    //   validator (value) {
    //     return true
    //   }
    // }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open () {
      this.isOpen = !this.isOpen
      if (this.isOpen) this.$emit('open-news')
    },
    mark () {
      this.isOpen = false
      this.$emit('read-news', this.id)
    }
    // unmark () {
    //   this.isOpen = true
    //   this.$emit('unmark-news', this.id)
    // }
  }
//   props: ['title']
}
</script>
