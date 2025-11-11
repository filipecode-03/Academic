import Form from './assets/components/Form.jsx'
import "./App.css"

function App() {
  
  return (
    <div className="bg-red-400/80 min-h-screen font-['Poppins']">
      <div className="bgroud text-center text-white lg:flex">
          <div className='lg:w-[800px] lg:pl-[120px] lg:pr-[50px] lg:pt-[130px] lg:text-left'>
            <h1 className="font-bold text-[40px] lg:text-[50px] px-[60px] lg:px-0 pt-[100px] leading-[50px] lg:leading-[60px]">Learn to code by watching others</h1>
            <p className="px-[60px] lg:px-0 pt-[30px] text-[20px] lg:text-[18px]">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
          </div>
          <div>
            <div className="text-center px-[60px] pt-[70px]">
              <p className="bg-[#5D54A3] rounded-2xl p-[25px] text-[20px] px-[60px] leading-[35px] shadowb"><span className="font-semibold">Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <Form />
          </div>
      </div>
    </div>
  )
}

export default App
