const initialState = {
  // body: "#000080",
  body: "#000",
  sleeves: "#fff",
  rib1: "#fff",
  rib2: "#000",
  pockets: "#fff",
  buttons: "#fff",
};

const shirtColor = (state = initialState, action) => {
  if (action.type === "BODY_COLOR") {
    if (action.payload[1] !== "") {
      if (action.payload[0] === "body") {
        return {
          ...state,
          body: action.payload[1],
        };
      }
      if (action.payload[0] === "sleeves") {
        return {
          ...state,
          sleeves: action.payload[1],
        };
      }
      if (action.payload[0] === "rib1") {
        return {
          ...state,
          rib1: action.payload[1],
        };
      }
      if (action.payload[0] === "rib2") {
        return {
          ...state,
          rib2: action.payload[1],
        };
      }
      if (action.payload[0] === "pockets") {
        return {
          ...state,
          pockets: action.payload[1],
        };
      }
      if (action.payload[0] === "buttons") {
        return {
          ...state,
          buttons: action.payload[1],
        };
      }
    }
  }
  if (action.type === "START") {
    return initialState;
  }
  if (action.type === "START_AGAIN") {
    var popup = window.confirm("Are you sure to Start Again ...");
    if (popup === true) {
      return initialState;
    } else {
      return state;
    }
  }
  return state;
};
export default shirtColor;
