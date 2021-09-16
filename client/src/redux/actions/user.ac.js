import { DELETE_USER, SET_USER } from "../types/userTypes";
import * as endPoints from "../../config/endPoints";
import { disableLoader, enableLoader } from "./loader.ac";

export const getUserFromServer = id => async dispatch => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: "include",
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const signUp = (payload, history) => async dispatch => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signUp(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    history.replace("/");
  } else {
    history.replace("/signup");
  }
  dispatch(disableLoader());
};

export const signIn = (payload, history, from) => async dispatch => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signIn(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    history.replace(from);
  } else {
    history.replace("/signin");
  }
  dispatch(disableLoader());
};

export const signOut = () => async dispatch => {
  const response = await fetch(endPoints.signOut(), {
    credentials: "include",
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async dispatch => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: "include",
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

export const editUser = (user, history) => async (dispatch, getState) => {
  const {
    user: { _id: userId },
  } = getState();
  dispatch(enableLoader());
  const response = await fetch(endPoints.editUser(userId), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    history.replace(`/users/${user._id}`);
  } else {
    history.replace("/");
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});
