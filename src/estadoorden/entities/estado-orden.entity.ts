import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orden } from '../../orden/entities/orden.entity';

@Entity('estado_orden')
export class EstadoOrden {
  @PrimaryGeneratedColumn()
  ID_Estado_Orden: number;

  @Column({ type: 'varchar', length: 50 })
  Estado: string;


  @OneToMany(() => Orden, orden => orden.ID_Estado_Orden)
  ordenes: Orden[];

  
}

