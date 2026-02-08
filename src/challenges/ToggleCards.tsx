
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
    <div className="bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Toggle Cards Challenge</h2>
          <p className="text-sm">Fix the bugs to make each card work independently!</p>
        </div>

        {/* Toggle Cards */}
        <div className="flex justify-center gap-16">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className={`p-6 border rounded-lg ${active ? "bg-green-200" : "bg-gray-200"
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

        {/* Help Section */}
        <div className="mt-12 rounded-lg border border-border bg-card p-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-4">Instructions</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Each card must have its own active state</li>
              <li>✓ Clicking one card should NOT affect others</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Extra</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Generate cards dynamically</li>
              <li>✓ Extract Card component</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}