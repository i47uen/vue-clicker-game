<template>
  <div class="container" id="app">
      <div class="columns">

        <div class="column col-buy">
          <h2 class="title1">
            Купить ферму
            <span><b>Добыча:</b> 0.000 ₿</span>
          </h2>
          <hr>
          <Farm v-for="farm in this.$store.state.farms"
                :key="farm.name"
                :name="farm.name"
                :cost="farm.cost"
                :extraction="farm.extraction"
          />
        </div>

        <div class="column col-stats">
          <h2 class="title1">
            Статистика
            <span><b>Баланс:</b> {{ this.$store.state.balance }} ₿</span>
          </h2>
          <hr>
          <div class="columns">
            <div class="column">
              <h3 class="title2">Ваши фермы:</h3>
              <ul>
                <li v-for="farm in this.$store.state.farms"
                    :key="farm.name"
                >{{ farm.name }}: {{ farm.quantity }}</li>
              </ul>
            </div>
            <div class="column">
              <ul>
                <li><b>Добыча в секунду:</b> 0.000 ₿</li>
                <li><b>Всего добыто:</b> 0.000 ₿</li>
                <li><b>Общая стоимость ферм:</b> 0.000 ₿</li>
                <li><b>Количество ферм:</b> 0</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
  import Farm from "@/components/Farm"
  export default {
    components: {
      Farm
    },
    methods: {
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  #app{
    margin-top: 70px;
  }
  .title1{
    font-size: 22px;
    font-weight: 600;
    span{
      font-weight: 100!important;
      float: right;
      color: #888;
    }
  }
  .title2{
    font-size: 18px;
    font-weight: 600;
  }
  ul{
    margin-top: 20px !important;
    padding-left: 20px;
    li{
      //font-weight: 600;
      margin-bottom: 15px;
      color: #555;
    }
  }
</style>
