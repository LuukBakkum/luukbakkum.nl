// NOTES:
// Asset mappings are seperately stored in the assetMaps folder to reduce initial load time.
// Available languages are stored in the i18n folder.
// Be aware that when you're hosting through GitHub Pages, the env variables should be stored as Repository secrets.
// Some files cannot use the config file, and thus should be changed manually. Some examples are:
// - /.github/workflows/main.yml
// - /public/CNAME
// - /public/robots.txt
// - /public/site.webmanifest
// - /public/sitemap.xml
// - /index.html
const config = {
  app: {
    baseUrl: 'https://luukbakkum.nl',
    githubUrl: 'https://github.com/LuukBakkum/luukbakkum.nl',
    domain: 'luukbakkum.nl',
  },
  owner: {
    firstName: 'Luuk',
    lastName: 'Bakkum',
    fullName: 'Luuk Bakkum',
    additionalName: 'LuukBk',
    locationUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=4.688415527343751%2C52.403361457458246%2C4.915008544921876%2C52.49730912555673&amp;layer=mapnik', // URL from https://www.openstreetmap.org, you can select a location, and export it as a link
    gender: 'Male', // According to https://schema.org/GenderType
    knowsLanguage: ['English', 'Dutch'], // According to https://schema.org/Language
    nationality: 'Dutch', // According to https://schema.org/Country
    addressLocality: 'Zaandam', // According to the 'addressLocality' field of https://schema.org/PostalAddress
    addressCountry: 'NL', // According to the 'addressCountry' field of https://schema.org/PostalAddress
    knowsAbout: [
      'C#',
      'Java',
      'TypeScript',
      'React',
      'OOP',
      'AI',
      'Deep Learning',
      'Machine Learning',
      'Cloud Computing',
      'GitHub',
      'Docker',
      'Python',
      'WordPress',
      'HTML',
      'CSS',
      'JavaScript',
      'Vue'
    ], // According to the 'knowsAbout' field of https://schema.org/Person
  },
  email: {
    address: 'hello@luukbakkum.nl',
    rateLimit: {
      maxRequests: 5,
      timeWindow: 86400000, // 24 hours
      throttle: 300000, // 5 minutes
    },
  },
  contactForm: {
    maxLengths: {
      name: 100,
      email: 100,
      message: 1000,
    },
  },
  externalLinks: {
    github: 'https://github.com/LuukBakkum',
    linkedin: 'https://www.linkedin.com/in/luuk-bakkum/',
    get email() {
      return `mailto:${config.email.address}`;
    },
    location: 'https://maps.app.goo.gl/MFsQ2wnkrmBY3X7Q8',
    npm: 'https://www.npmjs.com/~luuk-bakkum',
    stackOverflow: 'https://stackoverflow.com/users/27327493/luuk-bakkum',
  },
  ui: {
    scroll: {
      behaviour: 'instant' as ScrollBehavior, // 'auto' | 'instant' | 'smooth'
    },
    toasts: {
      defaultDuration: 5000,
      errorDuration: 10000,
      loadingDuration: 30000,
    },
  },
};

export default config;
