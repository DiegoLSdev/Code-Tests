
/*
-----------------------  THIS COMPONENT IS CREATED USING AI -----------------------

INSTRUCTIONS:
✓ Each card must have its own active state
✓ Clicking one card should NOT affect others

EXTRA:
✓ Generate cards dynamically
✓ Extract Card component

*/

import { useState } from "react";

export default function ToggleCards() {
  const [active, setActive] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((card) => (
        <div
          key={card}
          className={`p-6 border rounded-lg ${
            active ? "bg-green-200" : "bg-gray-200"
          }`}
        >
          <h3 className="text-lg font-bold mb-4">Card {card}</h3>
          <button
            onClick={() => setActive(!active)}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}