// Everything personal on the site comes from here.
// TODO(Kc): replace the placeholder text below with your own.

export const profile = {
  name: 'Kc',
  github: 'https://github.com/clement10601',
  email: '', // e.g. 'you@example.com'; leave empty to hide
  links: [
    { label: 'GitHub', href: 'https://github.com/clement10601' },
    { label: 'FEZone', href: 'https://fezone.tw' },
  ],
  zh: {
    tagline: '軟體開發者',
    about: [
      '這裡放一段自我介紹：你是誰、在做什麼、對什麼有興趣。',
      '可以再加一段經歷或專長。',
    ],
  },
  en: {
    tagline: 'Software developer',
    about: [
      'A short introduction goes here: who you are, what you do and what you care about.',
      'Optionally a second paragraph about experience or skills.',
    ],
  },
};

export type Project = {
  name: string;
  href?: string;
  zh: string;
  en: string;
};

export const projects: Project[] = [
  {
    name: 'FEZone',
    href: 'https://fezone.tw',
    zh: '軟體開發、遊戲與財經部落格的品牌網站。',
    en: 'Brand site for software development, games and a finance blog.',
  },
];
