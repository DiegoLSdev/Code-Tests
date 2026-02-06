import './App.css';
import { challenges } from './data/challenges'

// Main App component
export default function App() {

  return (
    <div className="min-h-screen bg-background bg-grid-pattern">

      {/* Header */}
      <header className="container mx-auto px-4 py-12">
        <h1 className='font-bold mt-2 text-3xl'>
          <span>Programming</span> <span>Challenges</span>
        </h1>
        <p className="font-mono font-semibold mt-4 text-lg">
          Sharpen your coding skills with curated algorithm and data structure problems. Each
          challenge includes detailed explanations and optimized solutions.
        </p>
      </header>

      {/* Challenges */}
      <div className=" container mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
            {/* Card Header */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs">
                  {challenge.category}
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">{challenge.title}</h3>
              </div>
            </div>
            {/* Card Body */}
            <p className="mb-4 text-sm line-clamp-2">
              {challenge.description}
            </p>

            {/* Card Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {challenge.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs">
                  {tag}
                </span>
              ))}
            </div>
            {/* Card Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex items-center gap-2 ">
                <span className="text-xs font-mono">View Solution</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {challenges.length === 0 && (
        <div className="empty-state">
          <p>No challenges found matching your search.</p>
        </div>
      )}

    </div>
  );
}