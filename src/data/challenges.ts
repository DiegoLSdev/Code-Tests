import type { ComponentType } from "react";
import IndependentCounters from "../challenges/IndependentCounters";
// Challenge data structure
interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  component?: ComponentType
}

// Sample challenge data
export const challenges: Challenge[] = [

  {
    id: 1,
    title: 'Independent Counters',
    description: 'This counters are broken in many ways. Navigate to src/challenges/IndependentCounters.tsx to find the broken component and pass the test.',
    category: 'React.js',
    tags: ['basics', 'state', 'logic'],
    component:IndependentCounters
  },
];
