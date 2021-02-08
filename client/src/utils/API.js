import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
// creates a new user
  postUsers: function() {
    return axios.post("/api/users");
  },
}