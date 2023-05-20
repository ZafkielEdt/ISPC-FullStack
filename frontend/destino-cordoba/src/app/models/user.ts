export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role?: string[];
  photo?: string;
  address?: any;
}
// {
//     "id": 1,
//     "firstName": "",
//     "lastName": "",
//     "password": "",
//     "email": "",
//     "phone": "",
//     "role": [
//       ""
//     ],
//     "photo": "",
//     "address": {
//       "id": 1,
//       "street": "",
//       "number": "",
//       "city": {
//         "id": 1,
//         "name": "",
//         "country": {
//           "id": 1,
//           "name": ""
//         }
//       }
//     }
//   },
