// Challenge data structure
interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

// Sample challenge data
export const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Challenge Title 1',
    description: 'This is a brief description of the programming challenge. It should be concise and informative, giving users an idea of what the problem is about.',
    category: 'React.js',
    tags: ['basics', 'components', 'state'],
  },
    {
    id: 2,
    title: 'Challenge Title 2',
    description: 'This is a brief description of the programming challenge. It should be concise and informative, giving users an idea of what the problem is about.',
    category: 'React.js',
    tags: ['basics', 'components', 'state'],
  },
];