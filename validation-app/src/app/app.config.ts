import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { companyReducer } from './features/companies/state/company.reducer';
import { CompanyEffects } from './features/companies/state/company.effects';
import { reviewReducer } from './features/reviews/state/review.reducer'; // Import review reducer
import { ReviewEffects } from './features/reviews/state/review.effects';   // Import review effects

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(), // Root store
    provideState({ name: 'companies', reducer: companyReducer }), // Provide company feature state
    provideState({ name: 'reviews', reducer: reviewReducer }),     // Provide review feature state
    provideEffects([CompanyEffects, ReviewEffects])                // Add ReviewEffects
  ]
};
