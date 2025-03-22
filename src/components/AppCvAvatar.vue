<template>
    <div>
        <img :src="text" alt="avatart">
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
    display: flex;
    justify-content: center;
}

img {
    width: 250px;
    height: auto;
    border-radius: 30px;
}

</style>
