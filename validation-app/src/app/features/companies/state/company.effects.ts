// src/app/features/companies/state/company.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CompanyActions from './company.actions'; // Using * as import
import { MockCompanyService } from '../../../core/services/mock-company.service';

@Injectable()
export class CompanyEffects {
  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.CompanyActions.loadCompanies),
      exhaustMap(() =>
        this.companyService.getCompanies().pipe(
          map(companies => CompanyActions.CompanyActions.loadCompaniesSuccess({ companies })),
          catchError(error => of(CompanyActions.CompanyActions.loadCompaniesFailure({ error })))
        )
      )
    )
  );

  validateCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.CompanyActions.validateCompany),
      exhaustMap(action =>
        this.companyService.validateCompany(action.companyId).pipe(
          map(company => CompanyActions.CompanyActions.validateCompanySuccess({ company })),
          catchError(error => of(CompanyActions.CompanyActions.validateCompanyFailure({ error })))
        )
      )
    )
  );

  loadCompanyDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.CompanyActions.loadCompanyDetails), // Correct action name
      exhaustMap(action =>
        this.companyService.getCompanyById(action.companyId).pipe(
          map(company => {
            if (company) {
              return CompanyActions.CompanyActions.loadCompanyDetailsSuccess({ company });
            } else {
              // Dispatch failure action if company is not found
              return CompanyActions.CompanyActions.loadCompanyDetailsFailure({ error: `Company with id ${action.companyId} not found` });
            }
          }),
          catchError(error => of(CompanyActions.CompanyActions.loadCompanyDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private companyService: MockCompanyService
  ) {}
}
