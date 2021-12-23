function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

function dispatch(action){
  state = changeState(state, action);
  render()
}

dispatch(action)


function render(){
  document.body.textContent = state.count
}

render()
