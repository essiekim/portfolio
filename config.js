module.exports = {
  siteTitle: 'Essie Kim / Developer', // <title>
  manifestName: 'Spectral',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'essie kim.',
  subHeading: 'full stack developer / graphic designer',
  // project info
  projectInfo: [
    {
      name: 'insert here',
      description: 'here',
    },
  ],

  // section info
  sectionInfo: [
    {
      id: 'two',
      style: 'wrapper alt style1',
      header: 'development',
      subHeader: 'Featured: SokoCity',
      pic: 'pic1',
      paragraph:
        'Some of the projects that I have worked on. This includes a full stack e-commerce website, a mobile application using Flutter, and a procedurally generated puzzle-rpg game.',
      button: 'see projects',
      link: 'projects'
    },
    {
      id: 'three',
      style: 'wrapper alt style2',
      header: 'design',
      subHeader: 'Featured: BARK',
      pic: 'pic2',
      paragraph: 'Some of my design work over the years as well as hobby photography.',
      button: 'see work',
      link: 'design'
    },
    {
      id: 'four',
      style: 'wrapper alt style3',
      header: 'doodles and thoughts',
      subHeader: 'Featured: React Props',
      pic: 'pic3',
      paragraph:
        'Some illustrated diagrams that I drew during my time as a teaching fellow to help create a visual representation of concepts.',
      button: 'see more',
      link: 'doodles'
    },
  ],
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/essiekim',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:esther.ys.kim@gmail.com',
    },
  ],
}
