# Node.js Testing Project

A basic Node.js project set up for testing with Jest.

## Project Structure

```
node_project/
├── src/
│   ├── index.js        # Main entry point
│   └── math.js         # Math utility functions
├── __tests__/
│   └── math.test.js    # Jest tests for math utilities
├── package.json        # Project dependencies and scripts
├── README.md           # This file
└── .github/
    └── copilot-instructions.md  # Copilot instructions
```

## Installation

Install the project dependencies:

```bash
npm install
```

## Running the Project

To run the main application:

```bash
npm start
```

## Running Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode (re-run on file changes):

```bash
npm run test:watch
```

To run tests with coverage report:

```bash
npm run test:coverage
```

## Project Overview

This project includes:

- **Math utilities** (`src/math.js`): Basic arithmetic functions (add, subtract, multiply, divide)
- **Jest tests** (`__tests__/math.test.js`): Comprehensive test suite with multiple test cases
- **Main application** (`src/index.js`): Example usage of the math utilities

## Technologies

- **Node.js**: JavaScript runtime
- **Jest**: Testing framework

## License

MIT
