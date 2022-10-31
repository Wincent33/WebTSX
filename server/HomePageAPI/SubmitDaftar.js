import Axios from "axios";

export const submitDaftar = (data) => {
  Axios.post("http://localhost:5000/api/login", data)
    .then((res) => {
      alert(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
