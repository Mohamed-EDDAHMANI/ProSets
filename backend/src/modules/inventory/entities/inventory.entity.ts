import { Product } from '../../product/entities/product.entity';

export class Inventory {
  id: string;
  productId: string;
  product?: Product;
  sku: string;
  stockLevel: number;
  stockReserved: number;
  lastRestock?: Date;
}
