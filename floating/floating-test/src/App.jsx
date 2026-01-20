import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";
import { useState } from "react";

export function App() {
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  return (
    <div className="mx-auto">
      <button
        ref={refs.setReference}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="px-4 py-2 bg-blue-600 text-black rounded"
      >
        Processos
      </button>

      {open && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          className="bg-blue-900 text-black rounded-lg shadow-lg p-4 w-48"
        >
          <ul className="space-y-2">
            <li>Pregões</li>
            <li>Adesão</li>
            <li>Dispensa</li>
            <li>IRP</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App