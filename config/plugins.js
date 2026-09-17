module.exports = () => ({
  graphql: {
    config: {
      v4CompatibilityMode: true,
    },
  },
  seo: {
      enabled: true,
    },
  'publisher': {
    enabled: true,
  },
  'drag-drop-content-types': {
    enabled: true
  },
  'duplicate-entry': {
    enabled: true,
    resolve: './src/plugins/duplicate-entry',
  }
});
