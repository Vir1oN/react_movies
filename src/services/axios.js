import axios from "axios";
import {AXIOS_CONFIG} from "../config";

export const AXIOS = axios.create(AXIOS_CONFIG);