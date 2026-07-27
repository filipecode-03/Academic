import logo from './assets/images/logo.png'
import Main from './components/Main'

function App() {

  return (
    <div>
      <img src={logo} alt="logo" className='mx-auto mt-16' />
      <Main />
    </div>
  )
}

export default App
