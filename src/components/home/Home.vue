<template>
  <div class="page">
    <!--    <span class="top-left" :style="{fontSize: '30px'}"><span v-if="autoUpdate"><span v-if="window.width >= 600">Updating <span v-if="updateTimer < updateDelay">in </span></span><span v-if="updateTimer >= updateDelay && window.width >= 600">now</span><span v-if="updateTimer < updateDelay || window.width < 600"><span v-if="updateDelay-updateTimer >= 0">{{ updateDelay-updateTimer }}</span><span v-if="updateDelay-updateTimer < 0">0</span> second<span v-if="updateDelay-updateTimer > 1">s</span></span>...</span><span v-if="!autoUpdate && window.height >= 600">Auto Update is disabled.</span></span>-->
    <!--    <span class="sticky top-right" :style="{fontSize: '30px'}"><f>{{ tokens.length }}</f> Tokens <span v-if="window.width >= 600">found</span></span>-->
    <!--    <br><br>-->
    <!--    <div class="content h-center" :style="{width: getContentWidth()+'px'}">-->
    <!--      <CoinCard v-for="token in tokens" :key="token.address" :data="token" />-->
    <!--    </div>-->
    <CoinGrid ref="coinGrid"/>
  </div>
</template>

<script>
import CoinGrid from "@/components/home/CoinGrid";
export default {
  components: {CoinGrid}
}
</script>

<style scoped>
.page{
  display: block;
}
.page > *{
  margin: 0 auto;
}
</style>