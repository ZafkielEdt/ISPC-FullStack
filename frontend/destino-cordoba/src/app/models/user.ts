export interface User {
  username : string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role?: string[];
  photo?: string;
  address?: any;
}
