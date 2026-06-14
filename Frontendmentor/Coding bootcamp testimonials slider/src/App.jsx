import TestimonialsCarousel from './components/TestimonialsCarousel'
import curve from './assets/images/pattern-curve.svg'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <TestimonialsCarousel />
      <img
        src={curve}
        alt=""
        className="absolute bottom-0 left-0"
      />
    </main>
  )
}

export default App