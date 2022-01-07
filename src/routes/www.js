import Router from "vue-router";
import Home from "@/components/Home";

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            props: true,
            name: "Home",
            component: Home
        }
    ]
})