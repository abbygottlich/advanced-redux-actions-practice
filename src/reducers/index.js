import { combineReducers } from "redux";

function currentCount(state = 0, action) {
  if (action.type === "INCREASE_COUNTER") {

  }
  if (action.type === "DECREASE_COUNTER") {

  }
  return state;
}

function users(state = [], action) {
  if (action.type === "ADD_USER") {
    // state = []
    // action.value = {} //user object
    // state.push(action.value)

    // let newArray = state.map(p => p);
    // newArray.push(action.value);
    // return newArray;

    return [...state,//state.map(p => p);
    action.value //newArray.push(action.value);
    ]
  }
  if (action.type === "REMOVE_USER") {
    //return state.splice
  }
  return state;
}


function specialText(state = "", action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

function currentCity(state = "", action) {
  if (action.type === "SET_CURRENT_CITY") {
    return action.value;
  }
  return state;
}

function searchText(state = "", action) {
  if (action.type === "SEARCH_TEXT") {
    return action.value;
  }
  return state;
}

function currentTemp(state = "", action) {
  if (action.type === "SET_CURRENT_TEMP") {
    return action.value;
  }
  return state;
}

function isLoading(state = "", action) {
  if (action.type === "IS_LOADING") {
    return action.value;
  }
  if (action.type === "IS_NOT_LOADING") {
    return action.value;
  }
  return state;
}

function videoURL(state = "", action) {
  if (action.type === "SET_VIDEO_URL") {
    return action.value;
  }
  return state;
}

function currentUserSort(state = "", action) {
  if (action.type === "FIRST_NAME") {
    return action.value;
  }
  if (action.type === "LAST_NAME") {
    return action.value;
  }
  return state;
}

function videoScale(state = "", action) {
  if (action.type === "SET_VIDEO_SIZE") {
    return action.value;
  }
  return state;
}

let reducers = combineReducers({
  currentCount, users, specialText, currentCity, searchText, currentTemp,
  isLoading, videoURL, currentUserSort, videoScale
})

export default reducers;

