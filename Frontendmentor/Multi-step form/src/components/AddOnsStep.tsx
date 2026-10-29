import type { RefObject } from 'react'
import { useFormContext } from 'react-hook-form'
import { addOns, formatPrice } from '../data'
import type { FormValues } from '../types'
import FormHeader from './FormHeader'

interface AddOnsStepProps {
  headingRef: RefObject<HTMLHeadingElement | null>
}

function AddOnsStep({ headingRef }: AddOnsStepProps) {
  const { register, watch } = useFormContext<FormValues>()
  const billing = watch('billing')
  const selectedAddOns = watch('addOns') ?? []
  const isYearly = billing === 'yearly'

  return (
    <section aria-labelledby="add-ons-title">
      <FormHeader id="add-ons-title" title="Pick add-ons" description="Add-ons help enhance your gaming experience." headingRef={headingRef} />

      <fieldset className="add-ons-fieldset">
        <legend className="sr-only">Choose optional add-ons</legend>
        <div className="add-on-options">
          {addOns.map((addOn) => {
            const isSelected = selectedAddOns.includes(addOn.id)

            return (
              <label className={`add-on-card ${isSelected ? 'add-on-card--selected' : ''}`} key={addOn.id}>
                <input type="checkbox" value={addOn.id} {...register('addOns')} />
                <span className="add-on-copy">
                  <span className="option-name">{addOn.name}</span>
                  <span className="add-on-description">{addOn.description}</span>
                </span>
                <span className="add-on-price">+{formatPrice(isYearly ? addOn.yearly : addOn.monthly, billing)}</span>
              </label>
            )
          })}
        </div>
      </fieldset>
    </section>
  )
}

export default AddOnsStep
