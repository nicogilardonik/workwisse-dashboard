import { Routes } from '@angular/router';
import { CompanyListComponent } from './features/companies/components/company-list/company-list.component';
import { CompanyValidationListComponent } from './features/companies/components/company-validation-list/company-validation-list.component';
import { CompanyDetailComponent } from './features/companies/components/company-detail/company-detail.component';
import { ReviewListComponent } from './features/reviews/components/review-list/review-list.component';
import { ReviewValidationListComponent } from './features/reviews/components/review-validation-list/review-validation-list.component';
import { ReviewDetailComponent } from './features/reviews/components/review-detail/review-detail.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent, title: 'Companies' },
  { path: 'companies/validate', component: CompanyValidationListComponent, title: 'Validate Companies' },
  { path: 'companies/:id', component: CompanyDetailComponent, title: 'Company Details' },
  { path: 'reviews', component: ReviewListComponent, title: 'Reviews' },
  { path: 'reviews/validate', component: ReviewValidationListComponent, title: 'Validate Reviews' },
  { path: 'reviews/:id', component: ReviewDetailComponent, title: 'Review Details' },
  { path: '', redirectTo: '/companies', pathMatch: 'full' } // Default route
];
