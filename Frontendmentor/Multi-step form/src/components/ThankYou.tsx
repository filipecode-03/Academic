import type { RefObject } from 'react'
import thankYouIcon from '../assets/images/icon-thank-you.svg'

interface ThankYouProps {
  headingRef: RefObject<HTMLHeadingElement | null>
}

function ThankYou({ headingRef }: ThankYouProps) {
  return (
    <section className="thank-you" aria-labelledby="thank-you-title">
      <img src={thankYouIcon} alt="" aria-hidden="true" width="80" height="80" />
      <h1 id="thank-you-title" ref={headingRef} tabIndex={-1}>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </section>
  )
}

export default ThankYou
