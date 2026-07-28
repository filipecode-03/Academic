import { Trash2 } from "lucide-react";
import { type ShoppingItemType } from "../types/shopping";

interface ShoppingItemProps {
  item: ShoppingItemType;
  onRemove: (id: string) => void;
}

function ShoppingItem({ item, onRemove }: ShoppingItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl shadowB bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full border border-gray-500"></div>
        <span className="font-medium">{item.name}</span>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="hover:text-red-700 text-gray-500 cursor-pointer"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}

export default ShoppingItem;