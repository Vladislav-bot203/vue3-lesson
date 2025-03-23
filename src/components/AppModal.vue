<template>
        <div class="modal-wrapper" @click="$emit('close')">
            <div class="card-modal">
                <h3>Это заголовок модалки</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates! Hic autem libero cum. Labore aut sint explicabo ducimus fuga!</p>
            </div>
        </div>
  </template>

<script>

export default {
  emits: ['close']
}

</script>

  <style scoped lang="scss">
  .appWrapper {
    padding: 15px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    background-color: rgb(38, 38, 73);
    height: 100%;
  }

  .modal-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(67, 67, 67, 50%);
  }

  .card-modal {
    margin: 40px auto;
    display:  flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    margin-top: 20px;
    width: 600px;
    height: 200px;
    align-items: stretch;
    gap: 20px;
    background: rgb(174, 194, 130);
    border-radius: 20px;
  }

  .add-button {
          width: 20%;
          padding: 8px;
          align-self: center;
          text-align: center;
          color: white;
          border: 0;
          border-radius: 20px;
      }
      .active {
          background: rgb(125, 204, 125);
          &:hover {
              cursor: pointer;
          }
      }
      .form-control {
        width: 100%;
      }

      input {
        width: 100%;
      }

  @media (max-width: 900px) {
    .cv-container {
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
    width: 100%;
    gap: 20px;
    align-items: stretch;
  }
  }

  </style>
