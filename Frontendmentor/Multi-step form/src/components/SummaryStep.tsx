import type { RefObject } from 'react'
import { useFormContext } from 'react-hook-form'
import { addOns, formatPrice, plans } from '../data'
import type { FormValues } from '../types'
import FormHeader from './FormHeader'

interface SummaryStepProps {
  headingRef: RefObject<HTMLHeadingElement | null>
  onChangePlan: () => void
}

function SummaryStep({ headingRef, onChangePlan }: SummaryStepProps) {
  const { watch } = useFormContext<FormValues>()
  const values = watch()
  const selectedPlan = plans.find((plan) => plan.id === values.plan) ?? plans[0]
  const selectedAddOns = addOns.filter((addOn) => values.addOns?.includes(addOn.id))
  const isYearly = values.billing === 'yearly'
  const planPrice = isYearly ? selectedPlan.yearly : selectedPlan.monthly
  const addOnTotal = selectedAddOns.reduce((total, addOn) => total + (isYearly ? addOn.yearly : addOn.monthly), 0)
  const billingLabel = isYearly ? 'Yearly' : 'Monthly'
  const periodLabel = isYearly ? 'year' : 'month'

  return (
    <section aria-labelledby="summary-title">
      <FormHeader id="summary-title" title="Finishing up" description="Double-check everything looks OK before confirming." headingRef={headingRef} />

      <div className="summary-box">
        <div className="summary-plan">
          <div>
            <strong>{selectedPlan.name} ({billingLabel})</strong>
            <button type="button" className="change-plan" onClick={onChangePlan}>Change</button>
          </div>
          <strong>{formatPrice(planPrice, values.billing)}</strong>
        </div>

        {selectedAddOns.length > 0 && (
          <ul className="summary-add-ons">
            {selectedAddOns.map((addOn) => (
              <li key={addOn.id}>
                <span>{addOn.name}</span>
                <span>+{formatPrice(isYearly ? addOn.yearly : addOn.monthly, values.billing)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="summary-total">
        <span>Total (per {periodLabel})</span>
        <strong>+{formatPrice(planPrice + addOnTotal, values.billing)}</strong>
      </div>
    </section>
  )
}

export default SummaryStep
