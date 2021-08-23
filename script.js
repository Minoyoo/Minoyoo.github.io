/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  logo: {
    template: `
    <div>
      <ImageZoom 
      src="https://i.loli.net/2018/09/24/5ba8e878850e9.png" 
      :border="true" 
      width="30"
      />
      <span>MinoYoo</span>
    </div>
    `
  },
  banner: {
    template: `
    <div class="note">
      Please <a href="https://donate.com/link">
      donate</a> <ExternalLinkIcon /> to support this project!
    </div>
    `
  },
  footer: {
    template: `
    <ImageZoom 
    src="https://i.loli.net/2018/09/24/5ba8e878850e9.png" 
    :border="true" 
    width="300"
  />
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
