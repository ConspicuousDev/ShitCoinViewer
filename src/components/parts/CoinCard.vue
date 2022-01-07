<template>
  <div class="box">
    <div class="box-title"><f>{{ data.ticker }}</f>&nbsp;<c>{{ data.name }}</c></div>
    <div class="v-spacer"></div>
    <div class="box-item"><e>Address:</e>&nbsp;<c>{{ data.address }}</c></div>
    <div class="box-item"><e>Owner:</e>&nbsp;<c>{{ data.owner }}</c></div>
    <div class="box-item"><e>Liquidity:</e>&nbsp;<c>{{ data.liquidity }} BNB</c>&nbsp;<QuestionPopup :text="'Expires on '+new Date(data.liquidityDate).toLocaleString('en-US').replace(',', ' @')"/></div>
    <div class="box-item"><e>Contract:</e>&nbsp;<c>{{ data.publicCode }}</c></div>
  </div>
</template>

<script>
import QuestionPopup from "@/components/parts/QuestionPopup";
export default {
  name: "CoinCard",
  components: {QuestionPopup},
  props: {
    data: Object
  }
}
</script>

<style scoped>
.box-title{
  font-size: 28px;
}
.box-item{
  font-size: 20px;
}
</style>