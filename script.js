/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',

  banner: `Please <a href="https://donate.com/link">
  donate</a> <ExternalLinkIcon /> to support this project!`
  ,
  logo: '<span><img src="/123.jpg" /> 123</span>',
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
  versions: [

  ],
  layout: 'narrow', //wide narrow left
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    },
  ]
})
