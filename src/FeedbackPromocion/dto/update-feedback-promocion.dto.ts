import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedbackPromocionDto } from './create-feedback-promocion.dto';

export class UpdateFeedbackPromocionDto extends PartialType(CreateFeedbackPromocionDto) {}
