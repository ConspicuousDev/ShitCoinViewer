<script src="../../../../ShitCoinAPI/index.js"></script>
<template>
  <div class="page">
    <span class="top-left" :style="{fontSize: '30px'}"><span v-if="autoUpdate"><span v-if="window.width >= 600">Updating <span v-if="updateTimer < updateDelay">in </span></span><span v-if="updateTimer >= updateDelay && window.width >= 600">now</span><span v-if="updateTimer < updateDelay || window.width < 600"><span v-if="updateDelay-updateTimer >= 0">{{ updateDelay-updateTimer }}</span><span v-if="updateDelay-updateTimer < 0">0</span> second<span v-if="updateDelay-updateTimer > 1">s</span></span>...</span><span v-if="!autoUpdate && window.height >= 600">Auto Update is disabled.</span></span>
    <span class="sticky top-right" :style="{fontSize: '30px'}"><f>{{ tokens.length }}</f> Tokens <span v-if="window.width >= 600">found</span></span>
    <br><br>
    <div class="content h-center" :style="{width: getContentWidth()+'px'}">
      <CoinCard v-for="token in tokens" :key="token.address" :data="token" />
    </div>
  </div>
</template>

<script>
import CoinCard from "@/components/parts/CoinCard";
import {get} from "@/main";

export default {
  name: "Home",
  components: {CoinCard},
  computed() {
    return{

    }
  },
  data() {
    return{
      autoUpdate: true,
      updateDelay: 5,
      updateTimer: 0,
      error: null,
      tokens: [],
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    getContentWidth(){
      let w = Math.floor(this.window.width/336)
      if(w > 0){
        return w*336
      }
      return 336
    },
    onResize(){
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    requestTokens() {
      get("/v1/tokens").then(res => {
        if (res.data.success) {
          let tokens = res.data.tokens
          tokens.reverse()
          this.tokens = tokens
        } else {
          this.error = res.data.error
        }
        this.updateTimer = 0
      })
    },
    async update(){
      this.requestTokens()
      while(this.autoUpdate) {
        if(this.updateTimer > this.updateDelay) {
          this.requestTokens()
        }
        await new Promise(res => setTimeout(res, 1000))
        this.updateTimer++
      }
    }
  },
  mounted() {
    this.update()
    this.onResize()
    window.addEventListener("resize", this.onResize);
  }
}
</script>

<style scoped>

</style>