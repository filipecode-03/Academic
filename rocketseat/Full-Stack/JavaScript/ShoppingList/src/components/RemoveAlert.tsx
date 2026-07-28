import { CircleAlert, X } from "lucide-react";

interface RemoveAlertProps {
  visible: boolean;
}

function RemoveAlert({ visible }: RemoveAlertProps) {
  if (!visible) return null;

  return (
    <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-[#C93847] p-4 text-white">
        <div className="flex items-center gap-3">
            <CircleAlert size={20} />
            <p>O item foi removido da lista</p>
        </div>
        <X />
    </div>
  );
}

export default RemoveAlert;