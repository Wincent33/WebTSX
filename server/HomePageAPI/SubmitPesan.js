import Axios from "axios";

export const submitPesan = (data) => {
  Axios.post("http://localhost:3001/api/insert", data)
    .then((res) => {
      alert(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
