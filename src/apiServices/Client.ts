import axios from "axios";

 const BaseURL = 'http://192.168.22.88:5555';

 const Client = axios.create({
   baseURL: BaseURL,
//    headers: {
//      'Content-Type': 'application/json',
//    },
 });    

 export default Client;