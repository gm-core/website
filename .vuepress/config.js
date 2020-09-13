module.exports = {
  title: 'GM Core',
  description: 'Technical documentation and guides for GM Core, a suite of tools for GameMaker: Studio 2',
  dest: "public",
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/gm-core',
    docsRepo: 'gm-core/website',
    editLinks: true,
    sidebar: [
      {
        title: 'Home',
        collapsable: false,
        path: '/',
        children: [
          '/browse.html',
          '/installing.html',
          '/foundation.html',
          '/gamemaker-2.3.html',
        ],
      },
      {
        title: 'gdash',
        collapsable: false,
        path: '/gdash/',
        children: [
          '/gdash/api.html',
        ],
      },
      {
        title: 'Patchwire',
        collapsable: false,
        path: '/patchwire/',
        children: [
          '/patchwire/api.html',
        ],
      },
      {
        title: 'Event Horizon',
        collapsable: false,
        path: '/event-horizon/',
        children: [
          '/event-horizon/api.html',
        ],
      },
      {
        title: 'Delta',
        collapsable: false,
        path: '/delta/',
        children: [
          '/delta/',
        ],
      },
      {
        title: 'Particore',
        collapsable: false,
        path: '/particore/',
        children: [
          '/particore/api.html',
        ],
      },
      {
        title: 'GMTest',
        collapsable: false,
        path: '/gmtest/',
        children: [
          '/gmtest/api.html',
          '/gmtest/examples.html',
        ],
      },
    ],
  },
};
