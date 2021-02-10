import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user/user");
  },
// creates a new user
  postUsers: function(data) {
    return axios.post("/api/user/user", data);
},
}