<template>
  <div id="router-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  methods: {
    setFavicon(src) {
      let link = document.getElementById('dynamic-favicon')
      if (link) {
        link.href = src
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
    })
  }
}
</script>

<style>
@font-face {
  font-family: "UI";
  font-weight: 100;
  src: url("./assets/fonts/UI-100.otf") format("opentype");
}
@font-face {
  font-family: "UI";
  font-weight: 200;
  src: url("./assets/fonts/UI-200.otf") format("opentype");
}
@font-face {
  font-family: "UI";
  font-weight: 300;
  src: url("./assets/fonts/UI-300.ttf") format("truetype");
}
@font-face {
  font-family: "UI";
  font-weight: 400;
  src: url("./assets/fonts/UI-400.otf") format("opentype");
}
@font-face {
  font-family: "UI";
  font-weight: 500;
  src: url("./assets/fonts/UI-500.otf") format("opentype");
}
@font-face {
  font-family: "UI";
  font-weight: 600;
  src: url("./assets/fonts/UI-600.otf") format("opentype");
}
@font-face {
  font-family: "UI";
  font-weight: 700;
  src: url("./assets/fonts/UI-700.ttf") format("truetype");
}

w1{
  font-weight: 100;
}
w2{
  font-weight: 200;
}
w3{
  font-weight: 300;
}
w4{
  font-weight: 400;
}
w5{
  font-weight: 500;
}
w6{
  font-weight: 600;
}
w7{
  font-weight: 700;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--light-gray-color);
  border-radius: 20px;
  transition: background-color var(--normal-delay);
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--gray-color);
}

*, *::before, *::after{
  box-sizing: border-box;
}
html, body{
  margin: 0;
  padding: 0;
  font-family: "UI", sans-serif;
  font-weight: 400;
  font-size: 20px;
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
}

a{
  color: var(--primary-asset-color);
  text-decoration: none;
}
router-link{
  color: var(--primary-text-color);
  text-decoration: none;
}
a:hover, router-link:hover{
  color: var(--secondary-asset-color);
  text-decoration: underline;
  cursor: pointer;
}

:root{
  --primary-bg-color: hsl(240, 15%, 12%);
  --secondary-bg-color: hsl(240, 13%, 16%);

  --primary-text-color: hsl(265, 0%, 94%);
  --secondary-text-color: hsl(265, 0%, 80%);

  --primary-asset-color: hsl(246, 100%, 74%);
  --secondary-asset-color: hsl(246, 100%, 64%);

  --dark-gray-color: hsl(0, 0%, 35%);
  --gray-color: hsl(0, 0%, 50%);
  --light-gray-color: hsl(0, 0%, 70%);

  --default-radius: .5rem;

  --normal-delay: 200ms
}
</style>
