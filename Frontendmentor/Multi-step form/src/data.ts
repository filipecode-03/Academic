import advancedIcon from './assets/images/icon-advanced.svg'
import arcadeIcon from './assets/images/icon-arcade.svg'
import proIcon from './assets/images/icon-pro.svg'
import type { AddOnOption, PlanOption } from './types'

export const plans: PlanOption[] = [
  { id: 'arcade', name: 'Arcade', icon: arcadeIcon, monthly: 9, yearly: 90 },
  { id: 'advanced', name: 'Advanced', icon: advancedIcon, monthly: 12, yearly: 120 },
  { id: 'pro', name: 'Pro', icon: proIcon, monthly: 15, yearly: 150 },
]

export const addOns: AddOnOption[] = [
  { id: 'online', name: 'Online service', description: 'Access to multiplayer games', monthly: 1, yearly: 10 },
  { id: 'storage', name: 'Larger storage', description: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
  { id: 'profile', name: 'Customizable profile', description: 'Custom theme on your profile', monthly: 2, yearly: 20 },
]

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export const formatPrice = (price: number, billing: 'monthly' | 'yearly') =>
  `${currencyFormatter.format(price)}/${billing === 'monthly' ? 'mo' : 'yr'}`
