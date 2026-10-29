import type { RefObject } from 'react'
import { useFormContext } from 'react-hook-form'
import { formatPrice, plans } from '../data'
import type { FormValues } from '../types'
import FormHeader from './FormHeader'

interface PlanStepProps {
  headingRef: RefObject<HTMLHeadingElement | null>
}

function PlanStep({ headingRef }: PlanStepProps) {
  const { register, setValue, watch, formState: { errors } } = useFormContext<FormValues>()
  const billing = watch('billing')
  const selectedPlan = watch('plan')
  const isYearly = billing === 'yearly'

  const toggleBilling = () => {
    setValue('billing', isYearly ? 'monthly' : 'yearly', { shouldDirty: true, shouldTouch: true })
  }

  return (
    <section aria-labelledby="plan-title">
      <FormHeader id="plan-title" title="Select your plan" description="You have the option of monthly or yearly billing." headingRef={headingRef} />

      <fieldset className="plan-fieldset" aria-describedby={errors.plan ? 'plan-error' : undefined}>
        <legend className="sr-only">Choose a subscription plan</legend>
        <div className="plan-options">
          {plans.map((plan) => (
            <label className={`plan-card ${selectedPlan === plan.id ? 'plan-card--selected' : ''}`} key={plan.id}>
              <input className="sr-only" type="radio" value={plan.id} {...register('plan', { required: 'Please select a plan' })} />
              <img src={plan.icon} alt="" aria-hidden="true" width="40" height="40" />
              <span className="plan-copy">
                <span className="option-name">{plan.name}</span>
                <span className="option-price">{formatPrice(isYearly ? plan.yearly : plan.monthly, billing)}</span>
                {isYearly && <span className="plan-promo">2 months free</span>}
              </span>
            </label>
          ))}
        </div>
        <p className="field-error plan-error" id="plan-error" aria-live="polite">{errors.plan?.message}</p>
      </fieldset>

      <div className="billing-toggle">
        <span className={!isYearly ? 'billing-label--active' : ''}>Monthly</span>
        <button type="button" className="switch" role="switch" aria-checked={isYearly} aria-label="Use yearly billing" onClick={toggleBilling}>
          <span className="switch-thumb" />
        </button>
        <span className={isYearly ? 'billing-label--active' : ''}>Yearly</span>
      </div>
    </section>
  )
}

export default PlanStep
