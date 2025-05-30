// src/app/features/companies/components/company-detail/company-detail.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AsyncPipe, NgIf, NgFor, KeyValuePipe, DatePipe } from '@angular/common'; // Added KeyValuePipe, DatePipe
import { Company } from '../../../../core/models/company.model'; // Adjusted path
import { CompanyActions, selectCurrentCompany, selectCompanyLoading } from '../../state'; // Barrel import

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, RouterLink, KeyValuePipe, DatePipe], // Added KeyValuePipe, DatePipe
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss' // Match SCSS from generation
})
export class CompanyDetailComponent implements OnInit, OnDestroy {
  company$ = this.store.select(selectCurrentCompany);
  isLoading$ = this.store.select(selectCompanyLoading);

  private routeSub: Subscription | undefined;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const companyId = params.get('id');
      if (companyId) {
        this.store.dispatch(CompanyActions.loadCompanyDetails({ companyId }));
      }
    });
  }

  onValidateCompany(companyId: string | undefined): void {
    // companyId comes from company object which might be null/undefined initially
    if (companyId && confirm('Are you sure you want to validate this company?')) {
      this.store.dispatch(CompanyActions.validateCompany({ companyId }));
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
