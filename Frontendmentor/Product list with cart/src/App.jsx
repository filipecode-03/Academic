import { useState } from "react";
import data from "../data.json";
import Produtos from "./components/Produtos";
import Painel from "./components/Painel";

function App() {
  const [cart, setCart] = useState([]);

  // Adicionar produto
  function addToCart(product) {
    const productExists = cart.find(
      (item) => item.name === product.name
    );

    if (productExists) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Aumentar quantidade
  function increaseQuantity(name) {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Diminuir quantidade
  function decreaseQuantity(name) {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remover item
  function removeItem(name) {
    setCart(cart.filter((item) => item.name !== name));
  }

  // Valor total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="font-['Red_Hat_Text'] px-8 py-6">
        <Produtos
          products={data}
          addToCart={addToCart}
        />
        <Painel
          cart={cart}
          total={total}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
    </main>
  );
}

export default App;