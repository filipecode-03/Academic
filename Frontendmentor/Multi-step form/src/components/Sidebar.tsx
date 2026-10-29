const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary']

interface SidebarProps {
  currentStep: number
}

function Sidebar({ currentStep }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Form progress">
      <ol className="progress-list">
        {steps.map((label, index) => {
          const stepNumber = index + 1
          const isCurrent = stepNumber === currentStep

          return (
            <li className="progress-item" key={label} aria-current={isCurrent ? 'step' : undefined}>
              <span className={`progress-number ${isCurrent ? 'progress-number--current' : ''}`}>{stepNumber}</span>
              <span className="progress-copy">
                <span className="progress-kicker">Step {stepNumber}</span>
                <span className="progress-label">{label}</span>
              </span>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

export default Sidebar
