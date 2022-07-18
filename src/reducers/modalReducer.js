export const modalInputReducer = (state, action) => {
  switch (action.type) {
    case "POST_BODY": {
      const { colored, gray } = styleRing(action.payload.length);
      return {
        ...state,
        body: action.payload,
        charLength: action.payload.length,
        strokeDashArray: `${colored} ${gray}`,
      };
    }
    default:
      return state;
  }
};

export const initialModalInputState = {
  body: "",
  charLength: 0,
  strokeDashArray: "",
};

export const styleRing = (charLength) => {
  const r = 15;
  const circleLength = 2 * Math.PI * r;
  let colored = (circleLength * charLength) / 200;
  let gray = circleLength - colored > 0 ? circleLength - colored : 0;
  return { colored, gray };
};
