<template>
  <div>
      <select class="select" v-model="field">
        <option disabled :value="0">Pick mode</option>
        <option
          v-for="mode in squareModeList"
          :key="mode.id"
          :value="mode.field"
        >
          {{ mode.name }}
        </option>
      </select>
      <input type="button" value="Start" @click="start"/>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import { store } from "../store";

export default {
  name: "SelectMode",
  setup() {
    const { state, setField, setHoverSquareList, setStart } = store;
    const field = computed({
      get() {
        return state.field;
      },
      set(val) {
        setHoverSquareList([]);
        setStart(false);
        setField(val);
      }
    });

    const squareModeList = ref([]);
    fetch("https://60816d9073292b0017cdd833.mockapi.io/modes")
      .then((res) => res.json())
      .then((data) => {
        squareModeList.value = data;
      });

    const start = () => setStart(true);

    return {
      squareModeList,
      field,
      start,
    };
  },
};
</script>

<style scoped lang="scss">
.select{
  width: 200px;
  margin-right: 10px;
}
</style>
