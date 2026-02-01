import { Order } from '../../order/entities/order.entity';
import { Product } from '../../product/entities/product.entity';

export class OrderItem {
  id: string;
  orderId: string;
  order?: Order;
  productId: string;
  product?: Product;
  quantity: number;
  priceAtPurchase: number;
}
