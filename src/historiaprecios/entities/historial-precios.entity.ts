import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Elemento } from '../../Elemento/entities/elementos.entity';




@Entity('historial_precios')
export class HistorialPrecios {
  @PrimaryGeneratedColumn()
  ID_Historial: number;

  @ManyToOne(() => Elemento, elemento => elemento.historialPrecios)
  ID_Elemento: Elemento;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  Precio: number;

  @Column({ type: 'date' })
  Fecha_Cambio: Date;
}
