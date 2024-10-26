import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estado_orden')
export class EstadoOrden {
  @PrimaryGeneratedColumn()
  ID_Estado_Orden: number;

  @Column({ type: 'varchar', length: 50 })
  Estado: string;
}

