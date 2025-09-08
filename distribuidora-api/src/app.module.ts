
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'; 

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
     MongooseModule.forRoot(process.env.DATABASE_URL || 'mongodb://localhost/fallback-db-error'),
     ProductsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}