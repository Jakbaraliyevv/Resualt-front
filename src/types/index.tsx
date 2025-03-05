export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export interface LoginType {
  email?: string;
  password?: string;
}

export interface VerifyType {
  email?: string;
  code?: string;
}

export interface RegisterTYpe {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}
