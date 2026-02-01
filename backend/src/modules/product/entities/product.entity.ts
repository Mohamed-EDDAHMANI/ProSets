import { Category } from '../../category/entities/category.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';
import { OrderItem } from '../../order-item/entities/order-item.entity';

export class Product {
  id: string;
  sku: string;
  name: string;
  description?: string;
  price: number;
  isActive: boolean;
  imageUrl?: string;
  categoryId: string;
  category?: Category;
  inventory?: Inventory;
  orderItems?: OrderItem[];
  createdAt: Date;
}
