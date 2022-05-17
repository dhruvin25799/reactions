export const modalInputReducer = (state, action) => {
  switch (action.type) {
    case "URL": {
      return { ...state, url: action.payload };
    }
    case "CAPTION": {
      const { colored, gray } = styleRing(action.payload.length);
      return {
        ...state,
        caption: action.payload,
        charLength: action.payload.length,
        strokeDashArray: `${colored} ${gray}`,
      };
    }
    default:
      return state;
  }
};

export const initialModalInputState = {
  url: "",
  caption: "",
  charLength: 0,
  strokeDashArray: "",
};

const styleRing = (charLength) => {
  const r = 15;
  const circleLength = 2 * Math.PI * r;
  let colored = (circleLength * charLength) / 50;
  let gray = circleLength - colored > 0 ? circleLength - colored : 0;
  return { colored, gray };
};
