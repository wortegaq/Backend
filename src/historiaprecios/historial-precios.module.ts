import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialPrecios } from './entities/historial-precios.entity';
import { HistorialPreciosService } from './historial-precios.service';
import { HistorialPreciosController } from './historial-precios.controller';
import { Elemento } from '../elemento/entities/elementos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialPrecios, Elemento])],
  providers: [HistorialPreciosService],
  controllers: [HistorialPreciosController],
  exports: [HistorialPreciosService],
})
export class HistorialPreciosModule {}
