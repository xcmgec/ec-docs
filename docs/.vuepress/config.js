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
      '/crm/': getCrmSidebar(),
      '/erp/': getErpSidebar()
    },
    sidebarDepth: 3,
    // repo: 'xcmgec/ec-docs',
    docsRepo: 'xcmgec/ec-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮我编辑此页',
    lastUpdated: '最近更新',
    smoothScroll: true,
  },
}

function getCrmSidebar() {
	return [
		{
			title: "系统指南",
			path: '/crm/',
			collapsable: false,
			children: [
				'user',
				'setting'
			]
		},
		{
			title: "业务操作",
			path: '/crm/business/',
			collapsable: false,
			children: [
				// 'contract',
				// 'production-order',
				// 'payment',
				// 'delivery-notes',
				{
					title: "客户管理",
					// collapsable: false,
					path: '/crm/customer/',
					children: [
						'customer1',
						'customer2',
					]
				},
				'mobile',
			]
		},
		{
			title: "数据维护",
			// path: '/crm/add/',
			collapsable: false,
			children: [
				'add-user',
				'add-product',
			]
		},
	]
}

function getErpSidebar() {
	return [
		{
			title: "付款申请",
			collapsable: false,
			children: [
			]
		},
		{
			title: "费用报销",
			collapsable: false,
			children: [
			]
		},
	]
}

