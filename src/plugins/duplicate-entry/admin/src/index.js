import DuplicateEntryButton from './components/DuplicateEntryButton';

const pluginId = 'duplicate-entry';

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      name: 'Duplicate Entry',
    });
  },

  bootstrap(app) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: pluginId,
      Component: DuplicateEntryButton,
    });
  },
};
