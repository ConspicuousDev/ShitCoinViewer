<template>
  <div class="box" :style="{borderColor: 'rgb('+255*(1-data.score)+', '+255*data.score+', 0)'}">
    <div class="box-icon bottom-right"><a :href="'https://poocoin.app/tokens/'+data.address" target="_blank"><img src="../../assets/poocoin.png"></a></div>
    <div class="box-title"><router-link style="color:#000" :to="'/token/'+data.address"><f>{{ data.ticker }}</f>&nbsp;<c>{{ data.name }}</c></router-link></div>
    <div class="v-spacer"></div>
    <table class="box-item-holder">
      <tr class="box-item">
        <td><e>Address:</e></td>
        <td><a :href="'https://bscscan.com/address/'+data.address" target="_blank"><c>{{ shortenAddress(data.address) }}</c></a></td>
      </tr>
      <tr class="box-item">
        <td><e>Owner:</e></td>
        <td><a v-if="data.owner" :href="'https://bscscan.com/address/'+data.owner" target="_blank"><c>{{ shortenAddress(data.owner) }}</c></a><b v-if="!data.owner"><i>null</i></b></td>
      </tr>
      <tr class="box-item">
        <td><e>Liquidity:</e></td>
        <td><c>{{ formatNumber(data.liquidity, 9) }} BNB</c>&nbsp;<QuestionPopup :text="'Expires on '+new Date(data.liquidityDate).toLocaleString('en-US').replace(',', ' @')"/></td>
      </tr>
      <tr class="box-item">
        <td><e>Contract:</e></td>
        <td><c v-if="data.contract">Public</c><c v-if="!data.contract">Private</c></td>
      </tr>
    </table>
  </div>
</template>

<script>
import QuestionPopup from "@/components/parts/QuestionPopup";
export default {
  name: "CoinCard",
  components: {QuestionPopup},
  props: {
    data: Object
  },
  methods: {
    countDecimals(number){
      if(Math.floor(number) !== number) {
        return number.toString().split(".")[1].length || 0
      }
      return 0
    },
    formatNumber(number, decimals){
      if(this.countDecimals(number) > decimals){
        return number.toFixed(decimals)
      }
      return number
    },
    shortenAddress(address){
      return address.substring(0, 6)+"..."+address.substring(address.length-4)
    }
  }
}
</script>

<style scoped>
.box{
  margin: 10px;
  border: 3px solid;
  max-width: 300px;
}
.box-title{
  font-size: 28px;
}
.box-item{
  font-size: 20px;
}
</style>