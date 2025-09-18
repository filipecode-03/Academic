// import pictureBg from './assets/images/background-pattern-desktop.svg'
import pictureBgMobile from './assets/images/background-pattern-mobile.svg'
import Dad from './assets/components/Dad.jsx'

function App() {
  return (
      <div>
        <img src={pictureBgMobile} alt="picture backgroud" className='absolute inset-0 w-full object-cover'/>
        <Dad />
      </div>
  )
}

export default App
