const initialState = false;

const spinnerReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "start":
      return {
        ...prevState,
        spinner: true,
      };
    case "stop":
      return {
        ...prevState,
        spinner: false,
      };
    default:
      return initialState;
  }
};

export default spinnerReducer;
