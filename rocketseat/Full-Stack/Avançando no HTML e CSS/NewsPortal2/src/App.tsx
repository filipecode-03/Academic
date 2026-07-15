import Header from './components/Header.tsx'
import Prin from './components/Prin.tsx'
import More from './components/More.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <div className='text-white'>
      <Header />
      <main className="px-8 mt-10 mb-20 flex flex-col gap-20">
          <Prin />
          <More />
          <Footer />
      </main>
    </div>
  )
}

export default App
