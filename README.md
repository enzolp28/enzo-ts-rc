# enzo-ts-rc

A React component library built with TypeScript, providing reusable UI components for your React applications.

## Installation

```bash
npm install enzo-ts-rc
```

## Usage

```tsx
import { Button } from 'enzo-ts-rc';

function App() {
  return (
    <Button 
      text="Click me!" 
      variant="primary" 
      onClick={() => alert('Button clicked!')} 
    />
  );
}
```

## Components

### Button

A customizable button component with different variants.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | required | The text to display inside the button |
| variant | 'primary' \| 'secondary' | 'primary' | The visual style variant of the button |
| onClick | () => void | undefined | Function to call when the button is clicked |

## Creating Your Own React Component Library

Here's a detailed guide on how to create your own React component library using TypeScript:

### 1. Project Setup

```bash
mkdir your-library-name
cd your-library-name
npm init -y
```

### 2. Install Dependencies

```bash
npm install --save-dev typescript @types/react @types/react-dom react react-dom @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript rollup rollup-plugin-dts tslib
```

**Why?** These dependencies are essential for:
- TypeScript: Static typing and better development experience
- React types: Type definitions for React
- Rollup and plugins: Bundling the library efficiently
- tslib: Runtime library for TypeScript helpers

### 3. Configure TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "lib": ["dom", "esnext"],
    "jsx": "react",
    "declaration": true,
    "declarationDir": "types",
    "strict": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

**Why?** This configuration:
- Enables React JSX support
- Generates type declarations (.d.ts files)
- Sets up module resolution
- Ensures type safety with strict mode
- Defines input/output directories

### 4. Configure Rollup (rollup.config.js)

```javascript
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("package.json"));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__", "**/*.test.ts"]
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
```

**Why?** This configuration:
- Bundles code for both CommonJS and ES Modules
- Generates type definitions
- Excludes React and React DOM from the bundle
- Sets up source maps for debugging
- Handles TypeScript compilation

### 5. Update package.json

```json
{
  "name": "your-library-name",
  "version": "0.0.1",
  "description": "Your library description",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "files": ["dist"],
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c"
  },
  "type": "module",
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
```

**Why?** This configuration:
- Defines entry points for different module systems
- Specifies files to include in the package
- Sets up peer dependencies
- Configures the build script
- Enables ES modules

### 6. Create Component Structure

```
src/
  components/
    ComponentName/
      ComponentName.tsx
      index.ts
  index.ts
```

**Why?** This structure:
- Keeps components organized
- Makes imports clean and consistent
- Allows for easy addition of new components
- Separates component logic from exports

### 7. Build and Publish

```bash
# Build the library
npm run build

# Login to npm (if not already)
npm login

# Publish the package
npm publish
```

**Why?** These steps:
- Generate the distribution files
- Authenticate with npm
- Make your library available on npm

### 8. Version Control

```bash
git init
echo "node_modules/\ndist/" > .gitignore
git add .
git commit -m "Initial commit"
```

**Why?** This:
- Initializes version control
- Excludes unnecessary files
- Creates first commit for tracking changes

## Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Build the library:
```bash
npm run build
```

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
