import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import ProductImages from './components/ProductImages';
import Content from './components/Content';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <div className="font-['Kumbh_Sans']">
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container mx-auto md:px-4 md:py-8 pb-8 md:flex md:items-center md:justify-center md:space-x-16">
        <ProductImages />
        <Content />
      </main>
    </div>
  );
}

export default App;
