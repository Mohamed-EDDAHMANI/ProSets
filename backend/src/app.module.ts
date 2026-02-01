import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module'
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, ProductModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
