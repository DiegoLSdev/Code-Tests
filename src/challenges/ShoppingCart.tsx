/*
-----------------------  THIS COMPONENT IS CREATED USING AI -----------------------

INSTRUCTIONS:
✓ Each product must have its own counter (independent state)
✓ Clicking +/- on one product should NOT affect others
✓ Show total items in cart

EXTRA:
✓ Generate products dynamically
✓ Extract ProductCard component
✓ Calculate total price

*/

import { useState } from "react";

export default function ShoppingCart() {
    const [count, setCount] = useState(0);

    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Mouse", price: 29 },
        { id: 3, name: "Keyboard", price: 79 },
        { id: 4, name: "Monitor", price: 299 }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 border rounded-lg bg-white shadow"
                    >
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-gray-600 mb-4">${product.price}</p>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setCount(count - 1)}
                                className="px-3 py-1 bg-gray-500 text-white rounded"
                            >
                                -
                            </button>
                            <span className="font-semibold">{count}</span>
                            <button
                                onClick={() => setCount(count + 1)}
                                className="px-3 py-1 bg-gray-500 text-white rounded"
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
                        <li>✓ Generate products dynamically</li>
                        <li>✓ Extract ProductCard component</li>
                        <li>✓ Calculate total price</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}