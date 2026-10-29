import { useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import AddOnsStep from './components/AddOnsStep'
import FormNavigation from './components/FormNavigation'
import PersonalInfoStep from './components/PersonalInfoStep'
import PlanStep from './components/PlanStep'
import Sidebar from './components/Sidebar'
import SummaryStep from './components/SummaryStep'
import ThankYou from './components/ThankYou'
import type { FormValues } from './types'

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  billing: 'monthly',
  addOns: ['online', 'storage'],
}

function App() {
  const methods = useForm<FormValues>({
    defaultValues: initialValues,
    mode: 'onTouched',
    shouldUnregister: false,
  })
  const [step, setStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [step, isComplete])

  const goForward = async () => {
    const fields: (keyof FormValues)[] =
      step === 1 ? ['name', 'email', 'phone'] : step === 2 ? ['plan'] : []

    if (fields.length && !(await methods.trigger(fields, { shouldFocus: true }))) {
      return
    }

    setStep((currentStep) => Math.min(currentStep + 1, 4))
  }

  const goBack = () => setStep((currentStep) => Math.max(currentStep - 1, 1))
  const completeForm = () => setIsComplete(true)

  return (
    <>
      <a className="skip-link" href="#subscription-form">Skip to form</a>
      <main className="page-shell" id="main-content">
        <div className="form-card">
          <Sidebar currentStep={isComplete ? 4 : step} />

          <FormProvider {...methods}>
            <form id="subscription-form" className="form-panel" onSubmit={methods.handleSubmit(completeForm)} noValidate>
              <div className={`step-content ${isComplete ? 'step-content--complete' : ''}`}>
                {isComplete ? (
                  <ThankYou headingRef={headingRef} />
                ) : (
                  <>
                    {step === 1 && <PersonalInfoStep headingRef={headingRef} />}
                    {step === 2 && <PlanStep headingRef={headingRef} />}
                    {step === 3 && <AddOnsStep headingRef={headingRef} />}
                    {step === 4 && (
                      <SummaryStep headingRef={headingRef} onChangePlan={() => setStep(2)} />
                    )}
                  </>
                )}
              </div>

              {!isComplete && (
                <FormNavigation
                  step={step}
                  onBack={goBack}
                  onNext={goForward}
                  onConfirm={methods.handleSubmit(completeForm)}
                />
              )}
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  )
}

export default App
