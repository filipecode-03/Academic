import type { RefObject } from 'react'

interface FormHeaderProps {
  id: string
  title: string
  description: string
  headingRef: RefObject<HTMLHeadingElement | null>
}

function FormHeader({ id, title, description, headingRef }: FormHeaderProps) {
  return (
    <header className="step-header">
      <h1 id={id} ref={headingRef} tabIndex={-1}>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export default FormHeader
