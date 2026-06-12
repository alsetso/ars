export const COMPANY_INFO = {
  name: 'Advanced Roofing & Siding Inc.',
  phone: '763-427-3093',
  email: 'stacylehn@gmail.com',
  location: 'Anoka, MN',
  license: 'BC630441',
  tagline: 'GAF Master Elite Contractor',
} as const

export const SERVICES = [
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'GAF Master Elite certified roof systems with lifetime warranties — the highest standard available to Minnesota homeowners.',
    icon: 'Home',
    href: '/services/roofing',
  },
  {
    id: 'siding',
    title: 'Siding',
    description: 'Durable exterior siding systems built for Minnesota\'s climate — boost curb appeal, insulation, and long-term weather resistance.',
    icon: 'PaintBucket',
    href: '/services/siding',
  },
  {
    id: 'windows',
    title: 'Windows',
    description: 'Energy-efficient window replacements that lower heating costs, reduce drafts, and meet Minnesota Energy Code requirements.',
    icon: 'Square',
    href: '/services/windows',
  },
  {
    id: 'restoration',
    title: 'Storm Restoration',
    description: 'Hail and wind damage assessment with full insurance claim support. Most homeowners pay only their deductible.',
    icon: 'CloudRain',
    href: '/services/storm-restoration',
  },
  {
    id: 'gutters',
    title: 'Gutters',
    description: 'Seamless aluminum gutter systems with optional protection covers — no joints to fail, no foundation damage.',
    icon: 'Droplets',
    href: '/services/gutters',
  },
  {
    id: 'soffit-fascia',
    title: 'Soffit & Fascia',
    description: 'The framework your roofline and GAF warranty depend on. Aluminum wraps that never rot, never need paint.',
    icon: 'Frame',
    href: '/services/soffit-fascia',
  },
  {
    id: 'exterior-doors',
    title: 'Exterior Doors',
    description: 'Exterior door replacement built for comfort, security, and energy savings — durable, low-maintenance, and built to handle Minnesota winters.',
    icon: 'DoorOpen',
    href: '/services/exterior-doors',
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
      { href: '/services/free-estimate', label: 'Free Estimate' },
      { href: '/services/roofing', label: 'Roofing' },
      { href: '/services/siding', label: 'Siding' },
      { href: '/services/windows', label: 'Windows' },
      { href: '/services/storm-restoration', label: 'Storm Restoration' },
      { href: '/services/gutters', label: 'Gutters' },
      { href: '/services/soffit-fascia', label: 'Soffit & Fascia' },
      { href: '/services/exterior-doors', label: 'Exterior Doors' },
    ],
  },
  { href: '/service-areas', label: 'Service Areas' },
  {
    href: '/resources',
    label: 'Resources',
    submenu: [
      { href: '/who-we-serve', label: 'Who We Serve' },
      { href: '/resources/insurance-claims', label: 'Insurance Claims' },
      { href: '/resources/gaf-master-elite-contractor', label: 'GAF Master Elite®' },
      { href: '/resources/24-7-support', label: '24/7 Support' },
      { href: '/resources/reviews', label: 'Reviews' },
      { href: '/resources/videos', label: 'Videos' },
      { href: '/resources/project-gallery', label: 'Project Gallery' },
      { href: '/resources/days-onsite', label: 'Days on Site' },
      { href: '/resources/warranties', label: 'Warranties' },
    ],
  },
  { href: `tel:${COMPANY_INFO.phone}`, label: COMPANY_INFO.phone },
] as const

