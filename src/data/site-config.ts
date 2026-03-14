export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Martin Dufresne',
  subtitle: 'Décoder le numérique, programmer le vivant : explorer la convergence des systèmes.',
  description: 'Maître procrastinateur. Individu expert créatif. Chercheur de vision. Chasseur de rêves. Passionné de design. Meilleur développeur / concepteur.',
  image: {
    src: '/hero.webp',
    alt: 'Site Web - Martin Dufresne'
  },
  headerNavLinks: [
    {
      text: 'Accueil',
      href: '/'
    },
    {
      text: 'À propos',
      href: '/apropos'
    },
    // {
    //   text: 'Projets',
    //   href: '/projects'
    // },
    {
      text: 'Articles',
      href: '/blog'
    }
  ],
  footerNavLinks: [
    {
      text: 'À propos',
      href: '/apropos'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Mentions légales',
      href: '/mentions-legal'
    }
  ],
  socialLinks: [
    {
      text: 'Bluesky',
      href: 'https://bsky.app/profile/mdufresne.bsky.social'
    },
    {
      text: 'X/Twitter',
      href: 'https://x.com/dufresne_martin'
    },
    {
      text: 'Threads',
      href: 'https://www.threads.com/@martin_dufresne'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/martin-dufresne-37aba229b/'
    },
    {
      text: 'rss',
      href: '/rss.xml'
    }
  ],
  hero: {
    title: '',
    text: "Enseignant spécialisé en **IA, Quantique et Cybersécurité**, je consacre mes travaux de recherche à la **morphogénèse synthétique**. Ce site est un espace dédié au partage de mes projets de R&D, de mes publications et de mes réflexions sur l’évolution des systèmes **numériques** et **biologiques**. Explorez ici la convergence entre la transmission des savoirs technologiques et l'étude de la genèse des formes.",
    image: {
      src: '/banner.jpg',
      alt: 'Enseignant spécialisé en IA, Quantique et Cybersécurité, je consacre mes travaux de recherche à la morphogénèse synthétique.'
    },
    actions: [
      {
        text: 'Collaborer',
        href: '/contact'
      }
    ]
  },
  // subscribe: {
  //   title: 'Abonnez-vous à la newsletter Out of the box',
  //   text: 'Une fois par semaine directement dans votre boîte mail.',
  //   formUrl: ''
  // },
  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
