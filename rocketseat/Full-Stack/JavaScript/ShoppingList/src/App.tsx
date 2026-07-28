import { useState } from "react";
import logo from "./assets/images/logo.png";
import { ArrowLeft } from "lucide-react";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";
import RemoveAlert from "./components/RemoveAlert";
import { type ShoppingItemType } from "./types/shopping";

function App() {
  const [items, setItems] = useState<ShoppingItemType[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  function addItem(name: string) {
    const newItem: ShoppingItemType = {
      id: crypto.randomUUID(),
      name,
    };

    setItems((old) => [...old, newItem]);
  }

  function removeItem(id: string) {
    setItems((old) => old.filter((item) => item.id !== id));

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 100000);
  }

  return (
    <div className="font-['Inter'] max-w-2xl mx-auto p-8">
      <img
        src={logo}
        alt="logo"
        className="mx-auto hidden lg:block"
      />

      <div className="flex items-center hover:underline cursor-pointer gap-2 text-[#CA3884] mt-8">
        <ArrowLeft />
        <p>Voltar</p>
      </div>

      <h1 className="font-bold text-[32px] mt-4">
        Compras da semana
      </h1>

      <Form onAddItem={addItem} />

      <ShoppingList
        items={items}
        onRemove={removeItem}
      />

      <RemoveAlert visible={showAlert} />
    </div>
  );
}

export default App;