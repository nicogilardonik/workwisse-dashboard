// src/app/features/reviews/state/review.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ReviewActions from './review.actions'; // Adjust path
import { MockReviewService } from '../../../core/services/mock-review.service'; // Adjust path

@Injectable()
export class ReviewEffects {
  loadReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReviewActions.ReviewActions.loadReviews), // Accessing actions via the alias
      exhaustMap(() =>
        this.reviewService.getReviews().pipe(
          map(reviews => ReviewActions.ReviewActions.loadReviewsSuccess({ reviews })),
          catchError(error => of(ReviewActions.ReviewActions.loadReviewsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reviewService: MockReviewService
  ) {}
}
