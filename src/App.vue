<template>
  <div class="container" id="app">

    <b-notification type="is-primary" aria-close-label="Close notification">
      Перед вами простой пример игры на VueJS. Цель игры добывать (биткоины) ₿ и покупать на них новые майнинг фермы.
      Для того, чтобы начать добывать биткоины купите ферму ниже ↓ Чтобы добыть больше ₿ вам нужно купить больше ферм.
      Чем дороже ферма - тем больше она приносит дохода
    </b-notification>

      <div class="columns">



        <div class="column col-buy">
          <h2 class="title1">
            Купить ферму
            <span><b>Добыча:</b> 0.000 ₿</span>
          </h2>
          <hr>
          <Farm v-for="(farm, index) in this.$store.state.farms"
                :key="farm.name"
                :name="farm.name"
                :cost="farm.cost"
                :extraction="farm.extraction"
                :index="index"
          />
        </div>

        <div class="column col-stats">
          <h2 class="title1">
            Статистика
            <span><b>Баланс:</b> {{ this.$store.state.balance.toFixed(3) }} ₿</span>
          </h2>
          <hr>
          <div class="columns">
            <div class="column">
              <h3 class="title2">Ваши фермы:</h3>
              <ul>
                <li v-for="farm in this.$store.state.farms"
                    :key="farm.name"
                >{{ farm.name }}: <mark>{{ farm.quantity }}</mark></li>
              </ul>
            </div>
            <div class="column">
              <ul>
                <li><b>Добыча в секунду      </b> {{ allExtraction }} ₿</li>
                <li><b>Всего добыто          </b> {{ totalExtracted }}₿</li>
                <li><b>Общая стоимость ферм  </b> {{ allCost }} ₿</li>
                <li><b>Количество ферм       </b> {{ farmsCount }}</li>
              </ul>
            </div>
          </div>
        </div>



      </div>

  </div>
</template>

<script>
  import store from "@/store";
  import Farm from "@/components/Farm"
  export default {
    components: {
      Farm
    },
    computed: {
      allCost(){
        return store.getters.getCost
      },
      allExtraction(){
        let ext = store.getters.getExtraction.toFixed(3)
        return ext
      },
      farmsCount(){
        return store.getters.getFarmsCount
      },
      totalExtracted(){
        return store.state.totalExtracted.toFixed(3)
      }
    },
    created() {
      setInterval(function (){
        store.commit('Increment', store.getters.getExtraction)
      }, 1000)
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
  mark{
    display: inline-block;
    padding: 7px;
    line-height: 10px;
    background: rgba(#7957d5, 0.2);
    border-radius: 100%;
    margin-left: 14px;
  }
  ul{
    margin-top: 20px !important;
    padding-left: 20px;
    li{
      //font-weight: 600;
      margin-bottom: 15px;
      color: #555;
      b{
        display: block;
        float: right;
      }
    }
  }
</style>
