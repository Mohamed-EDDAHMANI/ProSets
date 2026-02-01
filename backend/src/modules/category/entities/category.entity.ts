import { Product } from '../../product/entities/product.entity';

export class Category {
    id: string;
    name: string;
    description?: string;
    products?: Product[];
}
