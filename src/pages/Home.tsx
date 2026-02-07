import { challenges } from '../data/challenges';
import CardsList from '../components/CardsList';
import EmptyState from '../components/EmptyState';

export default function Home() {
    return (
        <div className="min-h-screen bg-background bg-grid-pattern">

            {/* Header */}
            <header className="container mx-auto px-4 py-12">
                <h1 className='font-bold mt-2 text-3xl'>
                    <span>Programming</span> <span>Challenges</span>
                </h1>
                <p className="font-mono mt-4 text-lg text-muted">
                    Sharpen your coding skills with curated algorithm and data structure problems. Each
                    challenge includes a broken component with instructions to pass the test. To solve them or add new ones, check the <a href="https://github.com/DiegoLSdev/Code-Tests" className="font-semibold text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>

            </header>

            {/* Cards or Empty State */}
            {challenges.length > 0 ?  (<CardsList />) : (<EmptyState />)}
        </div>
    );
}