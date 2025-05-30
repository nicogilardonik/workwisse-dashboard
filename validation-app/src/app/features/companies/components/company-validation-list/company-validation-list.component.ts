// src/app/features/companies/components/company-validation-list/company-validation-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Company } from '../../../../core/models/company.model'; // Adjusted path
import { CompanyActions, selectPendingApprovalCompanies, selectCompanyLoading } from '../../state'; // Barrel import

@Component({
  selector: 'app-company-validation-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  templateUrl: './company-validation-list.component.html',
  styleUrl: './company-validation-list.component.scss' // Match SCSS from generation
})
export class CompanyValidationListComponent implements OnInit {
  pendingCompanies$ = this.store.select(selectPendingApprovalCompanies);
  isLoading$ = this.store.select(selectCompanyLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Ensure data is loaded if this component can be accessed directly.
    this.store.dispatch(CompanyActions.loadCompanies());
  }

  onValidateCompany(companyId: string): void {
    if (confirm('Are you sure you want to validate this company?')) {
      this.store.dispatch(CompanyActions.validateCompany({ companyId }));
    }
  }
}
