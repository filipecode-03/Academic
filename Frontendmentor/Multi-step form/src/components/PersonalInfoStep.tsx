import type { RefObject } from 'react'
import { useFormContext } from 'react-hook-form'
import type { FormValues } from '../types'
import FormHeader from './FormHeader'

interface PersonalInfoStepProps {
  headingRef: RefObject<HTMLHeadingElement | null>
}

function PersonalInfoStep({ headingRef }: PersonalInfoStepProps) {
  const { register, formState: { errors } } = useFormContext<FormValues>()

  return (
    <section aria-labelledby="personal-info-title">
      <FormHeader id="personal-info-title" title="Personal info" description="Please provide your name, email address, and phone number." headingRef={headingRef} />

      <div className="personal-fields">
        <div className="field-group">
          <div className="field-label-row">
            <label htmlFor="name">Name</label>
            <span className="field-error" id="name-error" aria-live="polite">{errors.name?.message}</span>
          </div>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Stephen King"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name', {
              required: 'This field is required',
              validate: (value) => value.trim().length > 1 || 'Enter your full name',
            })}
          />
        </div>

        <div className="field-group">
          <div className="field-label-row">
            <label htmlFor="email">Email Address</label>
            <span className="field-error" id="email-error" aria-live="polite">{errors.email?.message}</span>
          </div>
          <input
            id="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="e.g. stephenking@lorem.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email', {
              required: 'This field is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
            })}
          />
        </div>

        <div className="field-group">
          <div className="field-label-row">
            <label htmlFor="phone">Phone Number</label>
            <span className="field-error" id="phone-error" aria-live="polite">{errors.phone?.message}</span>
          </div>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. +1 234 567 890"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone', {
              required: 'This field is required',
              validate: (value) => {
                const digits = value.replace(/\D/g, '')
                return (digits.length >= 7 && digits.length <= 15) || 'Enter a valid phone number'
              },
            })}
          />
        </div>
      </div>
    </section>
  )
}

export default PersonalInfoStep
