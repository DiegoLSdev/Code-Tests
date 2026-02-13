# Solutions Directory

This directory contains solution components for each challenge.

## How to Add Your Own Solution

1. **Create a new component** in this directory following the naming pattern:
   - `IndependentCountersSolution.tsx`
   - `ToggleCardsSolution.tsx`
   - `ShoppingCartSolution.tsx`

2. **Implement the solution** - Your component should contain the working version of the challenge without bugs.

3. **Register your solution** in `/src/data/challenges.ts`:
   ```typescript
   import YourSolution from '../solutions/YourSolution';

   export const challenges: Challenge[] = [
     {
       id: 1,
       title: '...',
       // ... other properties
       component: BrokenComponent,
       solutionComponent: YourSolution  // Add this line
     }
   ];
   ```

4. **Test your solution** by navigating to `/challenge/:id/solution` in your browser.

## Solution Component Template

```typescript
export default function ChallengeSolution() {
  // Your working implementation here

  return (
    <div>
      {/* Your solution UI */}
    </div>
  );
}
```

## Notes

- Solutions are optional - if not provided, users will see instructions on how to add one
- Solutions should demonstrate best practices and clean code
- Include comments explaining key concepts when helpful
