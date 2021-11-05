import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPostVote = (body, id) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      // setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.message);
      // setIsLoading(false);
    });
};

export const changePostVote = (body, id) => {
  // setIsLoading(true);
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      // setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.message);
      // setIsLoading(false);
    });
};

export const createCommentVote = (body, id) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      // setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.message);
      console.log(err);
      // setIsLoading(false);
    });
};

export const changeCommentVote = (body, id) => {
  // setIsLoading(true);
  axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      // setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.message);
      console.log(err);
      // setIsLoading(false);
    });
};
