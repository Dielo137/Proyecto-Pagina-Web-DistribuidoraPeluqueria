import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller'; // <-- ¡LÍNEA AÑADIDA! ✅
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/distribuidora-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}