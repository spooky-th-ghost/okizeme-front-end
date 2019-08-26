<template lang='pug'>
    .c-btn(@click="clicked")
</template>

<script>
export default {
  name: 'c-b',
  methods: {
    clicked() {
      console.log("I've been clicked")
      this.$emit('clicked')
    }
  }
}
</script>

<style lang='scss'>
.c-btn{
  background-color: pink;
  color: white;
  height: 3em;
  width: 5em;
  margin: 0.5em;
  padding: -0.5em;
  border: 0.35em solid black;
  font-size: 1.5em;
  border-radius: 1em;
  text-align: center;
  line-height:3em;
  float:left;
  box-shadow: 0 0 0 black;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  line-height:2.8em;
  position: relative;
  z-index: 20;
}

.c-btn:hover {
  box-shadow: 0.4rem 0.4rem 0 grey;
  transform: translate(-0.4rem, -0.4rem);
}

.c-btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}
</style>
