import Axios from "axios";

export const submitDaftar = (value) => () => {
  console.log(value);
  Axios.post("http://localhost:8000/user/create", {
    email: value.email,
    password: value.password,
    user_name: value.user_name,
  }).then(() => {
    console.log("inserted to database");
  });
};
