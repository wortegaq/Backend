import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Feedback } from '../../Feedback/entities/feedback.entity';
import { Promocion } from '../../Promocion/entities/promocion.entity';

@Entity('feedback_promocion')
export class FeedbackPromocion {
  @PrimaryGeneratedColumn()
  ID_Feedback_Promocion: number;

  @ManyToOne(() => Feedback, { eager: true })  // Relación con Feedback
  @JoinColumn({ name: 'ID_Feedback' })  // Mapea la columna correcta en la tabla
  feedback: Feedback;

  @ManyToOne(() => Promocion, { eager: true })  // Relación con Promocion
  @JoinColumn({ name: 'ID_Promocion' })  // Mapea la columna correcta en la tabla
  promocion: Promocion;
}
