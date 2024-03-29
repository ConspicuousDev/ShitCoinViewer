import Vue from "vue"
import Router from "vue-router"
import App from "./App.vue"
import www from "./routes/www"
import NotFound from "@/components/notFound/NotFound";
import axios from "axios";

Vue.config.productionTip = false

Vue.use(Router)

export async function sleep(ms){
  await new Promise(res => setTimeout(res, ms))
}
export async function get(endpoint){
  let api = "https://shitcoin-api.herokuapp.com"
  if(location.hostname === "localhost"){
    api = "http://localhost:8888"
  }else if(location.hostname === "omniscient.phild.education"){
     api = "http://omniscient.phild.education:8888"
  }
  return await axios.get(api+endpoint)
}

function router(router){
  router.addRoute({
    path: "*",
    props: true,
    name: "Not Found",
    component: NotFound
  })
  return router
}

new Vue({
  render: h => h(App),
  router: router(www)
}).$mount("#app")
