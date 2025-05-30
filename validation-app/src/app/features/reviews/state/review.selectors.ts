// src/app/features/reviews/state/review.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReviewState, reviewAdapter } from './review.state'; // Adjust path

export const selectReviewState = createFeatureSelector<ReviewState>('reviews');

const { selectAll, selectEntities } = reviewAdapter.getSelectors();

export const selectAllReviews = createSelector(
  selectReviewState,
  selectAll
);

export const selectReviewEntities = createSelector(
  selectReviewState,
  selectEntities
);

export const selectReviewLoading = createSelector(
  selectReviewState,
  (state: ReviewState) => state.loading
);

export const selectReviewError = createSelector(
  selectReviewState,
  (state: ReviewState) => state.error
);
