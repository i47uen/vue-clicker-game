<template>
  <div class="card" :class="balance >= cost ? 'available' : 'not_available'">
    <h3>{{ name }}</h3>
    <p>Добыча <span>{{ extraction.toFixed(3) }}</span> ₿/c</p>
    <p>Стоимость: <span class="cost">{{ cost.toFixed(3) }}</span> ₿</p>
    <b-button @click="buyFarm(index)" type="is-primary">Купить</b-button>
  </div>
</template>

<script>
  import store from "@/store";
  export default {
    props: {
      name: String,
      extraction: Number,
      cost: Number,
      index: Number
    },
    methods: {
      buyFarm(){
        if (this.balance >= this.cost){
          this.$buefy.notification.open({
            message: 'Вы успешно купили '+this.name,
            type: 'is-success',
            duration: 1200,
            animation: 'fade'
          })
          store.commit('buyFarm', this.index)
        } else {
          this.$buefy.notification.open({
            message: 'Вам не хватает ₿ чтобы купить '+this.name,
            type: 'is-danger'
          })
        }
      }
    },
    computed: {
      balance(){
        return store.state.balance
      }
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
    border: 2px solid #7957d5;
    &.available{
      .cost{
        color: mediumseagreen;
      }
    }
    &.not_available{
      button{
        background: #999;
      }
      color: #777;
      border-color: #999;
      .cost{
        color: orangered;
      }
    }
    h3,span{
      font-weight: bold;
    }
    span{
      padding: 0 7px;
      text-decoration: underline;
    }
  }
  .button{
    height: 100%;
    font-weight: 600;
    border-radius: 0;
  }
  .red{
    color: indianred;
  }
  .green{
    color: yellowgreen;
  }
</style>