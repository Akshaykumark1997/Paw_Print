import axios from "axios";
import { baseUrl } from "../Constance/Constance";
const instance = axios.create({
  baseURL: baseUrl,
});
export default instance;
