export const initialState = {
  user: null,
  product: {},
  loader: false,
};

const getInitState = () => {
  let basket = JSON.parse(window.localStorage.getItem("basket"));
  if (!basket) localStorage.setItem("basket", JSON.stringify([]));
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
