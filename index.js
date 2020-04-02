module.exports = {
  configs: {
    typescript: {
      "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "import",
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      "rules": {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-use-before-define": ["error", {
          functions: false,
          typedefs: false,
          variables: false,
          enums: false,
        }],
        "@typescript-eslint/no-unnecessary-condition": ["error", {
          ignoreRhs: true
        }],
        "@typescript-eslint/no-unused-vars": ["warn", {
          argsIgnorePattern: "^_",
        }],
        "require-atomic-updates": "off",
        "quotes": "off",
        "brace-style": "off",
        "indent": "off",
        "prefer-const": "off",
        "no-multiple-empty-lines": ["warn", {
          "max": 1,
        }],
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "semi": "off",
        "comma-dangle": ["warn", "always-multiline"],
        "import/order": ["warn", {
          "groups": [
            "builtin",
            "external",
            "internal",
            "unknown",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true,
          }
        }],
        "import/first": "warn",
        "import/named": "off",
        "import/extensions": ["warn", "never"],
        "import/newline-after-import": "warn",
        "@typescript-eslint/quotes": "warn",
        "@typescript-eslint/brace-style": "warn",
        "@typescript-eslint/indent": ["warn", 2],
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": ["warn", {
          "ignoreParameters": true,
          "ignoreProperties": true,
        }],
        "@typescript-eslint/typedef": "warn",
      },
      "overrides": [{
        // enable these rules specifically for TypeScript files
        "files": ["*.ts", "*.tsx"],
        "rules": {
          "@typescript-eslint/explicit-member-accessibility": "warn",
          "@typescript-eslint/tslint/config": [
            "warn", {
              "rules": {
                "typedef": [
                  true,
                  "call-signature",
                ]
              }
            }
          ]
        }
      }, {
        // enable these rules specifically for JavaScript files
        "files": ["*.js", "*.jsx"],
        "rules": {
          "@typescript-eslint/explicit-function-return-type": "off",
          "@typescript-eslint/no-var-requires": "off",
        }
      }]
    },
    react: {
      "plugins": [
        "react",
      ],
      "extends": [
        "plugin:react/recommended",
      ],
      "rules": {
        "react/prop-types": "off",
      },
    },
  },
};
