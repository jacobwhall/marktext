module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  globals: {
    __static: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'html',
    'vue'
  ],
  rules: {
    // Two spaces but disallow semicolons
    indent: ['error', 2, { 'SwitchCase': 1, 'ignoreComments': true }],
    semi: [2, 'never'],
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-new': 'error',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    // allow console
    'no-console': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'require-atomic-updates': 'off',
    // TODO: fix these errors someday
    'prefer-const': 'off',
    'no-mixed-operators': 'off',
    'no-prototype-builtins': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['common', './src/common'],
          // Normally only valid for renderer/
          ['@', './src/renderer'],
          ['muya', './src/muya']
        ],
        extensions: ['.js', '.vue', '.json', '.css', '.node']
      }
    }
  },
  ignorePatterns: [
    'node_modules',
    'src/muya/dist/**/*',
    'src/muya/webpack.config.js'
  ]
}
