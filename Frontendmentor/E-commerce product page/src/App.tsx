import Nav from './components/Nav';
import Content from './components/Content'
import { useState, useEffect } from 'react';
import ProductImages from './components/ProductImages';

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
      <ProductImages />
      <Content />
    </div>
  );
}

export default App
