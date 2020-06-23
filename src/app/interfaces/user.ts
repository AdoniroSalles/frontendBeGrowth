export interface User {
     isEmpresa: boolean;
     isEntregador: boolean;
     id: string;
     username: string;
     email: string;
     __v: number;
 }

 export interface Token {
     user: User;
     token: string;
 }
