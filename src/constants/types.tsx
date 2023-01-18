export interface Iprofile {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  avatar: string,
  gender: string,
  bvn: number,
  address: string,
  currency: string
}
export interface Iguarantor {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  gender: string,
  address: string,
}
export interface Isocials {
  facebook: string,
  instagram: string,
  twitter: string,
}
export interface Ieducation {
  level: string,
  employmentStatus: string,
  sector: string,
  duration: string,
  officeEmail: string,
  monthlyIncome: number[],
  loanRepayment: number
}

export interface Iuser {
  createdAt: string,
  orgName: string,
  userName: string,
  email: string,
  lastActiveDate: string,
  profile: Iprofile,
  guarantor: Iguarantor,
  accountBalance: number,
  accountNumber: string,
  socials: Isocials,
  education: Ieducation,
  id: number
}

