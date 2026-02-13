import { Code, Lightbulb, FileCode } from 'lucide-react';

export default function SolutionPlaceholder() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-500 text-white p-3 rounded-lg">
            <Lightbulb size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Solución No Disponible
            </h2>
            <p className="text-gray-600">
              La solución para este challenge aún no ha sido implementada. ¡Pero tú puedes agregarla!
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <div className="bg-white rounded-lg p-6 border border-blue-100">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FileCode className="text-blue-600" size={20} />
              Cómo Agregar Tu Solución
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                <div>
                  <strong>Crea tu componente de solución</strong> en{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    src/solutions/NombreSolution.tsx
                  </code>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                <div>
                  <strong>Importa tu solución</strong> en{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    src/data/challenges.ts
                  </code>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                <div>
                  <strong>Registra tu solución</strong> agregando la propiedad{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    solutionComponent: TuSolucion
                  </code>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 text-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Code size={20} className="text-green-400" />
              <h3 className="font-semibold">Ejemplo de Código</h3>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`// src/data/challenges.ts
import TuSolucion from '../solutions/TuSolucion';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Challenge Title',
    // ... otras propiedades
    component: ComponenteConBug,
    solutionComponent: TuSolucion  // ← Agrega esto
  }
];`}</code>
            </pre>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-900 text-sm">
              <strong>💡 Tip:</strong> Revisa el archivo{' '}
              <code className="bg-amber-100 px-2 py-0.5 rounded">
                src/solutions/README.md
              </code>{' '}
              para más detalles sobre cómo estructurar tu solución.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
