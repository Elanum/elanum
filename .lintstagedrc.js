module.exports = {
  '**/*.ts?(x)': () => 'yarn type-check',
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint:husky ${filenames.join(' ')}`,
}