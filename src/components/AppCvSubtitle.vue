<template>
    <div>
        <h2>{{ text }}</h2>
        <hr />
    </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
    }
    h2 {
      word-wrap: break-word;
    }
</style>
