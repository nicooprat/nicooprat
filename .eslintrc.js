module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'comma-dangle': 0,
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
}
