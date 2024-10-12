import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateFeedbackPromocionDto {
  @IsInt()
  @IsNotEmpty()
  ID_Feedback: number;

  @IsInt()
  @IsNotEmpty()
  ID_Promocion: number;
}
