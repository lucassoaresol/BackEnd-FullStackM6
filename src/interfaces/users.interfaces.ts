export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAddressRequest {
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  role: "BUYER" | "SELLER" | "ADMIN";
  address: IAddressRequest;
}

export interface IAddressUpdateRequest {
  zip_code?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  role?: "BUYER" | "SELLER" | "ADMIN";
  address?: IAddressUpdateRequest;
}
