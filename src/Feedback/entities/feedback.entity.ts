import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Elemento } from '../../Elemento/entities/elementos.entity';


@Entity('feedback')
export class Feedback {
  @PrimaryGeneratedColumn()
  ID_Feedback: number;

  @Column()
  ID_Usuario: number;

  @Column()
  ID_Elemento: number;

  @Column({ type: 'int' })
  Calificacion: number;

  @Column({ type: 'text' })
  Comentario: string;

  @Column({ type: 'timestamp' })
  Fecha: Date;

  @Column({ type: 'boolean', default: false })
  Eliminado: boolean;

  @ManyToOne(() => Usuario, (usuario) => usuario.ID_Usuario)
  @JoinColumn({ name: 'ID_Usuario' })
  usuario: Usuario;

  @ManyToOne(() => Elemento, (elemento) => elemento.ID_Elemento)
  
  elemento: Elemento;
  

}
