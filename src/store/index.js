import { reactive, readonly } from "vue";

const state = reactive({
    isStart: false,
    field: 0,
    hoverSquareList: [],
});

const setField = (value) => {
    const res = parseInt(value);
    if(!isNaN(res)) {
        state.field = res;
    }
};

const setHoverSquareList = (value) => {
    if(Array.isArray(value)){
        state.hoverSquareList = value;
    }
}

const setStart = (value) => {
    state.isStart = !!value;
}


export const store = { state: readonly(state), setField, setHoverSquareList, setStart };