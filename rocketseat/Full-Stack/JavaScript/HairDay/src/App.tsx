import logo from './assets/images/Logo.png'
import Agenda from './components/Agenda'
import Form from './components/Form'

function App() {

  return (
    <div className="font-['Catamaran'] p-3">
      <img src={logo} alt="logo" className='absolute bg-[#2E2C30] px-5 rounded-br-xl py-3  left-0 top-0' />
      <div className='flex items-start'>
        <Form />
        <Agenda />
      </div>
    </div>
  )
}

export default App
