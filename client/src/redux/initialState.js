export const initialState = {
  user: null,
  loader: false,
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
