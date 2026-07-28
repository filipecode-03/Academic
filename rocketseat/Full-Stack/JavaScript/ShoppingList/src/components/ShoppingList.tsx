import ShoppingItem from "./ShoppingItem";
import { type ShoppingItemType } from "../types/shopping";

interface ShoppingListProps {
  items: ShoppingItemType[];
  onRemove: (id: string) => void;
}

function ShoppingList({ items, onRemove }: ShoppingListProps) {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default ShoppingList;