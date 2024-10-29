import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { EstadoOrden } from '../../estadoorden/entities/estado-orden.entity';

@Entity('orden')
export class Orden {
  @PrimaryGeneratedColumn()
  ID_Orden: number;

  @ManyToOne(() => Usuario, usuario => usuario.ordenes)
  ID_Usuario: Usuario;

  @Column({ type: 'datetime' })
  Fecha_Orden: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  Total: number;

  @ManyToOne(() => EstadoOrden, estadoOrden => estadoOrden.ordenes)
  ID_Estado_Orden: EstadoOrden;

  @Column({ type: 'tinyint', default: 0 })
  Eliminado: number;
}

