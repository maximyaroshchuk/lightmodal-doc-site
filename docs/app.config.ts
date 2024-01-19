export default defineAppConfig({
  docus: {
    title: 'Light Modal',
    description: 'Light Modal Vue 3 documentation site.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'rainoldweb',
      github: 'maximyaroshchuk/light-modal-vue3',
      npm: {
        label: 'NPM',
        icon: 'simple-icons:npm',
        href: 'https://www.npmjs.com/package/light-modal-vue3'
      }
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
