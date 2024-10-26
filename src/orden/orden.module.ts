import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { Orden } from './entities/orden.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { EstadoOrden } from '../estadoorden/entities/estado-orden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orden, Usuario, EstadoOrden])],
  controllers: [OrdenController],
  providers: [OrdenService],
  exports: [OrdenService],
})
export class OrdenModule {}
