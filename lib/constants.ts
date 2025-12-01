export const COMPANY_INFO = {
  name: 'Advanced Roofing & Siding Inc.',
  phone: '763-427-3093',
  email: 'info@advancedroofing.com',
  location: 'Anoka, MN',
  license: 'BC630441',
  tagline: 'GAF Master Elite Contractor',
} as const

export const SERVICES = [
  {
    id: 'roofing',
    title: 'Premium Roofing',
    description: 'GAF Master Elite certified installations with industry-leading warranties',
    icon: 'Home',
  },
  {
    id: 'siding',
    title: 'Siding Solutions',
    description: 'Transform your exterior with durable, weather-resistant siding systems',
    icon: 'PaintBucket',
  },
  {
    id: 'windows',
    title: 'Window Installation',
    description: 'Energy-efficient windows that reduce costs and enhance comfort',
    icon: 'Square',
  },
  {
    id: 'restoration',
    title: 'Storm Restoration',
    description: 'Expert damage assessment and seamless insurance claim support',
    icon: 'CloudRain',
  },
  {
    id: 'winterization',
    title: 'Winterization',
    description: 'Custom winterization packages to protect your Minnesota home and reduce heating costs',
    icon: 'Snowflake',
  },
] as const

export const FEATURES = [
  {
    id: 'gaf',
    title: 'GAF Master Elite',
    description: 'One of only 2% of contractors nationwide with this prestigious certification',
    icon: 'Shield',
  },
  {
    id: 'experience',
    title: '30+ Years Experience',
    description: 'Three decades of excellence delivering superior results',
    icon: 'Award',
  },
  {
    id: 'bbb',
    title: 'A+ BBB Rating',
    description: 'Accredited since 2007 with an impeccable reputation',
    icon: 'BadgeCheck',
  },
  {
    id: 'family',
    title: 'Family Owned',
    description: 'Local, trusted, and committed to our community',
    icon: 'Users',
  },
] as const

export const MINNESOTA_CITIES = [
  'Albertville', 'Andover', 'Anoka', 'Apple Valley', 'Arden Hills',
  'Becker', 'Bethel', 'Big Lake', 'Blaine', 'Bloomington',
  'Brainerd', 'Brooklyn Center', 'Brooklyn Park', 'Buffalo', 'Burnsville',
  'Cambridge', 'Champlin', 'Chanhassen', 'Chaska', 'Circle Pines',
  'Cloquet', 'Coon Rapids', 'Crystal', 'Dayton', 'Eagan',
  'Eden Prairie', 'Edina', 'Elk River', 'Forest Lake', 'Fridley',
  'Golden Valley', 'Ham Lake', 'Hopkins', 'Lakeville', 'Maple Grove',
  'Minneapolis', 'Minnetonka', 'Plymouth', 'Ramsey', 'Rochester',
  'Rogers', 'St. Cloud', 'St. Paul', 'Woodbury',
] as const

export const WISCONSIN_CITIES = [
  'Hudson', 'River Falls', 'Somerset', 'New Richmond', 'Prescott', 'St Croix Falls',
] as const

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    submenu: [
      { href: '/services/roofing', label: 'Premium Roofing' },
      { href: '/services/siding', label: 'Siding Solutions' },
      { href: '/services/windows', label: 'Window Installation' },
      { href: '/services/storm-restoration', label: 'Storm Restoration' },
      { href: '/services/winterization', label: 'Winterization' },
    ],
  },
  { href: '/service-areas', label: 'Service Areas' },
  {
    href: '#',
    label: 'Resources',
    submenu: [
      { href: '/insurance-claims', label: 'Insurance Claims' },
      { href: '/cities-program', label: 'Cities Program' },
      { href: '/gaf-master-elite-contractor', label: 'GAF Master Elite®' },
      { href: '/24-7-support', label: '24/7 Support' },
      { href: '/reviews', label: 'Reviews' },
    ],
  },
  { href: '/contact', label: 'Contact' },
] as const

