import {
  GET_ALL_PRODUCT_DB,
  GET_PRODUCT_BY_ARTICLE_DB,
} from "../../urls/ProductUrls";
import {
  GET_ALL_BEDSHEETS,
  GET_ALL_DUVETCOVERS,
  GET_ALL_PILLOWCASES,
} from "../types/productTypes";
import axios from "axios";

export const getProductByArticleStart =
  ({ article, setProduct }) =>
  async (dispatch) => {
    axios
      .get(`${GET_PRODUCT_BY_ARTICLE_DB}/${article}`)
      .then((res) => setProduct(res.data));
  };

export const getAllProductStart = (name) => async (dispatch) => {
  axios.get(`${GET_ALL_PRODUCT_DB}/${name}`).then((res) => {
    if (name === "duvetcovers") dispatch(getAllProduct(res.data));
    if (name === "pillowcases") dispatch(getAllPillowcases(res.data));
    if (name === "bedsheets") dispatch(getAllBedSheets(res.data));
  });
};

export const getAllProduct = (duvetCovers) => ({
  type: GET_ALL_DUVETCOVERS,
  payload: duvetCovers,
});

export const getAllPillowcases = (pillowcases) => ({
  type: GET_ALL_PILLOWCASES,
  payload: pillowcases,
});

export const getAllBedSheets = (bedSheets) => ({
  type: GET_ALL_BEDSHEETS,
  payload: bedSheets,
});
