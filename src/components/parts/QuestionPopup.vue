<template>
  <div class="popup" @mouseenter="this.showPopup" @mouseleave="this.hidePopup">
    <b>?</b>
  </div>
</template>

<script>
export default {
  name: "QuestionPopup",
  props: {
    text: String
  },
  methods: {
    showPopup(e){
      e.currentTarget.getElementsByTagName("b")[0].innerText = "? "+this.text
    },
    hidePopup(e){
      e.currentTarget.getElementsByTagName("b")[0].innerText = "?"
    }
  }
}
</script>

<style scoped>
.popup{
  display: inline-block;
  width: fit-content;
  padding: 0 5px;
  border-radius: 4px;
  border: 1px #B0B0B0 solid;
  transition: .2s border-color, .2s width;
}
.popup:hover{
  background: white;
  position: absolute;
  border-color: #000000;
  cursor: pointer;
}
</style>