import { createReducer, on } from '@ngrx/store';
import { CompanyActions } from './company.actions';
import { initialCompanyState, companyAdapter, CompanyState } from './company.state';
import { Update } from '@ngrx/entity';
import { Company } from '../../../core/models/company.model';

export const companyReducer = createReducer(
  initialCompanyState,

  // Load Companies
  on(CompanyActions.loadCompanies, (state): CompanyState => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CompanyActions.loadCompaniesSuccess, (state, { companies }): CompanyState =>
    companyAdapter.setAll(companies, {
      ...state,
      loading: false,
    })
  ),
  on(CompanyActions.loadCompaniesFailure, (state, { error }): CompanyState => ({
    ...state,
    loading: false,
    error,
  })),

  // Load Single Company Details
  on(CompanyActions.loadCompanyDetails, (state, { companyId }): CompanyState => ({
    ...state,
    loading: true,
    selectedCompanyId: companyId,
    error: null,
  })),
  on(CompanyActions.loadCompanyDetailsSuccess, (state, { company }): CompanyState =>
    companyAdapter.upsertOne(company, {
      ...state,
      loading: false,
    })
  ),
  on(CompanyActions.loadCompanyDetailsFailure, (state, { error }): CompanyState => ({
    ...state,
    loading: false,
    error,
  })),

  // Validate Company
  on(CompanyActions.validateCompany, (state): CompanyState => ({
    ...state,
    loading: true, // Or a specific flag like validatingCompanyId: action.companyId
    error: null,
  })),
  on(CompanyActions.validateCompanySuccess, (state, { company }): CompanyState => {
    const update: Update<Company> = {
      id: company.id,
      changes: company, // Send the whole company object for update
    };
    return companyAdapter.updateOne(update, {
      ...state,
      loading: false,
    });
  }),
  on(CompanyActions.validateCompanyFailure, (state, { error }): CompanyState => ({
    ...state,
    loading: false,
    error,
  }))
);
