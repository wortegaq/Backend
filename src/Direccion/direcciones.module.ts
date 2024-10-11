import { Module } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { DireccionesController } from './direcciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion]), UsuariosModule],
  controllers: [DireccionesController],
  providers: [DireccionesService],
})
export class DireccionesModule {}
