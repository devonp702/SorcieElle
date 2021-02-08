import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
// creates a new user
  postUsers: function(data) {
    return axios.post("/api/users", data);
},
}