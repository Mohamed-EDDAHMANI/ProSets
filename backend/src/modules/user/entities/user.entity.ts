export enum Role {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  SELLER = 'SELLER',
}

export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: Role;
  createdAt: Date;
  refreshToken?: string;
  orders?: Order[];
}

// Import Order after defining or in separate file
import { Order } from '../../order/entities/order.entity';
