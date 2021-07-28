import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPost = (body, clear) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      // alert(res.data.message);
      console.log(res);
      clear();
      // setIsLoading(false);
    })
    .catch((err) => {
      // alert(err.response.message);
      // setIsLoading(false);
      console.log(err);
    });
};

export const createComment = (body, id, clear) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      // alert(res.data.message);
      console.log(res);
      clear();
      // setIsLoading(false);
    })
    .catch((err) => {
      // alert(err.response.message);
      // setIsLoading(false);
      console.log(err);
    });
};
