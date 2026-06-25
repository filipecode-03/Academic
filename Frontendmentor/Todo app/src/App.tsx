import { useState } from "react";

type Item = {
  id: string;
  name: string;
  bought: boolean;
};

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => {
    if (!input.trim()) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      name: input,
      bought: false,
    };

    setItems((prev) => [...prev, newItem]);
    setInput("");
  };

  const toggleBought = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, bought: !item.bought }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const pendingItems = items.filter(
    (item) => !item.bought
  ).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Compras</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite um item"/>
      <button onClick={addItem}>
        Adicionar
      </button>
      <p>Pendentes: {pendingItems}</p>
      {items.map((item) => (
        <div key={item.id}>
          <input type="checkbox" checked={item.bought}
            onChange={() =>
              toggleBought(item.id)
            }
          />
          <span>
            {item.name}
          </span>
          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;