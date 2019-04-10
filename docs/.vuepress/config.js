module.exports = {
  base: '/Docs/',
  title: 'Glarce',
  description: 'Web AR; simplified',
  themeConfig:
  {
    serviceWorker:
    {
      updatePopup: true
    },
    sidebar: [
      '/guide/',
      '/API/',
      '/API/types.html'
    ],
    nav: [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Guide',
      link: '/guide/'
    },
    {
      text: 'API',
      link: '/API/'
    }],

    repo: 'glarce/Glarce',
    repoLabel: 'Contribute',

    docsRepo: 'glarce/Docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}

function genSidebarConfig(title)
{
  return [
  {
    title,
    collapsable: false
  }]
}