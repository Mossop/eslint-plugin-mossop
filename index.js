module.exports = {
  configs: {
    typescript: {
      "plugins": [
        "@typescript-eslint",
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
        "no-fallthrough": "warn",
        "consistent-return": "warn",
        "no-constructor-return": "error",
        "array-callback-return": "error",
        "array-bracket-newline": ["warn", {
          "multiline": true,
        }],
        "array-bracket-spacing": "warn",
        "array-element-newline": ["warn", "consistent"],
        "max-len": ["warn", 100],
        "linebreak-style": "warn",
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "block-spacing": "warn",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unnecessary-condition": ["error", {
          ignoreRhs: true
        }],
        "@typescript-eslint/no-unused-vars": ["warn", {
          argsIgnorePattern: "^_",
        }],
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-extra-parens": "warn",
        "@typescript-eslint/no-extra-semi": "error",
        "require-atomic-updates": "off",
        "no-lone-blocks": "warn",
        "no-lonely-if": "warn",
        "quotes": "off",
        "brace-style": "off",
        "indent": "off",
        "prefer-const": "off",
        "no-multiple-empty-lines": ["warn", {
          "max": 1,
        }],
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "no-multi-spaces": "warn",
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
        "object-curly-newline": ["warn", {
          "multiline": true,
          "consistent": true,
        }],
        "object-curly-spacing": ["warn", "always"],
        "object-property-newline": ["warn", {
          "allowAllPropertiesOnSameLine": true
        }],
        "space-unary-ops": ["warn", {
          "words": true,
          "nonwords": false,
        }],
        "switch-colon-spacing": "warn",
        "space-in-parens": "warn",
        "spaced-comment": ["warn", "always", {
          "block": {
            "balanced": true
          },
        }],
        "space-infix-ops": "warn",
        "@typescript-eslint/space-before-function-paren": ["warn", {
          "named": "never",
          "anonymous": "never",
          "asyncArrow": "always",
        }],
        "space-before-blocks": "warn",
        "padded-blocks": ["warn", "never"],
        "semi-spacing": "warn",
        "no-whitespace-before-property": "warn",
        "no-trailing-spaces": "warn",
        "no-nested-ternary": "warn",
        "import/first": "warn",
        "import/extensions": ["warn", "never"],
        "import/newline-after-import": "warn",
        "@typescript-eslint/quotes": "warn",
        "@typescript-eslint/brace-style": "warn",
        "@typescript-eslint/indent": ["warn", 2, {
          "ignoredNodes": ['TSTypeParameterInstantiation'],
          "SwitchCase": 1,
        }],
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/comma-spacing": "warn",
        "comma-style": "warn",
        "function-paren-newline": ["warn", "multiline-arguments"],
        "@typescript-eslint/func-call-spacing": "warn",
        "@typescript-eslint/no-dupe-class-members": "warn",
        "operator-assignment": "warn",
        "operator-linebreak": ["warn", "after"],
        "generator-star-spacing": "warn",
        "arrow-spacing": "warn",
        "arrow-parens": ["warn", "as-needed"],
        "prefer-spread": "warn",
        "prefer-rest-params": "warn",
        "rest-spread-spacing": "warn",
        "template-curly-spacing": "warn",
        "yield-star-spacing": "warn",
        "function-call-argument-newline": ["warn", "consistent"],
        "multiline-ternary": ["warn", "always-multiline"],
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
          "import/named": "off",
          "import/default": "off",
          "consistent-return": "off",
          "@typescript-eslint/ban-ts-ignore": "off",
          "@typescript-eslint/no-empty-interface": "off",
          "@typescript-eslint/no-inferrable-types": ["warn", {
            "ignoreParameters": true,
          }],
          "@typescript-eslint/typedef": ["warn", {
            arrayDestructuring: false,
            arrowParameter: true,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: true,
          }],
          "@typescript-eslint/no-unnecessary-type-arguments": "warn",
          "@typescript-eslint/explicit-member-accessibility": "warn",
          "@typescript-eslint/explicit-function-return-type": ["warn", {
            allowExpressions: false,
            allowTypedFunctionExpressions: false,
            allowHigherOrderFunctions: false,
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
