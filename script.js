/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  logo: {
    template: `
    <div>
      <ImageZoom 
      src="https://github.com/Minoyoo/Minoyoo.github.io/blob/master/logo.jpg?raw=true" 
      :border="false" 
      width="37"
      />
      <span 
      style="font-weight:bold;font-size:30px"
      >MinoYoo</span>
    </div>
    `
  },
  banner: {
    template: `
    <div class="note">
      💗 Please <a href="https://donate.com/link">
      donate</a> <ExternalLinkIcon /> to support this project!
    </div>
    `
  },
  footer: {
    template: `
    <Note>

    This is a warning for something very important.

    </Note>
    `
  },
   nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  theme: 'default', //default dark
  detectSystemDarkTheme: true,
  darkThemeToggler: true, 
  layout: 'narrow', //wide narrow left
  sidebar: [
    {
      title: '目录',
      children: [
        {
          title: 'BlockChain',
          link: '/blockchain/'
        },
        {
          title: 'Linux',
          link: '/linux/'
        },
        {
          title: 'Python',
          link: '/python/'
        },
        {
          title: 'Docker',
          link: '/docker/'
        },
        {
          title: '数据分析',
          link: '/data_analysis/'
        },
        {
          title: '产品经理',
          link: '/pm/'
        },
      ]
    },
  ],
  overrides: {
    '/': {
      language: 'Home'
    },
    '/blockchain/': {
      language: 'BlockChain',
      sidebar: [
        {
          title: 'BlockChain',
          children: [
            {
              title: '工具',
              link: '/blockchain/tools'
            },
            {
              title: '自定义',
              link: '/zh/guide/customization'
            },
            {
              title: 'Markdown 功能',
              link: '/zh/guide/markdown-features'
            },
            {
              title: '在 Markdown 中使用 Vue',
              link: '/zh/guide/use-vue-in-markdown'
            },
            {
              title: '国际化',
              link: '/zh/guide/internationalization'
            },
          ]
        }
      ]
    },
    '/linux/': {
      language: 'Linux',
      sidebar: [
        {
          title: '指南',
          children: [
            {
              title: '介绍',
              link: '/zh'
            },
            {
              title: '自定义',
              link: '/zh/guide/customization'
            },
            {
              title: 'Markdown 功能',
              link: '/zh/guide/markdown-features'
            },
            {
              title: '在 Markdown 中使用 Vue',
              link: '/zh/guide/use-vue-in-markdown'
            },
            {
              title: '国际化',
              link: '/zh/guide/internationalization'
            },
          ]
        }
      ]
    },
    '/python/': {
      language: 'Python',
    },
    '/docker/': {
      language: 'Docker',
    },
    '/data_analysis/': {
      language: '数据分析',
    },
    '/pm/': {
      language: '产品经理',
    },
  }
  
})
