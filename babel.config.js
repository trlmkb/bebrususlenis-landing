module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/preset-react', // Remove for non-react projects
      '@babel/preset-typescript',
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
