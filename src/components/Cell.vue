<template>
  <div
    class="cell"
    :class="{ hovered }"
    @mouseover="onMouseOver"
  ></div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Cell",
  props: {
    position: Number,
  },
  setup(props, {emit}) {
    const hovered = ref(false);

    const onMouseOver = () => {
        hovered.value = !hovered.value;
        emit('changeHover', hovered.value);
    }

    return {
      hovered,
      onMouseOver,
    };
  },
};
</script>

<style scoped lang="scss">
.cell {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  background-color: white;
}

.hovered {
  background-color: lightblue;
}
</style>
