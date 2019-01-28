// export const increment = { type: 'INCREMENT' }
// export const decrement = { type: 'DECREMENT' }

//Action Creator (Redux)

export const decrement = (value) => { 
  return {
    type: 'DECREMENT' ,
    value: value
  }
}

export const increment = (value) => { 
  return {
    type: 'INCREMENT' ,
    value: value
  }
}