<template>
  <div class="page">
    <router-link style="color:#000" to="/"><e :style="{fontSize: '28px'}">Home</e></router-link><br>
    <span v-if="!data"><c :style="{fontSize: '30px'}">TOKEN NOT FOUND, BITCH</c></span>
    <div v-if="data">
      <f>{{ data.ticker }}</f>&nbsp;<c>{{ data.name }}</c><br>
      {{ data.address }}<br><br>
      <span v-if="!data.contract">CONTRACT NOT PUBLIC, BITCH <one>(cock in yo mouth)</one></span>
      <div v-if="data.contract">
        {{ data.contract.sourceCode }}
      </div>
    </div>
  </div>
</template>

<script>
import {get} from "@/main";

export default {
  name: "Token",
  props: {
    address: String
  },
  data() {
    return {
      data: null
    };
  },
  mounted() {
    get("/v1/token/"+this.address).then(res => {
      if(res.data.success){
        this.data = res.data.token
      }
    })
  }
}
</script>

<style scoped>

</style>