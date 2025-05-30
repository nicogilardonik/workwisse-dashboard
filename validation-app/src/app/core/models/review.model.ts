export interface ReviewPoint {
  pointName: string; // e.g., 'environment', 'growthPolicies'
  value: number;   // from 1 to 10
}

export interface Review {
  id: string;
  companyId: string; // To link to a Company
  rol: string;
  initDate: Date;
  endDate: Date | null;
  currentlyWorking: boolean;
  points: ReviewPoint[]; // Array of objects like { pointName: 'environment', value: 8 }
  recommendation: boolean;
  pendingApproval: boolean;
}
