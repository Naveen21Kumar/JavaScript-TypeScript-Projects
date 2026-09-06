# Modal Starter — JavaScript to TypeScript Conversion

This folder contains the starter version of the modal window exercise. The goal is to keep the same browser behavior while converting the JavaScript implementation into TypeScript and learning the compile-time type workflow.

## Project Overview

- `index.html` contains the markup for the modal, overlay, and buttons.
- `style.css` contains the modal styles.
- `script.ts` contains the TypeScript source code for opening and closing the modal.
- `tsconfig.json` configures the TypeScript compiler for this project.
- `package.json` defines the build script and TypeScript dependency.

## Prerequisites

- Node.js installed on your machine.
- A browser to open `index.html` after building.
- Basic knowledge of JavaScript and DOM APIs.

## Setup

1. Open the folder in a terminal:
   ```bash
   cd path/to/06-Modal/starter
   ```
2. Install dependencies if not already installed:
   ```bash
   npm install
   ```

## TypeScript Conversion Steps

1. Rename the original `script.js` to `script.ts`.
2. Update the HTML script reference only after compilation to point to the generated `script.js`.
3. Create `tsconfig.json` to define TypeScript compiler settings.
4. Add DOM type annotations and handle nullable values explicitly:
   - `querySelector` can return `null`, so add checks or assertions.
   - Use `querySelectorAll<HTMLButtonElement>` for typed button elements.
   - Add explicit return types for functions such as `(): void`.

## Compiler Configuration

`tsconfig.json` should include at least the following:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES2020",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "outDir": ".",
    "rootDir": "."
  },
  "include": ["./script.ts"],
  "exclude": ["node_modules"]
}
```

## Build

Compile the TypeScript source to JavaScript with:

```bash
npm run build
```

This generates `script.js` from `script.ts`.

## Run

Open `index.html` in the browser after building.

> Important: Do not include `script.ts` directly in the browser. The browser can only execute JavaScript, so the page must load `script.js`.

Example script tag:

```html
<script src="script.js"></script>
```

## Learning Notes

- TypeScript is a development-time tool that checks types and emits JavaScript.
- Types are not executed in the browser; they are removed during compilation.
- `strict` mode helps catch potential bugs early, especially with DOM elements that may be `null`.
- The base workflow is:
  1. Write `.ts`
  2. Compile with `tsc`
  3. Open `.js` in the browser

## Recommended Workflow

1. Edit `script.ts`.
2. Run `npm run build`.
3. Refresh the browser.
4. Iterate on type errors and DOM handling.

## Notes for React / Vite users

If you normally work with Vite, this project shows the underlying process without the toolchain abstraction. Vite performs the same compilation automatically, but here you learn the explicit TypeScript build step.
