import { useState } from 'react';

/**
 * CHALLENGE: Independent Counters
 * 
 * OBJETIVO:
 * Crear tres contadores independientes que funcionen correctamente.
 * Cada contador debe tener sus propios botones de incremento y decremento.
 * 
 * PROBLEMAS A RESOLVER:
 * 🐛 1. Los tres contadores comparten el mismo estado (todos cambian juntos)
 * 🐛 2. Los botones no están conectados correctamente a sus respectivos contadores
 * 🐛 3. Falta implementar la funcionalidad de decremento
 * 
 * PISTAS:
 * 💡 Cada contador necesita su propio useState
 * 💡 Los nombres de las variables deben ser descriptivos (counter1, counter2, counter3)
 * 💡 Cada botón debe actualizar solo SU contador
 */

export default function IndependentCounters() {
    // ❌ PROBLEMA: Todos los contadores usan el mismo estado
    const [counter, setCounter] = useState(0);

    // ✅ TODO: Crea estados separados para counter2 y counter3
    // const [counter2, setCounter2] = useState(0);
    // const [counter3, setCounter3] = useState(0);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Independent Counters Challenge</h2>
                    <p className="text-sm">Fix the bugs to make each counter work independently!</p>
                </div>

                {/* Counters Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    
                    {/* Counter 1 */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="text-lg font-semibold mb-4 text-center">Counter 1</h3>
                        <div className="text-center mb-6">
                            <span className="text-5xl font-bold">{counter}</span>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setCounter(counter - 1)}
                                className="flex-1 rounded-md bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors"
                            >
                                -
                            </button>
                            <button 
                                onClick={() => setCounter(counter + 1)}
                                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Counter 2 */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="text-lg font-semibold mb-4 text-center">Counter 2</h3>
                        <div className="text-center mb-6">
                            {/* ❌ PROBLEMA: Usa el mismo estado que Counter 1 */}
                            <span className="text-5xl font-bold">{counter}</span>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                // ❌ PROBLEMA: Modifica el estado de Counter 1
                                onClick={() => setCounter(counter - 1)}
                                className="flex-1 rounded-md bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors"
                            >
                                -
                            </button>
                            <button 
                                // ❌ PROBLEMA: Modifica el estado de Counter 1
                                onClick={() => setCounter(counter + 1)}
                                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Counter 3 */}
                    <div className="rounded-lg border border-border bg-card p-6">
                        <h3 className="text-lg font-semibold mb-4 text-center">Counter 3</h3>
                        <div className="text-center mb-6">
                            {/* ❌ PROBLEMA: Usa el mismo estado que Counter 1 */}
                            <span className="text-5xl font-bold">{counter}</span>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                // ❌ PROBLEMA: Modifica el estado de Counter 1
                                onClick={() => setCounter(counter - 1)}
                                className="flex-1 rounded-md bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors"
                            >
                                -
                            </button>
                            <button 
                                // ❌ PROBLEMA: Modifica el estado de Counter 1
                                onClick={() => setCounter(counter + 1)}
                                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                </div>

                {/* Help Section */}
                <div className="mt-12 rounded-lg border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold mb-4">📝 Instructions</h3>
                    <ul className="space-y-2 text-sm">
                        <li>✓ Create separate state variables for counter2 and counter3</li>
                        <li>✓ Update each counter's display to use its own state</li>
                        <li>✓ Connect each button to update only its corresponding counter</li>
                        <li>✓ Test that all three counters work independently</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}