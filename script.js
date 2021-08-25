/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  highlight: ['typescript', 'bash', 'json', 'markdown'], 
  editLinkBase: 'https://github.com/Minoyoo/Minoyoo.github.io/',
  editLinkText: 'Edit this page on GitHub',
  logo: {
    template: `
    <div>
      <ImageZoom 
      src="./logo.jpg" 
      :border="false" 
      width="37"
      />
      <span 
      style="font-weight:bold;font-size:30px"
      >MinoYoo</span>
    </div>
    `
  },
  // banner: {
  //   template: `
  //   <Note :label="false">

  //   This is a warning for something very important.

  //   </Note>
  //   `
  // },
  
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
    {
      title: '书籍',
      link: '/book/'
    }
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
    /**
     * 阅读 相关
     * link: '/book/'
     */
    'book': {
      language: '书籍',
    },
  },

  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} 
  Copyright by <a href="https://github.com/Minoyoo" target="_blank">Mino</a>. 
  Powered by <a href="https://egoist.sh" target="_blank">EGOIST</a>. 
  Released under MIT license.
  </div>
  `,
  
})
