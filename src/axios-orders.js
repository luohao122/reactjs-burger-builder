import axios from "axios";

export default axios.create({
  baseURL: "https://react-burger-builder-b805f.firebaseio.com/",
});
