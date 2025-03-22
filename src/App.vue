<template>
  <div class="appWrapper">

  </div>
</template>

<script>

export default {}

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
