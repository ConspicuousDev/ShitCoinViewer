<template>
  <div id="router-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    setFavicon(src) {
      //@param src: Path from static directory root (public)
      let link = document.getElementById('dynamic-favicon')
      if (link) {
        link.href = src
      }
    }
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

a{
  font-weight: 100;
}
b{
  font-weight: 200;
}
c{
  font-weight: 300;
}
d{
  font-weight: 400;
}
e{
  font-weight: 500;
}
f{
  font-weight: 600;
}
g{
  font-weight: 700;
}

html, body{
  margin: 0;
  padding: 0;
  font-family: "UI", sans-serif;
  font-weight: 400;
}

.page{

}

.v-spacer{
  height: 5px;
}

.box{
  width: 575px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px;
  border-radius: 8px;
  border: 1px red solid;
}
.box-title{
  margin: 0 0 0 5px;
}
.box-item{
  margin: 0 0 0 10px;
}
</style>
