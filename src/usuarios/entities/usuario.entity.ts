import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orden } from '../../orden/entities/orden.entity';


@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  ID_Usuario: number;

  @Column({ type: 'varchar', length: 100 })
  Nombre: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  Correo_Electronico: string;

  @Column({ type: 'varchar', length: 255 })
  Contraseña: string;

  @Column({ type: 'timestamp' })
  Fecha_Registro: Date;  // Cambio de datetime a timestamp

  @Column({ type: 'enum', enum: ['Activo', 'Inactivo'], default: 'Activo' })
  Estado: 'Activo' | 'Inactivo';

  @Column({ type: 'boolean', default: false }) // Cambio de tinyint a boolean
  Eliminado: boolean;

  @OneToMany(() => Orden, orden => orden.ID_Usuario)
  ordenes: Orden[];
}
