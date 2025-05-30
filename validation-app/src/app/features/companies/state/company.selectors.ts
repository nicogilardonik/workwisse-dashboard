// src/app/features/companies/state/company.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanyState, companyAdapter } from './company.state';
import { Company } from '../../../core/models/company.model';

export const selectCompanyState = createFeatureSelector<CompanyState>('companies');

// Destructure selectors from the adapter
const { selectAll, selectEntities, selectIds, selectTotal } = companyAdapter.getSelectors();

// Export basic selectors
export const selectAllCompanies = createSelector(selectCompanyState, selectAll);
export const selectCompanyEntities = createSelector(selectCompanyState, selectEntities);
export const selectCompanyIds = createSelector(selectCompanyState, selectIds);
export const selectCompanyTotal = createSelector(selectCompanyState, selectTotal);

// Export specific state property selectors
export const selectCompanyLoading = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.loading
);

export const selectCompanyError = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.error
);

export const selectSelectedCompanyId = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.selectedCompanyId
);

// Export derived selectors
export const selectPendingApprovalCompanies = createSelector(
  selectAllCompanies,
  (companies: Company[]) => companies.filter(company => company.pendingApproval === true)
);

export const selectCurrentCompany = createSelector(
  selectCompanyEntities,
  selectSelectedCompanyId,
  (entities, selectedId) => selectedId && entities[selectedId] ? entities[selectedId] : null
);
