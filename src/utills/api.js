import axios from "axios";
import base_url from "./url";

export const api = axios.create({
  baseURL: base_url,
  withCredentials: true,
});

// export const api = axios.create({
//   baseURL: base_url,
//   withCredentials: true,
//   headers: {
//     Authorization: `Bearer &{abc123}`,
//     me: "Hanzala Bawany",
//   },
// });


// jab without instance kaam karen to

//   axios.post(
//   `${base_url}/api/auth/login`,
//   { email, password },                      // req.body
//   {
//     headers: {                              // req.header
//       Authorization: "Bearer abc123",
//       me: "Hanzala Bawany",
//     },
//     withCredentials: true,             // for access token in backend from cookie req.cookies.toekn
//   }
// );