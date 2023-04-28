<template>
  <div class="list">
    <div class="list-item" v-for="pos in state.hoverSquareList" :key="pos">
      row: {{ getRow(pos) }}, col {{ getCol(pos) }}
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";

import { store } from "../store";

export default {
  name: "HoverSquaresInfo",
  setup() {
    const { state } = store;
    const getRow = (pos) => {
      return Math.floor(pos / state.field) + 1;
    };
    const getCol = (pos) => {
      const res = pos % state.field;
      return res + 1;
    };
    return {
      state,
      getRow,
      getCol,
    };
  },
};
</script>

<style scoped lang="scss">
.list {
    .list-item {
        display: flex;
        align-items:center;
        justify-content:left;

        width: 150px;
        height: 40px;

        padding: 10px;
        margin-bottom: 10px;

        background-color:blanchedalmond;

        border-radius: 5px;
    }
}
</style>
