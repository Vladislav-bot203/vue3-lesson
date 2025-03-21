<template>
    <div class="appWrapper">
      <div>
        <h2>Актуальные новости {{ now }}</h2>
        <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано <strong>{{ readRate }}</strong></span>
      </div>
      <NewsItem
      v-for="item in news"
      :title="item.title"
      :key="item.id" :id="item.id"
      :isOpen="item.isOpen"
      :wasRead="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark-news="unmark"
      />
    </div>
  </template>

<script>
import NewsItem from './components/NewsItem.vue'

export default {
  components: {
    NewsItem
  },
  data () {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        { title: 'Title 1', id: 1, wasRead: false },
        { title: 'Title 2', id: 2, wasRead: false },
        { title: 'Title 3', id: 3, wasRead: false },
        { title: 'Title 4', id: 4, wasRead: false },
        { title: 'Title 5', id: 5, wasRead: false }
      ],
      openRate: 0,
      readRate: 0
    }
  },
  methods: {
    openNews () {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unmark (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = false
      this.readRate--
    }
  },
  provide () {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  }
}
</script>

  <style lang="scss" scoped>
  h2 {
    color: white;
  }

  span {
    color: white;
  }

  .appWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    background-color: rgb(38, 38, 73);
    padding: 20px;
  }
  </style>
