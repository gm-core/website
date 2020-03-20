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
        sidebarDepth: 3,
        children: [
          '/gdash/',
          '/gdash/api.html',
        ],
      },
    ],
  },
};
