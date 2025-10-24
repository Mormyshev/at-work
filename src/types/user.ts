export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
  avatar?: string;
  status: 'active' | 'archive' | 'hidden';
}

export interface UserFormData {
  name: string;
  nickname: string;
  email: string;
  city: string;
  phone: string;
  company: string;
}
