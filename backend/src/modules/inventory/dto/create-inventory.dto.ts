import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  productId: string;

  @IsString()
  sku: string;

  @IsNumber()
  stockLevel: number;

  @IsNumber()
  stockReserved: number;

  @IsOptional()
  lastRestock?: Date;
}
