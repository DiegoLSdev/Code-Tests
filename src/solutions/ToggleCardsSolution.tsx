import { useState } from "react";

// EXTRA: Componente Card extraído y reutilizable
interface CardProps {
  cardNumber: number;
}

function Card({ cardNumber }: CardProps) {
  // Cada card tiene su propio estado independiente
  const [active, setActive] = useState(false);

  return (
    <div
      className={`p-6 border rounded-lg transition-colors ${
        active ? "bg-green-200" : "bg-gray-200"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">Card {cardNumber}</h3>
      <button
        onClick={() => setActive(!active)}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
      >
        Toggle
      </button>
      <p className="text-xs mt-2 text-gray-600">
        Estado: {active ? "Activo" : "Inactivo"}
      </p>
    </div>
  );
}

export default function ToggleCardsSolution() {
  // EXTRA: Generación dinámica de cards
  const cardNumbers = [1, 2, 3];

  return (
    <div className="bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Toggle Cards - Solución</h2>
          <p className="text-sm">Cada tarjeta tiene su propio estado independiente</p>
        </div>

        {/* Toggle Cards - EXTRA: Generadas dinámicamente */}
        <div className="flex justify-center gap-16">
          {cardNumbers.map((num) => (
            <Card key={num} cardNumber={num} />
          ))}
        </div>

        {/* Solution Explanation */}
        <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-900">Solución Explicada</h3>
          <div className="space-y-3 text-sm text-green-800">
            <p>
              <strong>✓ Estados Independientes:</strong> Cada instancia del componente{' '}
              <code className="bg-green-100 px-1 rounded">Card</code> tiene su propio estado{' '}
              <code className="bg-green-100 px-1 rounded">active</code>.
            </p>
            <p>
              <strong>✓ Componente Extraído:</strong> Creamos un componente{' '}
              <code className="bg-green-100 px-1 rounded">Card</code> separado que encapsula
              la lógica y el estado de cada tarjeta.
            </p>
            <p>
              <strong>✓ Generación Dinámica:</strong> Usamos{' '}
              <code className="bg-green-100 px-1 rounded">.map()</code> para generar las cards
              de forma dinámica desde un array.
            </p>
            <p>
              <strong>✓ Escalabilidad:</strong> Para agregar más cards, solo necesitas modificar
              el array <code className="bg-green-100 px-1 rounded">cardNumbers</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
