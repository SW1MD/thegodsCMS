module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/linktree',
      handler: 'linktree.index',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};