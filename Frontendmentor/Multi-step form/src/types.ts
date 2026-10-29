export type BillingCycle = 'monthly' | 'yearly'
export type PlanId = 'arcade' | 'advanced' | 'pro'
export type AddOnId = 'online' | 'storage' | 'profile'

export interface FormValues {
  name: string
  email: string
  phone: string
  plan: PlanId
  billing: BillingCycle
  addOns: AddOnId[]
}

export interface PlanOption {
  id: PlanId
  name: string
  icon: string
  monthly: number
  yearly: number
}

export interface AddOnOption {
  id: AddOnId
  name: string
  description: string
  monthly: number
  yearly: number
}
