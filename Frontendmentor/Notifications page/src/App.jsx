import ChatOpen from "./components/ChatOpen"
import Prin from "./components/Prin"

function App() {

  return (
    <main className="p-8 lg:rounded-2xl font-['Plus_Jakarta_Sans'] bg-white lg:w-180 lg:mx-auto lg:my-15">
      <section className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-[25px]">Notifications</h1>
          <p className="bg-[#08337B] text-[18px] text-white px-3 font-bold rounded-[5px]">3</p>
        </div>
        <p className="font-semibold text-gray-500 hover:text-[#1F3268] cursor-pointer">Mark all as read</p>
      </section>
      <Prin />
      <ChatOpen />
    </main>
  )
}

export default App
