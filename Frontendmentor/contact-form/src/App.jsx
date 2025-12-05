
function App() {
  return (
    <div className="h-screen w-screen bg-green-200 font-['Karla'] p-7">
      <form action="/enviar" className="bg-white rounded-[10px] py-3 px-6">
        <h1 className="font-bold text-[28px]">Contact Us</h1>
        <div className="flex flex-col mt-[15px]">
          <label htmlFor="first" className="text-[18px]">First Name <span className="text-green-600">*</span></label>
          <input 
          type="text" 
          name="first" 
          id="first"
          className="border rounded-[5px] h-10 mt-1" />
        </div>
        <div className="flex flex-col mt-[15px]">
          <label htmlFor="first" className="text-[18px]">Last Name <span className="text-green-600">*</span></label>
          <input 
          type="text" 
          name="first" 
          id="first"
          className="border rounded-[5px] h-10 mt-1" />
        </div>
      </form>
    </div>
  )
}

export default App
