import { useParams } from 'react-router-dom';
import { challenges } from '../data/challenges';

export default function Challenge() {

    const { id } = useParams();
    const challenge = challenges.find(c => c.id === Number(id));

    if (!challenge) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <h2 className="text-2xl font-bold">Challenge Not Found</h2>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <h2 className="text-2xl font-bold">Challenge Details Page for ID: {challenge.id}</h2>
        </div>
    );
}