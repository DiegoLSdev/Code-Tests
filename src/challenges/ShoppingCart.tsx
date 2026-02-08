/*
-----------------------  THIS COMPONENT IS CREATED USING AI -----------------------

INSTRUCTIONS:
✓ Each product must have its own counter (independent state)
✓ Clicking +/- on one product should NOT affect others
✓ Show total items in cart

EXTRA:
✓ Add a delete feature for cart items
✓ Calculate total price

*/

import { useState } from "react";

export default function ShoppingCart() {
    const [count, setCount] = useState(0);

    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Mouse", price: 29 },
        { id: 3, name: "Keyboard", price: 79 },
    ];

    return (
        <div className="bg-background flex items-center justify-center">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Shopping Cart Challenge</h2>
                    <p className="text-sm">Fix the bugs to make each item work independently!</p>
                </div>

                {/* Shopping Cart */}
                <div className="flex flex-col">
                    <div className="flex gap-4 flex-wrap items-center justify-center mb-6">
                        {products.map((product) => (
                            <div key={product.id} className="p-4 w-fit border rounded-lg bg-white shadow flex gap-2 items-center">
                                    <div className="flex gap-2 items-center justify-center">
                                        <h3 className="font-bold text-lg">{product.name}</h3>
                                        <p className="text-gray-600">${product.price}</p>
                                    </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setCount(count - 1)}
                                        className="px-3 py-1 bg-white text-black border rounded"
                                    >
                                        -
                                    </button>
                                    <span className="font-semibold">{count}</span>
                                    <button
                                        onClick={() => setCount(count + 1)}
                                        className="px-3 py-1 bg-white text-black border rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-xl font-bold">Total Items: {count}</p>
                    </div>
                </div>

                {/* Help Section */}
                <div className="mt-12 rounded-lg border border-border bg-card p-6 grid gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Instructions</h3>
                        <ul className="space-y-2 text-sm">
                            <li>✓ Each product must have its own counter (independent state)</li>
                            <li>✓ Clicking +/- on one product should NOT affect others</li>
                            <li>✓ Show total items in cart</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Extra</h3>
                        <ul className="space-y-2 text-sm">
                            <li>✓ Add a delete feature for cart items</li>
                            <li>✓ Calculate total price</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}