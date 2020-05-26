module.exports = {
  title: 'GM Core',
  description: 'Technical documentation and guides for GM Core, a suite of tools for GameMaker: Studio 2',
  dest: "public",
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'gm-core/website',
    editLinks: true,
    sidebar: [
      '/',
      {
        title: 'gdash',
        collapsable: false,
        sidebarDepth: 2,
        path: '/gdash/',
        children: [
          '/gdash/api.html',
        ],
      },
      {
        title: 'Patchwire',
        collapsable: false,
        sidebarDepth: 2,
        path: '/patchwire/',
        children: [
          '/patchwire/api.html',
        ],
      },
      {
        title: 'Event Horizon',
        collapsable: false,
        sidebarDepth: 2,
        path: '/event-horizon/',
        children: [
          '/event-horizon/api.html',
        ],
      },
      {
        title: 'Delta',
        collapsable: false,
        sidebarDepth: 2,
        path: '/delta/',
        children: [
          '/delta/',
        ],
      },
      {
        title: 'Particore',
        collapsable: false,
        sidebarDepth: 2,
        path: '/particore/',
        children: [
          '/particore/api.html',
        ],
      },
      {
        title: 'Gamatas',
        collapsable: false,
        sidebarDepth: 2,
        path: '/gamatas/',
        children: [
          '/gamatas/api.html',
        ],
      },
    ],
  },
};
