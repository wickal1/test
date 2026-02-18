
# Agent Guidelines for Project Development

This document outlines the commands, code style, and conventions to be followed by agents operating within this repository. Adherence to these guidelines ensures consistency, maintainability, and efficient collaboration.

## 1. Build, Lint, and Test Commands

### Build
To build the project for production:
```bash
npm run build
```

### Linting
To check code quality and style using ESLint:
```bash
npm run lint
```
This command enforces the project's linting rules.

### Testing
There are no explicit test scripts defined in `package.json`. However, the project uses Next.js and TypeScript, implying a standard testing setup (e.g., Jest, Vitest) might be in place or should be configured.

*   **Running All Tests:** If a test runner is configured (e.g., Jest), you might use:
    ```bash
    npm test
    # or
    # npx jest
    ```
    *(Note: This command is a placeholder. The actual command may vary based on the installed testing framework.)*

*   **Running a Single Test:** To run a specific test, you would typically use a flag provided by the testing framework. For example, with Jest:
    ```bash
    npm test -- -t "Your Test Name or Description"
    # or
    # npx jest path/to/your/test.spec.ts -t "Your Test Name or Description"
    ```
    *(Note: Replace `"Your Test Name or Description"` with the actual name or a unique part of the test's description. The exact command and flags may differ.)*

**Recommendation:** If tests are not running correctly or a specific command is needed, please investigate the project's testing framework setup (e.g., look for Jest/Vitest configuration files) or consult the project documentation.

## 2. Code Style Guidelines

Adherence to these guidelines is crucial for maintaining a consistent and readable codebase.

### Imports

*   **Ordering:** Imports should generally be ordered as follows:
    1.  Node.js built-in modules (if any).
    2.  Third-party library imports.
    3.  Project-specific absolute imports (e.g., `@/components`).
    4.  Project-specific relative imports.
*   **Formatting:** Use `npm run lint` to automatically format imports. Avoid manual reordering unless necessary and justified.
*   **Path Aliases:** Use the configured path alias `@/*` for project-internal imports (e.g., `import { Button } from '@/components/ui/button';`).

### Formatting

*   **Prettier:** Assume Prettier is configured for automatic formatting. Use `npm run lint` which should trigger Prettier.
*   **Indentation:** Use 2 spaces for indentation (common in Next.js/React projects).
*   **Quotes:** Prefer single quotes ('') for strings, unless a string contains a single quote itself, in which case double quotes ('") should be used. For JSX props, double quotes are standard.
*   **Semicolons:** Semicolons are generally used.

### Types (TypeScript)

*   **Strict Typing:** Utilize TypeScript's strict typing features. Define types for props, state, function parameters, and return values whenever possible.
*   **Interfaces vs. Types:** Use `interface` for defining the shape of objects (like component props or API responses) and `type` for unions, intersections, or other type definitions.
*   **Readonly:** Use `Readonly<T>` for props or state that should not be mutated.
*   **Utility Types:** Leverage TypeScript utility types (e.g., `Partial`, `Pick`, `Omit`) where appropriate.

### Naming Conventions

*   **Variables & Functions:** Use `camelCase` (e.g., `userName`, `fetchData`).
*   **Components:** Use `PascalCase` (e.g., `UserProfile`, `NavigationBar`).
*   **Constants:** Use `UPPER_SNAKE_CASE` for constants (e.g., `MAX_RETRIES`, `API_KEY`).
*   **File Names:** Use `kebab-case` for file names (e.g., `user-profile.tsx`, `api-client.ts`). Components can sometimes use `PascalCase` for single-file components (e.g., `UserProfile.tsx`).

### Error Handling

*   **`try...catch` Blocks:** Use `try...catch` blocks for operations that might fail (e.g., network requests, file I/O).
*   **Meaningful Errors:** Throw errors with descriptive messages.
*   **Async Operations:** Handle errors in promises using `.catch()` or `async/await` with `try...catch`.
*   **Centralized Error Handling:** Consider a centralized error logging mechanism or service for critical applications.

### React Specifics

*   **Functional Components:** Prefer functional components with Hooks.
*   **Hooks:** Use custom hooks to encapsulate reusable logic. Follow the Rules of Hooks.
*   **Props:** Destructure props for clarity. Use `Readonly` for props where appropriate.

## 3. Cursor Rules

No specific Cursor rules files (`.cursor/rules/` or `.cursorrules`) were found in the repository. Agents should follow general best practices for code editing.

## 4. Copilot Rules

No specific Copilot instructions file (`.github/copilot-instructions.md`) was found in the repository. Agents should rely on the general code style and conventions outlined above.

**Agent Response Language:** Respond in Korean.
**Pre-modification Check:** Before modifying any file, verify its existence.
tailwind.config.ts 파일은 Tailwind CSS v4를 사용하기 때문에 존재하지 않는 것이 맞으니 신경쓰지 않아도 됩니다.
