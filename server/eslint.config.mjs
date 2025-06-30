import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  // Ignore patterns
  {
    ignores: [
      "node_modules/",
      "dist/",
      "logs/",
      "coverage/",
      "*.min.js",
      "eslint.config.mjs",
    ],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // Prettier config (disables conflicting ESLint rules)
  prettier,

  // Main configuration for all JS files
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 2021,
      sourceType: "commonjs",
    },
    rules: {
      // Basic rules to prevent errors
      "no-console": "off", // Allow console in server environment
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-unused-vars": "error",
      "no-undef": "error",

      // Node.js specific
      "no-process-exit": "warn",
    },
  },

  // Test files configuration
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "off", // Often have unused vars in tests
    },
  },
];
