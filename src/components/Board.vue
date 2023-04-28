<template>
  <div class="board">
    <Cell
      v-for="(_, index) in totalSquares"
      :key="index + state.field.toString()"
      :position="index"
      @changeHover="(status) => changeHover(index, status)"
    />
  </div>
</template>

<script>
import { computed } from "vue";

import { store } from "../store";

import Cell from "./Cell.vue";

export default {
  name: "Board",
  components: {
    Cell,
  },
  setup() {
    const { state, setHoverSquareList } = store;
    const totalSquares = computed(() => state.field ** 2);

    const changeHover = (val, status) => {
      const hoverListTemp = [...state.hoverSquareList];
      if (status) {
        hoverListTemp.push(val);
      } else {
        hoverListTemp.splice(hoverListTemp.indexOf(val), 1);
      }
      setHoverSquareList(hoverListTemp);
    };

    return {
      state,
      totalSquares,
      changeHover,
    };
  },
};
</script>

<style scoped lang="scss">
.board {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(v-bind("state.field"), 50px);
  grid-auto-rows: 50px;
}
</style>
