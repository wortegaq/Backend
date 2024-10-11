import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('direccion')
export class Direccion {
  @PrimaryGeneratedColumn()
  ID_Direccion: number;

  @Column()
  ID_Usuario: number;

  @Column({ type: 'varchar', length: 255 })
  Calle: string;

  @Column({ type: 'varchar', length: 100 })
  Ciudad: string;

  @Column({ type: 'varchar', length: 20 })
  Codigo_Postal: string;

  @Column({ type: 'varchar', length: 100 })
  Pais: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.ID_Usuario)
  @JoinColumn({ name: 'ID_Usuario' })
  usuario: Usuario;
}
