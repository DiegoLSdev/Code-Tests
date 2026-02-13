import { useState } from "react";
import { Trash2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
}

// Interfaz para items del carrito que incluye cantidad
interface CartItem extends Product {
  quantity: number;
}

export default function ShoppingCartSolution() {
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 },
  ];

  // Estado: Un objeto que mapea productId -> cantidad
  const [cart, setCart] = useState<Record<number, number>>({});

  // Funciones helper
  const updateQuantity = (productId: number, change: number) => {
    setCart((prev) => {
      const currentQty = prev[productId] || 0;
      const newQty = Math.max(0, currentQty + change); // No permitir negativos

      // Si la cantidad es 0, eliminar del carrito
      if (newQty === 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [productId]: newQty };
    });
  };

  // EXTRA: Feature de eliminar items
  const removeItem = (productId: number) => {
    setCart((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
  };

  // Calcular total de items
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // EXTRA: Calcular precio total
  const totalPrice = products.reduce((sum, product) => {
    const quantity = cart[product.id] || 0;
    return sum + product.price * quantity;
  }, 0);

  // Obtener items en el carrito
  const cartItems: CartItem[] = products
    .filter((p) => cart[p.id] && cart[p.id] > 0)
    .map((p) => ({ ...p, quantity: cart[p.id] }));

  return (
    <div className="bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Shopping Cart - Solución</h2>
          <p className="text-sm">Cada producto tiene su propio contador independiente</p>
        </div>

        {/* Shopping Cart */}
        <div className="flex flex-col">
          <div className="flex gap-4 flex-wrap items-center justify-center mb-6">
            {products.map((product) => {
              const quantity = cart[product.id] || 0;
              const isInCart = quantity > 0;

              return (
                <div
                  key={product.id}
                  className={`p-4 w-fit border rounded-lg shadow flex gap-2 items-center transition-colors ${
                    isInCart ? "bg-green-50 border-green-300" : "bg-white"
                  }`}
                >
                  <div className="flex gap-2 items-center justify-center">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={quantity === 0}
                      className="px-3 py-1 bg-white text-black border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      -
                    </button>
                    <span className="font-semibold min-w-[20px] text-center">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="px-3 py-1 bg-white text-black border rounded hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                    {/* EXTRA: Botón de eliminar */}
                    {isInCart && (
                      <button
                        onClick={() => removeItem(product.id)}
                        className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Eliminar del carrito"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Summary */}
          <div className="p-6 bg-gray-100 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total Items:</p>
              <p className="text-2xl font-bold">{totalItems}</p>
            </div>
            {/* EXTRA: Precio total */}
            <div className="flex justify-between items-center border-t pt-3">
              <p className="text-lg font-semibold">Total Price:</p>
              <p className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Solution Explanation */}
        <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-900">Solución Explicada</h3>
          <div className="space-y-3 text-sm text-green-800">
            <p>
              <strong>✓ Estado Estructurado:</strong> Usamos un objeto{' '}
              <code className="bg-green-100 px-1 rounded">Record&lt;number, number&gt;</code> que mapea
              productId → cantidad, permitiendo contadores independientes.
            </p>
            <p>
              <strong>✓ Total Calculado:</strong> El total de items se calcula sumando todas las
              cantidades del carrito usando{' '}
              <code className="bg-green-100 px-1 rounded">Object.values().reduce()</code>.
            </p>
            <p>
              <strong>✓ Función de Eliminar:</strong> Cada producto tiene un botón de eliminar que
              remueve el item completamente del carrito.
            </p>
            <p>
              <strong>✓ Precio Total:</strong> Calculamos el precio total multiplicando cada cantidad
              por su precio y sumando todos los productos.
            </p>
            <p>
              <strong>✓ UI Mejorada:</strong> Los productos en el carrito se resaltan en verde para
              mejor feedback visual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
