import { Routes } from '@angular/router';
import { CompanyListComponent } from './features/companies/components/company-list/company-list.component';
import { CompanyValidationListComponent } from './features/companies/components/company-validation-list/company-validation-list.component';
import { CompanyDetailComponent } from './features/companies/components/company-detail/company-detail.component';
import { ReviewListComponent } from './features/reviews/components/review-list/review-list.component';
import { ReviewValidationListComponent } from './features/reviews/components/review-validation-list/review-validation-list.component';
import { ReviewDetailComponent } from './features/reviews/components/review-detail/review-detail.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent, title: 'Empresas' },
  { path: 'companies/validate', component: CompanyValidationListComponent, title: 'Validar Empresas' },
  { path: 'companies/:id', component: CompanyDetailComponent, title: 'Detalles de Empresa' },
  { path: 'reviews', component: ReviewListComponent, title: 'Reseñas' },
  { path: 'reviews/validate', component: ReviewValidationListComponent, title: 'Validar Reseñas' },
  { path: 'reviews/:id', component: ReviewDetailComponent, title: 'Detalles de Reseña' },
  { path: '', redirectTo: '/companies', pathMatch: 'full' } // Ruta por defecto
];
