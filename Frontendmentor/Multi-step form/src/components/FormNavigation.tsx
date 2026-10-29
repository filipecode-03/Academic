interface FormNavigationProps {
  step: number
  onBack: () => void
  onNext: () => void
  onConfirm: () => void
}

function FormNavigation({ step, onBack, onNext, onConfirm }: FormNavigationProps) {
  return (
    <div className="form-actions">
      {step > 1 ? (
        <button type="button" className="back-button" onClick={onBack}>Go Back</button>
      ) : <span />}

      {step === 4 ? (
        <button type="button" className="primary-button primary-button--confirm" onClick={onConfirm}>Confirm</button>
      ) : (
        <button type="button" className="primary-button" onClick={onNext}>Next Step</button>
      )}
    </div>
  )
}

export default FormNavigation
