import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Company } from '../../../core/models/company.model';

export const CompanyActions = createActionGroup({
  source: 'Company API',
  events: {
    // Load Companies
    'Load Companies': emptyProps(),
    'Load Companies Success': props<{ companies: Company[] }>(),
    'Load Companies Failure': props<{ error: any }>(),

    // Load Single Company Details
    'Load Company Details': props<{ companyId: string }>(),
    'Load Company Details Success': props<{ company: Company }>(),
    'Load Company Details Failure': props<{ error: any }>(),

    // Validate Company
    'Validate Company': props<{ companyId:string }>(),
    'Validate Company Success': props<{ company: Company }>(), // Returns the updated company
    'Validate Company Failure': props<{ error: any }>(),
  },
});
