# Secondary Development

## Before Getting Started

This tutorial provides Hexo development knowledge, code examples, and API call documentation related to ShokaX. Hence, before you begin, you should:

- Write and execute a JavaScript/TypeScript script
- Understand basic Node.js concepts (e.g., import and npm)
- Configure an IDE environment according to your preferences
- Have familiarity with using git and GitHub for basic operations

Some points to note while reading this document:

- `<type>` represents a required value. Remove the angle brackets and replace them directly with the value, following TypeScript type standards.
- `[--depth=1]` represents an optional value/parameter. You can omit the square brackets.

## Clone Repository

I recommend using the fork feature for storing changes/raising PRs. Click the fork button in the top right corner of the repository, which will lead you to your forked repository. Then:

```bash
git clone <string> # Replace this with your fork's URL
```

Ensure you have the `pnpm` package manager installed, then:

```shell
pnpm install
pnpm run build
```

If `build` completes without errors, the repository is intact and ready for development.

## Development Guidelines

### Directory Structure

The directory structure of ShokaX (relevant for development purposes) is as follows:

```text
|- .github # Storage for issue templates, CI workflows, etc.
|- languages # Storage location for internationalization files
|- layout # Template storage location
|- scripts # Storage for Hexo scripts
|- source # Frontend file location
|- test # Testing scripts
- package.json # npm package JSON
- tsconfig.json # TypeScript compilation configuration
- .eslintrc.cjs # ESLint configuration
- _config.yml # Hexo theme configuration file
- _images.yml # Image bed configuration file
```

### Debugging Considerations

1. Hexo doesn't automatically exclude TypeScript files. Hence, after building, manually remove `*.ts` files when copying to the themes folder. On Linux, you can use `find . -type f -name "*.ts" -delete` for bulk deletion.

### Code Considerations

1. `source/js` directory cannot use Hexo's helper functions and node libraries. The functions in `scripts` directory shouldn't use functions from `source/js`.
2. Pay attention to the differences between ESM and CJS. For modules that exclusively support CJS, use the form `import xxx = require('xxx')`. Otherwise, the files won't generate correctly after TypeScript compilation.
3. Minimize the use of `@ts-ignore`. Generally, it should only be used for legacy code and problematic type-related code, avoiding it otherwise.
4. Document your code with comments, especially for peculiar code (e.g., magic numbers and complex regex). For regular expressions, provide an example for better understanding.
