// src/app/core/services/mock-review.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review, ReviewPoint } from '../models/review.model'; // Adjust path

@Injectable({
  providedIn: 'root'
})
export class MockReviewService {
  private mockReviews: Review[] = [
    {
      id: 'r1', companyId: '1', rol: 'Software Engineer',
      initDate: new Date(2022, 0, 15), endDate: null, currentlyWorking: true,
      points: [
        { pointName: 'environment', value: 8 }, { pointName: 'growthPolicies', value: 7 }
      ],
      recommendation: true, pendingApproval: false
    },
    {
      id: 'r2', companyId: '2', rol: 'Project Manager',
      initDate: new Date(2021, 5, 1), endDate: new Date(2023, 5, 1), currentlyWorking: false,
      points: [
        { pointName: 'salary', value: 6 }
      ],
      recommendation: false, pendingApproval: true
    },
    {
      id: 'r3', companyId: '1', rol: 'QA Tester',
      initDate: new Date(2023, 2, 1), endDate: null, currentlyWorking: true,
      points: [
        { pointName: 'equipment', value: 9 }, { pointName: 'inclusionPolicies', value: 8 }
      ],
      recommendation: true, pendingApproval: false
    },
  ];

  getReviews(): Observable<Review[]> {
    return of(this.mockReviews);
  }

  // getReviewById(id) and validateReview(id) will be added later
}
