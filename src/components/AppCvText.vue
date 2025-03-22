<template>
    <div>
        <span>{{ text }}</span>
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
        word-wrap: break-word;
    }
    span {
      font-family: sans-serif;
      display: block;
      font-weight: lighter;
      word-wrap: break-word;
    }
</style>
