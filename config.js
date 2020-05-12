module.exports = {
  siteTitle: 'Essie Kim / Developer', // <title>
  manifestName: 'Essie Kim / Developer',
  manifestShortName: 'Essie Kim', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/essiekim/`, // This path is subpath of your hosting https://domain/portfolio
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
      pic: 'pic1',
      style: 'wrapper alt style1',
      header: 'development',
      subHeader: 'Featured: SokoCity',
      paragraph:
        'Some of the projects that I have worked on. This includes a full stack e-commerce website, a mobile application using Flutter, and a procedurally generated puzzle-rpg game.',
      button: 'see projects',
      link: 'projects'
    },
    {
      id: 'three',
      pic: 'pic2',
      style: 'wrapper alt style2',
      header: 'design',
      subHeader: 'Featured: BARK',
      paragraph: 'Some of my design work over the years as well as hobby photography.',
      button: 'see work',
      link: 'design'
    },
    {
      id: 'four',
      pic: 'pic3',
      style: 'wrapper alt style3',
      header: 'doodles and thoughts',
      subHeader: 'Featured: React Props',
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
      style: 'brands',
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/estheryskim',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:esther.ys.kim@gmail.com',
    },
  ],
}
