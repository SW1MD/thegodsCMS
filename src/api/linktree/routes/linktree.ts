export default {
  routes: [
    {
      method: 'GET',
      path: '/linktree',
      handler: 'linktree.index',
      config: {
        auth: false,
      },
    },
  ],
};