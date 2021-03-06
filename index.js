module.exports = {
  "configs": {
    "typescript": {
      "plugins": [
        "@typescript-eslint",
        "import",
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      "rules": {
        "array-bracket-newline": ["warn", "consistent"],
        "array-bracket-spacing": "warn",
        "array-callback-return": "error",
        "array-element-newline": ["warn", "consistent"],
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": "warn",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "block-spacing": "warn",
        "brace-style": "off",
        "@typescript-eslint/brace-style": "warn",
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": "warn",
        "comma-style": "warn",
        "consistent-return": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/func-call-spacing": "warn",
        "function-call-argument-newline": ["warn", "consistent"],
        "function-paren-newline": ["warn", "multiline-arguments"],
        "generator-star-spacing": "warn",
        "import/extensions": ["warn", "never"],
        "import/first": "warn",
        "import/newline-after-import": "warn",
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
        "indent": "off",
        "@typescript-eslint/indent": ["warn", 2, {
          "ignoredNodes": ["TSTypeParameterInstantiation"],
          "SwitchCase": 1,
        }],
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "linebreak-style": "warn",
        "max-len": ["warn", 100],
        "multiline-ternary": ["warn", "always-multiline"],
        "@typescript-eslint/naming-convention": ["warn",
          {
            "selector": "default",
            "format": ["camelCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "variable",
            "modifiers": ["const", "global"],
            "format": ["camelCase", "PascalCase", "UPPER_CASE"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "variable",
            "modifiers": ["const", "global", "exported"],
            "format": ["camelCase", "PascalCase", "UPPER_CASE"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": ["variable", "parameter"],
            "modifiers": ["destructured"],
            "format": null,
          },
          {
            "selector": ["function"],
            "format": ["camelCase", "PascalCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": ["variable", "function"],
            "modifiers": ["exported"],
            "format": ["camelCase", "PascalCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "variableLike",
            "format": ["camelCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "parameter",
            "format": ["camelCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "objectLiteralProperty",
            "format": null,
            "types": ["boolean"],
            "filter": {
              "regex": "^__esModule$",
              "match": true,
            },
            "custom": {
              "regex": "^__esModule$",
              "match": true,
            },
          },
          {
            "selector": "memberLike",
            "modifiers": ["private"],
            "format": ["camelCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "memberLike",
            "modifiers": ["protected"],
            "format": ["camelCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "memberLike",
            "format": ["camelCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "enumMember",
            "format": ["PascalCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
          {
            "selector": "typeLike",
            "format": ["PascalCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
          },
        ],
        "no-constructor-return": "error",
        "@typescript-eslint/no-dupe-class-members": "warn",
        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "warn",
        "@typescript-eslint/no-extra-parens": "warn",
        "@typescript-eslint/no-extra-semi": "error",
        "no-fallthrough": "warn",
        "no-lone-blocks": "warn",
        "no-lonely-if": "warn",
        "no-multi-spaces": "warn",
        "no-multiple-empty-lines": ["warn", {
          "max": 1,
          "maxBOF": 0,
          "maxEOF": 0,
        }],
        "no-nested-ternary": "warn",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "warn",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", {
          "args": "after-used",
          "argsIgnorePattern": "^_",
          "ignoreRestSiblings": true,
          "caughtErrors": "none",
        }],
        "@typescript-eslint/no-use-before-define": "off",
        "import/no-useless-path-segments": ["error", {
          "noUselessIndex": true,
        }],
        "no-whitespace-before-property": "warn",
        "object-curly-newline": ["warn", {
          "multiline": true,
          "consistent": true,
        }],
        "object-curly-spacing": ["warn", "always"],
        "object-property-newline": ["warn", {
          "allowAllPropertiesOnSameLine": true,
        }],
        "operator-assignment": "warn",
        "operator-linebreak": ["warn", "after", {
          "overrides": {
            "?": "before",
            ":": "before",
          },
        }],
        "padded-blocks": ["warn", "never"],
        "prefer-const": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "quote-props": ["warn", "consistent-as-needed"],
        "quotes": "off",
        "@typescript-eslint/quotes": "warn",
        "require-atomic-updates": "off",
        "@typescript-eslint/require-await": "off",
        "rest-spread-spacing": "warn",
        "@typescript-eslint/restrict-template-expressions": "off",
        "semi-spacing": "warn",
        "semi": "off",
        "@typescript-eslint/semi": "error",
        "space-before-blocks": "warn",
        "@typescript-eslint/space-before-function-paren": ["warn", {
          "named": "never",
          "anonymous": "never",
          "asyncArrow": "always",
        }],
        "space-in-parens": "warn",
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "warn",
        "space-unary-ops": ["warn", {
          "words": true,
          "nonwords": false,
        }],
        "spaced-comment": ["warn", "always", {
          "block": {
            "balanced": true,
          },
        }],
        "switch-colon-spacing": "warn",
        "template-curly-spacing": "warn",
        "yield-star-spacing": "warn",
      },
      "settings": {
        "import/parsers": {
          "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
        },
      },
      "overrides": [{
        // enable these rules specifically for TypeScript files
        "files": ["*.ts", "*.tsx"],
        "rules": {
          "consistent-return": "off",
          "import/default": "off",
          "@typescript-eslint/explicit-function-return-type": ["warn", {
            "allowExpressions": true,
            "allowTypedFunctionExpressions": true,
            "allowHigherOrderFunctions": true,
            "allowConciseArrowFunctionExpressionsStartingWithVoid": true,
          }],
          "@typescript-eslint/explicit-member-accessibility": "warn",
          "@typescript-eslint/explicit-module-boundary-types": "error",
          "import/named": "off",
          "@typescript-eslint/no-empty-interface": "off",
          "@typescript-eslint/no-inferrable-types": ["warn", {
            "ignoreParameters": true,
          }],
          "@typescript-eslint/no-unnecessary-type-arguments": "warn",
          "@typescript-eslint/typedef": ["warn", {
            "arrayDestructuring": false,
            "arrowParameter": true,
            "memberVariableDeclaration": false,
            "objectDestructuring": false,
            "parameter": true,
            "propertyDeclaration": true,
            "variableDeclaration": false,
            "variableDeclarationIgnoreFunction": true,
          }],
        },
        "settings": {
          "import/resolver": {
            // use <root>/tsconfig.json
            "ts": {
              "alwaysTryTypes": true,
            },
          },
        },
      }, {
        // enable these rules specifically for JavaScript files
        "files": ["*.js", "*.jsx"],
        "rules": {
          "@typescript-eslint/no-var-requires": "off",
        }
      }, {
        "files": [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/__mocks__/*.js",
          "**/__mocks__/*.ts",
        ],
        "env": {
          "jest": true,
        },
        "rules": {
          "@typescript-eslint/no-non-null-assertion": "off",
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/unbound-method": "off",
        },
      }]
    },
    "react": {
      "plugins": [
        "react",
      ],
      "extends": [
        "plugin:react/recommended",
      ],
      "rules": {
        "react/button-has-type": "warn",
        "react/jsx-boolean-value": ["warn", "always"],
        "react/jsx-child-element-spacing": "warn",
        "react/jsx-closing-bracket-location": ["warn", "line-aligned"],
        "react/jsx-curly-brace-presence": ["warn", "never"],
        "react/jsx-curly-newline": ["warn", {
          "multiline": "require",
          "singleline": "consistent",
        }],
        "react/jsx-curly-spacing": "warn",
        "react/jsx-equals-spacing": "warn",
        "react/jsx-filename-extension": ["warn", {
          "extensions": [".tsx", ".jsx"],
        }],
        "react/jsx-first-prop-new-line": ["warn", "multiline"],
        "react/jsx-fragments": ["warn", "element"],
        "react/jsx-indent": ["warn", 2],
        "react/jsx-indent-props": ["warn", "first"],
        "react/jsx-max-props-per-line": ["warn", {
          "maximum": 1,
          "when": "multiline",
        }],
        "react/jsx-no-bind": "warn",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-tag-spacing": ["warn", {
          "closingSlash": "never",
          "beforeSelfClosing": "never",
          "afterOpening": "never",
          "beforeClosing": "never"
        }],
        "react/no-access-state-in-setstate": "warn",
        "react/no-array-index-key": "warn",
        "react/no-danger": "warn",
        "react/no-did-mount-set-state": "warn",
        "react/no-did-update-set-state": "warn",
        "react/no-redundant-should-component-update": "warn",
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unsafe": "warn",
        "react/no-unused-state": "warn",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": "error",
        "react/prop-types": "off",
        "react/require-optimization": "warn",
        "react/self-closing-comp": "warn",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
      },
    },
  },
};
