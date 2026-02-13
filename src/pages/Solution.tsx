import { Link, useParams } from 'react-router-dom';
import { challenges } from '../data/challenges';
import SolutionPlaceholder from '../components/SolutionPlaceholder';
import { CheckCircle2 } from 'lucide-react';

export default function Solution() {
  const { id } = useParams();
  const challenge = challenges.find(c => c.id === Number(id));

  if (!challenge) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Challenge Not Found</h2>
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const SolutionComponent = challenge.solutionComponent;

  return (
    <div className="min-h-screen bg-background bg-grid-pattern">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            to={`/challenge/${id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            ← Back to Challenge
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary hover:underline"
          >
            Home
          </Link>
        </div>

        {/* SOLUTION HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="text-green-600" size={32} />
            <span className="font-mono text-xs inline-block text-green-600 font-semibold">
              SOLUCIÓN
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-6">
            {challenge.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs">
                {tag}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Categoría:</strong> {challenge.category}
            </p>
            <p className="text-md leading-relaxed">
              {challenge.description}
            </p>
          </div>
        </div>
        {/* SOLUTION HEADER */}

        {/* SOLUTION CONTENT */}
        {SolutionComponent ? (
          <div className="mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
              <p className="text-green-800 font-medium">
                ✓ Esta es la versión funcional del challenge. Úsala como referencia o para comparar con tu solución.
              </p>
            </div>
            <SolutionComponent />
          </div>
        ) : (
          <SolutionPlaceholder />
        )}
      </div>
    </div>
  );
}
