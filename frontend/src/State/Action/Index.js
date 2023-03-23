export const startSpinner = (data) => {
  return (dispatch) => {
    dispatch({
      type: "start",
      spinner: data.spinner,
    });
  };
};
export const stopSpinner = (data) => {
  return (dispatch) => {
    dispatch({
      type: "stop",
      spinner: data.spinner,
    });
  };
};
