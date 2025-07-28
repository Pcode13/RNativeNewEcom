import axios from "axios";

 const BaseURL = 'http://192.168.22.72:5555';
 

 const Client = axios.create({
   baseURL: BaseURL,
//    headers: {
//      'Content-Type': 'application/json',
//    },
 });    

 export default Client;