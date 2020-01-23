module.exports = {
  title: '文档中心',
  // description: 'Talk is cheap, Show me the code.'
  description: 'There should be one-- and preferably only one --obvious way to do it.',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
  	logo: '/logo.png',
  	nav: [
      { text: 'CRM', link: '/crm/' },
      { text: 'ERP', link: '/erp/' },
    ],
    sidebar: {
      '/crm/': [
      	'',
      	'user'
      ]
    },
    sidebarDepth: 3,
  },
  smoothScroll: true,
}