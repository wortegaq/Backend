import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column('text', {
    nullable: true,
  })
  rol_usuario: string;

  @Column({ type: 'timestamp' })
  Fecha_Registro: Date;  // Cambio de datetime a timestamp

  @Column({ type: 'enum', enum: ['Activo', 'Inactivo'], default: 'Activo' })
  Estado: 'Activo' | 'Inactivo';

  @Column({ type: 'boolean', default: false }) // Cambio de tinyint a boolean
  Eliminado: boolean;
}
