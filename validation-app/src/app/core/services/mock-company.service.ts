// src/app/core/services/mock-company.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'; // Added throwError
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class MockCompanyService {
  private mockCompanies: Company[] = [
    { id: '1', name: 'Tech Solutions Inc.', category: 'IT', country: 'USA', state: 'California', website: 'tech.com', benefits: 'Great benefits', pendingApproval: false },
    { id: '2', name: 'Green Energy Co.', category: 'Energy', country: 'Canada', state: 'Ontario', website: 'green.com', benefits: 'Eco friendly', pendingApproval: true },
    { id: '3', name: 'Builders Collective', category: 'Construction', country: 'USA', state: 'Texas', website: 'builders.com', benefits: 'Health insurance', pendingApproval: false },
  ];

  getCompanies(): Observable<Company[]> {
    // Simulate API delay
    return of(this.mockCompanies);
  }

  getCompanyById(id: string): Observable<Company | undefined> {
    const company = this.mockCompanies.find(c => c.id === id);
    // Simulate API delay
    return of(company);
  }

  validateCompany(companyId: string): Observable<Company> {
    const companyIndex = this.mockCompanies.findIndex(c => c.id === companyId);
    if (companyIndex > -1) {
      // Create a new object for immutability for the array element
      const originalCompany = this.mockCompanies[companyIndex];
      const updatedCompany = { ...originalCompany, pendingApproval: false };
      
      // Update the array (in a real scenario, this would be a backend call)
      this.mockCompanies = [
        ...this.mockCompanies.slice(0, companyIndex),
        updatedCompany,
        ...this.mockCompanies.slice(companyIndex + 1)
      ];
      // Simulate API delay and return a copy
      return of({ ...updatedCompany });
    }
    // Simulate API delay and error
    return throwError(() => new Error('Company not found for validation'));
  }
}
