import { createStore } from "redux";

const initialState = 0;
const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";

function counter(state = initialState, action) {
  //Retorna el valor del estado global actual (Si o si funcion pura)
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// store.subscribe(() => {
//   console.log(store.getState());
// });

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

// store.dispatch(increment());

// setTimeout(() => {
//   store.dispatch(decrement());
// }, 2000);

const store = createStore(counter);

export default store;
