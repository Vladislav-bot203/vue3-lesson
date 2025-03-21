<template>
    <div class="newsItem">
        <h3>{{ title }}</h3>
        <app-button
        class="openBtn"
        color="primary"
        @action="open"
        >{{ isOpen ? 'Закрыть' : 'Открыть' }}</app-button>
        <app-button
        color="danger"
        v-if="wasRead"
        @action="$emit('unmark-news', id)"
        >Отметить непрочитанным</app-button>
        <div v-if="isOpen">
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sint atque amet possimus qui libero sapiente fugit unde veritatis. Nulla repudiandae corrupti architecto, repellat distinctio voluptas ea veritatis vero a.</p>
            <app-button
            color="readable"
            v-show="!wasRead"
            @action="mark"
            >Прочесть</app-button>

            <app-news-list></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList.vue'

export default {
// emits: ['open-news']
  components: {
    'app-button': AppButton,
    'app-news-list': AppNewsList
  },
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

<style lang="scss" scoped>
  .newsItem {
    border-radius: 10px;
    background-color: rgb(230, 219, 205);
    padding: 15px 10px;
    width: 60%;
  }

  .openBtn {
    margin-right: 20px;
  }
</style>
