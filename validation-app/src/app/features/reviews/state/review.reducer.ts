import { createReducer, on } from '@ngrx/store';
import { ReviewActions } from './review.actions';
import { initialReviewState, reviewAdapter, ReviewState } from './review.state';
import { Update } from '@ngrx/entity';
import { Review } from '../../../core/models/review.model';

export const reviewReducer = createReducer(
  initialReviewState,

  // Load Reviews
  on(ReviewActions.loadReviews, (state): ReviewState => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ReviewActions.loadReviewsSuccess, (state, { reviews }): ReviewState =>
    reviewAdapter.setAll(reviews, {
      ...state,
      loading: false,
    })
  ),
  on(ReviewActions.loadReviewsFailure, (state, { error }): ReviewState => ({
    ...state,
    loading: false,
    error,
  })),

  // Load Single Review Details
  on(ReviewActions.loadReviewDetails, (state, { reviewId }): ReviewState => ({
    ...state,
    loading: true,
    selectedReviewId: reviewId,
    error: null,
  })),
  on(ReviewActions.loadReviewDetailsSuccess, (state, { review }): ReviewState =>
    reviewAdapter.upsertOne(review, {
      ...state,
      loading: false,
    })
  ),
  on(ReviewActions.loadReviewDetailsFailure, (state, { error }): ReviewState => ({
    ...state,
    loading: false,
    error,
  })),

  // Validate Review
  on(ReviewActions.validateReview, (state): ReviewState => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ReviewActions.validateReviewSuccess, (state, { review }): ReviewState => {
    const update: Update<Review> = {
      id: review.id,
      changes: review,
    };
    return reviewAdapter.updateOne(update, {
      ...state,
      loading: false,
    });
  }),
  on(ReviewActions.validateReviewFailure, (state, { error }): ReviewState => ({
    ...state,
    loading: false,
    error,
  }))
);
