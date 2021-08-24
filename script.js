/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',

  highlight: ['typescript', 'bash', 'json', 'markdown'],
  
  editLinkBase: 'https://github.com/egoist/docute/tree/master/website/docs',
  editLinkText: 'Edit this page on GitHub',

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
      title: 'Home',
      link: '/'
    },
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
  ],
  overrides: {
    '/': {
      language: 'Home'
    },
    /**
     * 区块链相关
     * link: '/blockchain/'
     */
    '/blockchain/': {
      language: 'BlockChain', 
      sidebar: [
        {
          title: 'BlockChain',
          link: '/blockchain'
        },
        {
          title: '工具', //link: '/blockchain/tools/'
          children: [
            {
              title: 'metamask',
              link: '/blockchain/tools/1'
            },
            {
              title: 'tokenpocket',
              link: '/blockchain/tools/2'
            }
          ],
        },
        {
          title: '公链', //link: '/blockchain/chain/'
          children: [
            {
              title: '',
              link: ''
            }
          ]
        },
        {
          title: 'DApp', //link: '/blockchain/dapp/'
          children: [
            {
              title: '',
              link: ''
            }
          ]
        },
        {
          title: '项目观察区', //link: '/blockchain/survey/'
          children: [
            {
              title: '',
              link: ''
            }
          ]
        },
      ]
    },
    /**
     * Linux 相关
     * link: '/linux/'
     */
    '/linux/': {
      language: 'Linux',
    },
    /**
     * Python 相关
     * link: '/python/'
     */
    '/python/': {
      language: 'Python',
    },
    /**
     * Docker 相关
     * link: '/docker/'
     */
    '/docker/': {
      language: 'Docker',
    },
    /**
     * 数据分析 相关
     * link: '/data_analysis/'
     */
    '/data_analysis/': {
      language: '数据分析',
    },
    /**
     * 产品经理 相关
     * link: '/pm/'
     */
    '/pm/': {
      language: '产品经理',
    },
  
}
  
})
