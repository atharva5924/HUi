import { Status } from "../../utils/columns";
export interface UserCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends UserCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "user" | "admin" | "verifier";
}

export interface ForgotPasswordData {
  email: string;
}

export interface LoginResponse {
  message: string;
  user: {
    id: number;
    email: string;
    role: 'user' | 'admin' | 'verifier';
  };
}

export interface AdminDashboardResponse {
  applications: {
    id: number;
    userId: number;
    name: string;
    amount: number;
    loanTenure: string;
    employmentStatus: string;
    reason: string;
    employmentAddress: string;
    status: string;
    verifiedBy: number | null;
    approvedBy: number | null;
    createdAt: string;
    updatedAt: string;
  }[];
  users: {
    id: number;
    email: string;
    role: "admin" | "user" | "verifier";
  }[];
}

export interface UserDashboardResponse {
  applications: {
    id: number;
    userId: number;
    name: string;
    amount: number;
    loanTenure: string;
    employmentStatus: string;
    reason: string;
    employmentAddress: string;
    status: string;
    verifiedBy: number | null;
    approvedBy: number | null;
    createdAt: string;
    updatedAt: string;
  }[];
}


export interface LoanFormDataResponse {
  fullName: string;
  loanTenure: number;
  reason?: string;
  requiredAmount: string;
  employmentStatus: string;
  address1: string;
  address2: string;
  dateApplied: Date;
  loanStatus: Status;
}

export interface VerifierDashboardResponse {
  pendingApplications: {
    id: number;
    userId: number;
    name: string;
    amount: number;
    loanTenure: string;
    employmentStatus: string;
    reason: string;
    employmentAddress: string;
    status: string;
    verifiedBy: number | null;
    approvedBy: number | null;
    createdAt: string;
    updatedAt: string;
  }[];
}
