import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductSupplierModule } from './product-supplier/product-supplier.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    SupplierModule,
    ProductSupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
