## 🧠 Programming Challenges Platform

A React + TypeScript project focused on learning by fixing broken components.
Each challenge presents a buggy React component along with instructions. Your goal is to analyze, refactor, and fix the logic so the component behaves correctly.


## 📁 Project Structure
```
├── src
│   ├── challenges        # Broken challenge components
│   ├── components        # Reusable UI components
│   ├── data              # Challenges configuration
│   ├── pages             # App pages (Home, Challenge)
│   ├── App.tsx           # Routes definition
│   └── main.tsx          # App entry point
```

#### Key Folders

```src/challenges``` : Contains broken components users must fix

```src/data/challenges.ts``` : Central registry of all challenges.


## 🎯 Project Goal

This project is designed as a learning platform for React developers.
It focuses on common real-world mistakes such as shared state, improper component reuse,
and logic duplication.

The goal is not just to "make it work", but to encourage:
- Reading and understanding existing code
- Debugging broken logic
- Refactoring towards better patterns


## ▶️ Getting Started

1-  Clone the repository

```
git clone https://github.com/DiegoLSdev/Code-Tests.git

cd Code-Tests
```

2- Install dependencies

```
npm install
```

3- Run the project

```
npm run dev
```

The app will be available at:

```
http://localhost:5173
```


## 🧩 How to Solve a Challenge

1. Open a challenge from the Home page

2. Read the instructions carefully

3. Navigate to the corresponding file in src/challenges/

4. Fix the broken logic

5. Reload and verify correct behavior

6. There are no automatic tests (yet). You validate solutions by behavior.


## ➕ How to Add a New Challenge

1. Create a new component in src/challenges/

2. Add broken logic + instructions as comments

3. Register it in src/data/challenges.ts


## 🤝 Contributing

Contributions are welcome!

You can help by:
- Adding new challenges
- Improving existing challenges
- Fixing bugs or improving UI
- Improving documentation