import { Link, useParams } from 'react-router-dom';
import { challenges } from '../data/challenges';

export default function Challenge() {

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

    return (
        <div className="min-h-screen bg-background bg-grid-pattern">
            <div className="container mx-auto px-4 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
                    ← Back to Challenges
                </Link>
                {/* CHALLENGE HEADER */}
                <div className="mb-8">
                    <span className="font-mono text-xs mb-4 inline-block">
                        {challenge.category}
                    </span>
                    <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                        {challenge.tags.map((tag) => (
                            <span key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>


                    <div className="rounded-lg border border-border bg-card p-8">
                        <h2 className="text-lg font-semibold mb-4">Description</h2>
                        <p className="text-sm leading-relaxed">
                            {challenge.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}