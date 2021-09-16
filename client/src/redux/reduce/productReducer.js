import {
  GET_ALL_BEDSHEETS,
  GET_ALL_DUVETCOVERS,
  GET_ALL_PILLOWCASES,
} from "../types/productTypes";

const productReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ALL_BEDSHEETS:
      return { ...state, bedSheets: action.payload };

    case GET_ALL_DUVETCOVERS:
      return { ...state, duvetCovers: action.payload };

    case GET_ALL_PILLOWCASES:
      return { ...state, pillowcases: action.payload };

    default:
      return state;
  }
};

export default productReducer;
