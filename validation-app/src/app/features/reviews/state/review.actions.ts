import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Review } from '../../../core/models/review.model';

export const ReviewActions = createActionGroup({
  source: 'Review API',
  events: {
    // Load Reviews
    'Load Reviews': emptyProps(),
    'Load Reviews Success': props<{ reviews: Review[] }>(),
    'Load Reviews Failure': props<{ error: any }>(),

    // Load Single Review Details
    'Load Review Details': props<{ reviewId: string }>(),
    'Load Review Details Success': props<{ review: Review }>(),
    'Load Review Details Failure': props<{ error: any }>(),

    // Validate Review
    'Validate Review': props<{ reviewId: string }>(),
    'Validate Review Success': props<{ review: Review }>(), // Returns the updated review
    'Validate Review Failure': props<{ error: any }>(),
  },
});
