<template>
  <div v-if="!placeholder" class="box" :style="{borderColor: 'rgb('+255*(1-data.score)+', '+255*data.score+', 0)'}">
    <a class="box-icon" :href="'https://poocoin.app/tokens/'+data.address" target="_blank"><img src="../../assets/poocoin.png" alt="PooCoin"></a>
    <router-link style="color: var(--primary-text-color)" class="box-title" :to="'/token/'+data.address"><w5>{{ data.ticker }}</w5> <w3>{{ data.name }}</w3></router-link>
    <table class="box-item-holder">
      <tr class="box-item">
        <td><w5>Address:</w5></td>
        <td><a :href="'https://bscscan.com/address/'+data.address" target="_blank"><w3>{{ shortenAddress(data.address) }}</w3></a></td>
      </tr>
      <tr class="box-item">
        <td><w5>Owner:</w5></td>
        <td><a v-if="data.owner" :href="'https://bscscan.com/address/'+data.owner" target="_blank"><w3>{{ shortenAddress(data.owner) }}</w3></a><w2 v-if="!data.owner"><i>null</i></w2></td>
      </tr>
      <tr class="box-item">
        <td><w5>Liquidity:</w5></td>
        <td><w3>{{ formatNumber(data.liquidity, 9) }} BNB</w3></td>
      </tr>
      <tr class="box-item">
        <td><w5>Contract:</w5></td>
        <td><w3 v-if="data.contract">Public</w3><w3 v-if="!data.contract">Private</w3></td>
      </tr>
    </table>
  </div>
  <div v-else class="box" :style="{borderColor: 'var(--primary-asset-color)'}">
    <span class="box-title"><w5 class="placeholder">ABC</w5> <w3 class="placeholder">Abcde Fghij</w3></span>
    <table class="box-item-holder">
      <tr class="box-item">
        <td><span class="placeholder">Address:</span></td>
        <td ><span class="placeholder">{{ shortenAddress("1111111") }}</span></td>
      </tr>
      <tr class="box-item">
        <td><span class="placeholder">Owner:</span></td>
        <td><span class="placeholder">{{ shortenAddress("33333333") }}</span></td>
      </tr>
      <tr class="box-item">
        <td><span class="placeholder">Liquidity:</span></td>
        <td><span class="placeholder">0.123 AAA</span></td>
      </tr>
      <tr class="box-item">
        <td><span class="placeholder">Contract:</span></td>
        <td><span class="placeholder">Public</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CoinCard",
  components: {},
  props: {
    data: Object,
    placeholder: Boolean
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
  border: 3px solid;
  min-width: var(--item-width);
  display: inline-block;
  position: relative;
  background-color: var(--secondary-bg-color);
  border-radius: var(--default-radius);
  padding: .75rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-title{
  font-size: 26px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.box-item-holder{
  margin: 10px 0 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.box-icon{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25px;
  height: 25px;
  margin: 7px;
}

.box-icon > img{
  max-width: 100%;
  max-height: 100%;
}
</style>