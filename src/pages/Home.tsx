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
                <p className="font-mono font-semibold mt-4 text-lg">
                    Sharpen your coding skills with curated algorithm and data structure problems. Each
                    challenge includes detailed explanations and optimized solutions.
                </p>
            </header>

            {/* Cards or Empty State */}
            {challenges.length > 0 ?  (<CardsList />) : (<EmptyState />)}
        </div>
    );
}