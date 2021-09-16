export const initialState = {
  user: null,
  product: {},
  loader: false,
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
