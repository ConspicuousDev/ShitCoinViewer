<template>
  <div class="page">
    <span v-if="autoUpdate && updateTimer < updateDelay">Updating in {{ updateDelay-updateTimer }} second<span v-if="updateDelay-updateTimer > 1">s</span>...</span>
    <span v-if="autoUpdate && updateTimer >= updateDelay">Updating now...</span>
    <span v-if="!autoUpdate">Auto Update is disabled.</span>
    <br><span>{{ tokens.length }} Tokens found</span>
    <CoinCard v-for="token in tokens" :key="token.address" :data="token" />
  </div>
</template>

<script>
import CoinCard from "@/components/parts/CoinCard";
import axios from "axios";

export default {
  name: "Home",
  components: {CoinCard},
  data() {
    return{
      autoUpdate: true,
      updateDelay: 5,
      updateTimer: 0,
      error: null,
      tokens: []
    }
  },
  methods: {
    requestTokens(){
      axios
          .get("http://52.39.55.16:8080/api/tokens")
          .then(res => {
            if (res.data.success) {
              this.tokens = res.data.tokens
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
  }
}
</script>

<style scoped>

</style>