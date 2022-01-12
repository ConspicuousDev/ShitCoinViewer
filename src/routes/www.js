import Router from "vue-router";
import Home from "@/components/home/Home";
import Token from "@/components/token/Token";

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            props: true,
            name: "Home",
            component: Home
        },
        {
            path: "/token/:address",
            props: true,
            name: "Token",
            component: Token
        }
    ]
})