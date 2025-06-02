// src/app/features/companies/components/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Company } from '../../../../core/models/company.model'; // Corrected path
import { CompanyActions } from '../../state'; // Barrel import
import { selectAllCompanies, selectCompanyLoading } from '../../state'; // Barrel import

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss' // Changed from css to scss to match generation
})
export class CompanyListComponent implements OnInit {
  companies$ = this.store.select(selectAllCompanies);
  isLoading$ = this.store.select(selectCompanyLoading);

  constructor(private store: Store) {} // Removed AppState type for now, Store is generic

  ngOnInit(): void {
    this.store.dispatch(CompanyActions.loadCompanies());
  }
}
