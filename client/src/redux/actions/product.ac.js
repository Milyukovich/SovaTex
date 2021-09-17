import {
  GET_ALL_BEDSHEETS_DB,
  GET_ALL_DUVETCOVERS_DB,
  GET_ALL_PILLOWCASES_DB,
  GET_PRODUCT_BY_ARTICLE_DB,
} from "../../urls/ProductUrls";
import {
  GET_ALL_BEDSHEETS,
  GET_ALL_DUVETCOVERS,
  GET_ALL_PILLOWCASES,
} from "../types/productTypes";
import axios from "axios";

export const getAllPillowcasesStart = () => async (dispatch) => {
  axios
    .get(GET_ALL_PILLOWCASES_DB)
    .then((res) => dispatch(getAllPillowcases(res.data)));
};

export const getAllPillowcases = (pillowcases) => ({
  type: GET_ALL_PILLOWCASES,
  payload: pillowcases,
});

export const getAllBedSheetsStart = () => async (dispatch) => {
  axios
    .get(GET_ALL_BEDSHEETS_DB)
    .then((res) => dispatch(getAllBedSheets(res.data)));
};

export const getAllBedSheets = (bedSheets) => ({
  type: GET_ALL_BEDSHEETS,
  payload: bedSheets,
});

export const getAllDuvetCoversStart = () => async (dispatch) => {
  axios
    .get(GET_ALL_DUVETCOVERS_DB)
    .then((res) => dispatch(getAllDuvetCovers(res.data)));
};

export const getAllDuvetCovers = (duvetCovers) => ({
  type: GET_ALL_DUVETCOVERS,
  payload: duvetCovers,
});

export const getProductByArticleStart =
  ({ article, setProduct }) =>
  async (dispatch) => {
    axios
      .get(`${GET_PRODUCT_BY_ARTICLE_DB}/${article}`)
      .then((res) => setProduct(res.data));
  };
