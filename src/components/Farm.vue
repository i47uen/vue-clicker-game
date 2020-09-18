<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>Добыча <span>{{ extraction }}</span> ₿/c</p>
    <p>Стоимость: <span>{{ cost }}</span> ₿</p>
    <b-button type="is-primary">Купить</b-button>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      extraction: Number,
      cost: Number
    }
  }
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 14px rgba(black, 0.12);
    padding-left: 30px;
    border-radius: 7px;
    margin-bottom: 20px;
    //background: rgba(yellow, 0.1);
    border: 2px solid #7957d5;
    h3,span{
      font-weight: bold;
    }
    span{
      text-decoration: underline;
    }
  }
  .button{
    height: 100%;
    font-weight: 600;
    border-radius: 0;
  }
</style>