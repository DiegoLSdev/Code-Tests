import type { ComponentType } from "react";
import IndependentCounters from "../challenges/IndependentCounters";
import ToggleCards from "../challenges/ToggleCards";
import ShoppingCart from "../challenges/ShoppingCart";
import IndependentCountersSolution from "../solutions/IndependentCountersSolution";
import ToggleCardsSolution from "../solutions/ToggleCardsSolution";
import ShoppingCartSolution from "../solutions/ShoppingCartSolution";

// Challenge data structure
interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  component?: ComponentType;
  solutionComponent?: ComponentType;
}

// Sample challenge data
export const challenges: Challenge[] = [

  {
    id: 1,
    title: 'Independent Counters',
    description: 'This counters are broken in many ways. Navigate to src/challenges/IndependentCounters.tsx to find the broken component and pass the test.',
    category: 'React.js',
    tags: ['basics', 'state', 'logic'],
    component: IndependentCounters,
    solutionComponent: IndependentCountersSolution
  },
  {
    id: 2,
    title: 'Toggle Cards',
    description: 'This cards are broken. Navigate to src/challenges/ToggleCards.tsx to find the broken component and pass the test.',
    category: 'React.js',
    tags: ['basics', 'state', 'logic'],
    component: ToggleCards,
    solutionComponent: ToggleCardsSolution
  },
    {
    id: 3,
    title: 'Shopping Cart',
    description: 'This shopping cart is broken. Navigate to src/challenges/ShoppingCart.tsx to find the broken component and pass the test.',
    category: 'React.js',
    tags: ['basics', 'state', 'logic'],
    component: ShoppingCart,
    solutionComponent: ShoppingCartSolution
  },
];
