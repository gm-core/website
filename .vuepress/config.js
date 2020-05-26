module.exports = {
  title: 'GM Core',
  description: 'Technical documentation and guides for GM Core, a suite of tools for GameMaker: Studio 2',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/gm-core' },
    ],
    sidebar: [
      '/',
      {
        title: 'gdash',
        collapsable: false,
        sidebarDepth: 2,
        path: '/gdash',
        children: [
          '/gdash/api.html',
        ],
      },
      {
        title: 'Patchwire',
        collapsable: false,
        sidebarDepth: 2,
        path: '/patchwire',
        children: [
          '/patchwire/api.html',
        ],
      },
      {
        title: 'Event Horizon',
        collapsable: false,
        sidebarDepth: 2,
        path: '/event-horizon',
        children: [
          '/event-horizon/api.html',
        ],
      },
    ],
  },
};
