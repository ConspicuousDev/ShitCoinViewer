<template>
  <div class="container">
    <div class="header">
      <div class="info">
        <div style="margin-right: 1rem"><span v-if="autoUpdate">Updating <span v-if="updateTimer >= updateDelay">now</span><span v-if="updateTimer < updateDelay">in {{ updateDelay-updateTimer }} second<span v-if="(updateDelay-updateTimer) > 1">s</span></span>...</span><span v-if="!autoUpdate">Auto Update is disabled.</span></div>
        <div style="text-align: right">{{ tokens.length }} Tokens found</div>
      </div>
      <div class="filters">
        <div>
          <!--          <span>Update Delay:</span>-->
          <!--          <OutlineButton class="btn" @click.native="updateDelay = 1"><w2>1s</w2></OutlineButton>-->
          <OutlineButton class="btn" @click.native="updateDelay = 3"><w2>3s</w2></OutlineButton>
          <OutlineButton class="btn" @click.native="updateDelay = 5"><w2>5s</w2></OutlineButton>
          <OutlineButton class="btn" @click.native="updateDelay = 10"><w2>10s</w2></OutlineButton>
        </div>
        <OutlineTextInput placeholder="Search"/>
        <OutlineButton class="btn"><w3>Advanced Mode</w3></OutlineButton>
      </div>
    </div>
    <div ref="grid" class="grid" v-if="!received">
      <CoinCard  v-for="i in 9" :key="i" :placeholder="true"/>
    </div>
    <div ref="grid" class="grid" v-if="received">
      <CoinCard v-for="token in tokens.slice(0, getCurrentlyLoaded(tokens))" :key="token.address" :data="token"/>
    </div>
  </div>
</template>

<script>
import {get, sleep} from "@/main";
import CoinCard from "@/components/home/CoinCard";
import OutlineButton from "@/components/common/OutlineButton";
import OutlineTextInput from "@/components/common/OutlineTextInput";

export default {
  name: "CoinGrid",
  components: {OutlineTextInput, OutlineButton, CoinCard},
  data(){
    return{
      autoUpdate: true,
      updateDelay: 5,
      updateTimer: 0,
      error: null,
      received: false,
      loaded: 30,
      increment: 30,
      tokens: []
    }
  },
  methods: {
    async requestTokens() {
      await get("/v1/tokens").then(res => {
        if (res.data.success) {
          let tokens = res.data.tokens
          tokens.reverse()
          this.received = true
          this.tokens = tokens
        } else {
          this.error = res.data.error
        }
        this.updateTimer = 0
      })
    },
    async update() {
      await this.requestTokens()
      while (this.autoUpdate) {
        if (this.updateTimer > this.updateDelay) {
          await this.requestTokens()
        }
        await sleep(1000)
        this.updateTimer++
      }
    },
    getCurrentlyLoaded(array){
      if(array.length >= this.loaded) return this.loaded
      return array.length
    }
  },
  async beforeMount() {
    await this.requestTokens()
  },
  async mounted() {
    window.addEventListener("scroll", () => {
      let bound = this.$refs.grid.children[this.$refs.grid.children.length-1].getBoundingClientRect()
      if(bound.top <= innerHeight+100 && this.loaded < this.tokens.length){
        this.loaded += this.increment
      }
      bound = this.$refs.grid.children[this.$refs.grid.children.length-this.increment].getBoundingClientRect()
      if(bound.top > innerHeight+100 && this.loaded > this.increment) {
        this.loaded -= this.increment
      }
    })
    await this.update()
  }
}
</script>

<style scoped>
.container{
  --item-width: 300px;
  --max-columns: 3;
  --gap: 2rem;
  max-width: calc(calc(var(--item-width) + var(--gap)) * var(--max-columns));
}

.header{
  display: block;
  margin-bottom: calc(var(--gap) / 2);
  background-color: var(--secondary-bg-color);
  color: var(--primary-text-color);
  padding: 1rem;
  border-radius: var(--default-radius);
}

.info{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.filters{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: .75rem;
}

.filters > div > *{
  margin-right: .4rem;
}

.filters > div > *:last-child{
  margin-right: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--gap);
  justify-content: center;
}
</style>