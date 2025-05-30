export interface Company {
  id: string;
  name: string;
  category: string;
  country: string;
  state: string;
  website: string;
  benefits: string; // Assuming this is a text description of benefits
  pendingApproval: boolean;
}
