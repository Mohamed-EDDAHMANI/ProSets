import { IsEnum, IsNumber, IsString, IsArray } from 'class-validator';
import { OrderStatus } from '../entities/order.entity';
import { CreateOrderItemDto } from '../../order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsNumber()
  totalPrice: number;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsArray()
  items: CreateOrderItemDto[];
}
