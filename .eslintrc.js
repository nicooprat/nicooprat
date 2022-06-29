module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'comma-dangle': 0,
  },
}
