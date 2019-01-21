const redux = require('redux')

function counterReducer(state = 0, action){
  // console.log(action)
  switch(action.type){
    // case 'INCREMENT': return state + 1
    // case 'DECREMENT': return state - 1
    case 'INCREMENT': return state + action.value
    case 'DECREMENT': return state - action.value
  }
  return state
}

function storeAlterado(){
  console.log(store.getState())
}

const store = redux.createStore(counterReducer)
store.subscribe(storeAlterado)

const increment = { type: 'INCREMENT', value: 3 }
const decrement = { type: 'DECREMENT', value: 2 }

store.dispatch(increment)
store.dispatch(decrement)