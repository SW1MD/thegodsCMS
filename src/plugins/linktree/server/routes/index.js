module.exports = [
  {
    method: 'GET',
    path: '/linktree',
    handler: 'linktree.index',
    config: {
      policies: [],
      auth: false,
    },
  },
];