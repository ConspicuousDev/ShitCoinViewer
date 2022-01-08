import Vue from "vue"
import Router from "vue-router"
import App from "./App.vue"
import www from "./routes/www"
import NotFound from "@/components/NotFound";
import axios from "axios";

Vue.config.productionTip = false

Vue.use(Router)

export function get(endpoint){
  let api = "http://omniscient.phild.education:8888"
  if(location.hostname === "localhost"){
    api = "http://localhost:8888"
  }
  return axios.get(api+endpoint)
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
