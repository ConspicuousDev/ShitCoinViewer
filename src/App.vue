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

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

one{
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
.content{
  max-width: 1008px;
}
.h-center{
  margin: 0 auto;
}

.v-spacer{
  height: 5px;
}

.box{
  display: inline-block;
  position: relative;
  width: 500px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px;
  border-radius: 8px;
  border: 1px transparent solid;
}
.box-title{
  margin: 0 0 0 5px;
  max-width: 95%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.box-item-holder{
  margin: 0 0 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.box-icon{
  width: 25px;
  height: 25px;
  margin: 7px;
}
.box-icon *{
  width: inherit;
  height: inherit;
}

.top-right{
  position: absolute;
  top: 0;
  right: 0;
}
.top-left{
  position: absolute;
  top: 0;
  left: 0;
}
.bottom-right{
  position: absolute;
  bottom: 0;
  right: 0;
}
.bottom-left{
  position: absolute;
  bottom: 0;
  left: 0;
}

router-link{
  color: #B0B0B0;
  text-decoration: none;
}
router-link:hover{
  text-decoration: underline;
}
a{
  color: #109BE6;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
</style>
