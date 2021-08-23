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
  ],
  
})
