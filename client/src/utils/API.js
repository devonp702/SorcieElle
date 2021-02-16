import axios from "axios";
export default {
// creates a new user
  postUsers: function(data) {
    return axios.post("/api/user/", data);
},
}