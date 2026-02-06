import { challenges } from '../data/challenges';
import CardsList from '../components/CardsList';

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

            {/* Cards List */}
            <CardsList/>

            {/* Empty State */}
            {challenges.length === 0 && (
                <div className="container mx-auto px-4 py-12 text-center">
                    <p>No challenges found matching your search.</p>
                </div>
            )}
        </div>
    );
}