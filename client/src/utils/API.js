import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/user");
  },
// creates a new user
  postUsers: function(data) {
    return axios.post("http://localhost:3001/user", data);
},
}