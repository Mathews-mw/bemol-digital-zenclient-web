interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  phone?: string;
  role: 'ADMIN' | 'CLIENT';
  created_at: string;
  updated_at: string;
}

interface Address {
  id: string;
  rua: string;
  numero: string;
  bairro: string;
  complemento?: string;
  CEP: string;
  cidade: string;
  estado: string;
}

interface USerProfile extends User {
  address: Address
}

interface UsersAddress {
  id:string;
  user_id: string;
  address_id: string;
}