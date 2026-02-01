import { User } from '../../user/entities/user.entity';
import { OrderItem } from '../../order-item/entities/order-item.entity';

export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

export class Order {
  id: string;
  userId: string;
  user?: User;
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
  items?: OrderItem[];
}
