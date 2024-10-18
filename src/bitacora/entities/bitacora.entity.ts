import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('bitacora')
export class Bitacora {
  @PrimaryGeneratedColumn()
  ID_Bitacora: number;

  @Column()
  ID_Usuario: number;

  @Column({ type: 'timestamp' })
  Fecha: Date;

  @Column({ type: 'enum', enum: ['Insertar', 'Actualizar', 'Eliminar'] })
  Accion: string;

  @Column({ type: 'text' })
  Descripcion: string;

  @Column({ type: 'boolean', default: false })
  Eliminado: boolean;

  @ManyToOne(() => Usuario, (usuario) => usuario.ID_Usuario)
  @JoinColumn({ name: 'ID_Usuario' })
  usuario: Usuario;
}

