export interface ICreateRecoveryRequest {
  email: string;
}

export interface IUpdateRecoveryRequest {
  password: string;
}

export interface IUpdatePasswordRequest {
  oldPassword: string;
  password: string;
}
