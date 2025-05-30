import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Review } from '../../../core/models/review.model';

export interface ReviewState extends EntityState<Review> {
  loading: boolean;
  selectedReviewId: string | null;
  error: any;
}

export const reviewAdapter = createEntityAdapter<Review>();

export const initialReviewState: ReviewState = reviewAdapter.getInitialState({
  loading: false,
  selectedReviewId: null,
  error: null,
});
