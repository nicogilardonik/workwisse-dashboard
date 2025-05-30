import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Company } from '../../../core/models/company.model';

export interface CompanyState extends EntityState<Company> {
  loading: boolean;
  selectedCompanyId: string | null;
  error: any;
}

export const companyAdapter = createEntityAdapter<Company>();

export const initialCompanyState: CompanyState = companyAdapter.getInitialState({
  loading: false,
  selectedCompanyId: null,
  error: null,
});
