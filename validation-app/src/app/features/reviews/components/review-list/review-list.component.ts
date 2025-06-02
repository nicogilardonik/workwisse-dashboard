// src/app/features/reviews/components/review-list/review-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common'; // Added NgClass
import { RouterLink } from '@angular/router';
import { Review } from '../../../../core/models/review.model'; // Adjust path
import { ReviewActions, selectAllReviews, selectReviewLoading } from '../../state'; // Barrel import

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass, RouterLink], // Added NgClass
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss' // Match SCSS from generation
})
export class ReviewListComponent implements OnInit {
  reviews$ = this.store.select(selectAllReviews);
  isLoading$ = this.store.select(selectReviewLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ReviewActions.loadReviews());
  }
}
