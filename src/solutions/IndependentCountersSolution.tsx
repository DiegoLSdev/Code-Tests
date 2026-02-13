import { useState } from 'react';

// Componente reutilizable de contador (EXTRA: Generator)
interface CounterProps {
  title: string;
  increment?: number; // EXTRA: Acepta cantidad de incremento
}

function Counter({ title, increment = 1 }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-5xl font-bold">{count}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - increment)}
          className="flex-1 rounded-md bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors"
        >
          - {increment}
        </button>
        <button
          onClick={() => setCount(count + increment)}
          className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
        >
          + {increment}
        </button>
      </div>
    </div>
  );
}

export default function IndependentCountersSolution() {
  return (
    <div className="bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Independent Counters - Solución</h2>
          <p className="text-sm">Cada contador tiene su propio estado y cantidad de incremento</p>
        </div>

        {/* Counters Grid - EXTRA: Cada contador aumenta cantidad diferente */}
        <div className="grid gap-6 md:grid-cols-3">
          <Counter title="Counter 1" increment={1} />
          <Counter title="Counter 2" increment={5} />
          <Counter title="Counter 3" increment={10} />
        </div>

        {/* Solution Explanation */}
        <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-900">Solución Explicada</h3>
          <div className="space-y-3 text-sm text-green-800">
            <p>
              <strong>✓ Estados Independientes:</strong> Cada instancia del componente{' '}
              <code className="bg-green-100 px-1 rounded">Counter</code> tiene su propio estado{' '}
              <code className="bg-green-100 px-1 rounded">count</code>.
            </p>
            <p>
              <strong>✓ Componente Reutilizable:</strong> Creamos un componente{' '}
              <code className="bg-green-100 px-1 rounded">Counter</code> que acepta{' '}
              <code className="bg-green-100 px-1 rounded">title</code> e{' '}
              <code className="bg-green-100 px-1 rounded">increment</code> como props.
            </p>
            <p>
              <strong>✓ Incrementos Personalizados:</strong> Counter 1 aumenta de 1 en 1, Counter 2 de 5 en 5,
              y Counter 3 de 10 en 10.
            </p>
            <p>
              <strong>✓ Sin Duplicación:</strong> El código es más limpio y mantenible usando un componente
              reutilizable en lugar de repetir el mismo código 3 veces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
