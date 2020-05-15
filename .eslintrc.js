module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__:'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier':['error',{
      'endOfLine':'auto'
    }],
    'react/jsx-filename-extension':[
      'warn',
      {
        extensions:['.jsx','.js']
      }
    ],
    'import/prettier-default-export':'off',
    'no-param-reassign':'off',
    'no-console': ["error", {allow:["tron"]}],
    'react-hooks/rules-of-hooks':'error',
    'react-hooks/exhaustive-deps':'warn',
  },
  settings:{
    "import/resolver":{
      "babel-plugin-root-import":{
        rootPathSuffix:'src'
      }
    }
  }
};
