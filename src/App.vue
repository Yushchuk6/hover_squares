<template>
  <div class="app-wrap">
    <div class="board-wrap">
      <SelectMode class="select" />
      <Board v-show="state.isStart" />
    </div>
    <div class="info-wrap" v-show="state.isStart">
      <h2>Hover Squares</h2>
      <HoverSquaresInfo class="info" />
    </div>
  </div>
</template>

<script>
import SelectMode from "./components/SelectMode.vue";
import Board from "./components/Board.vue";
import HoverSquaresInfo from "./components/HoverSquaresInfo.vue";

import { store } from "./store";

export default {
  name: "App",
  components: {
    SelectMode,
    Board,
    HoverSquaresInfo,
  },
  setup() {
    const { state } = store;

    return {
      state,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>

<style scoped lang="scss">
.app-wrap {
  display: flex;
}
.board-wrap {
  margin: 20px;
}
.info {
  margin: 20px;
  padding-right: 20px;
  height: 80vh;
  overflow-y: overlay;
}
.select {
  display: flex;
  margin-bottom: 20px;
}
</style>
