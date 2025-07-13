import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigAsPlugin } from "@eslint/compat";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: fixupConfigAsPlugin(pluginReactConfig),
      "@typescript-eslint": tseslint.plugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReactConfig.rules,
      ...tseslint.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Custom rules or overrides
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React to be in scope
      "react/prop-types": "off", // Not needed with TypeScript
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    // Ignore files/directories
    ignores: [".next/", "node_modules/", "public/"],
  }
);
