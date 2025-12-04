import { SERVICES } from './constants'

interface CityContent {
  intro: string
  weatherContent: string
  servicesContent: string
  localBenefits: string
  callToAction: string
  keywords: string[]
}

// Weather patterns by state
const WEATHER_PATTERNS = {
  MN: {
    challenges: [
      'harsh Minnesota winters with heavy snowfall',
      'ice dams forming on roof edges',
      'freeze-thaw cycles that damage roofing materials',
      'spring hailstorms that can cause significant damage',
      'extreme temperature fluctuations',
      'heavy snow loads that stress roof structures',
    ],
    seasons: {
      winter: 'Minnesota winters bring heavy snowfall and ice accumulation',
      spring: 'Spring hailstorms are common across Minnesota',
      summer: 'Summer brings intense sun and occasional severe storms',
      fall: 'Fall preparation is crucial before harsh winter weather arrives',
    },
  },
  WI: {
    challenges: [
      'severe winter weather with heavy snow and ice',
      'spring and summer thunderstorms with hail',
      'freeze-thaw cycles that compromise roofing systems',
      'high winds that can damage shingles and siding',
      'moisture issues from heavy precipitation',
      'extreme temperature variations throughout the year',
    ],
    seasons: {
      winter: 'Wisconsin winters feature heavy snow and ice buildup',
      spring: 'Spring brings thunderstorms and potential hail damage',
      summer: 'Summer storms can bring damaging winds and hail',
      fall: 'Fall is the ideal time to prepare for winter weather',
    },
  },
}

// Service-specific content templates
const SERVICE_CONTENT = {
  roofing: {
    intro: 'roofing systems',
    benefits: [
      'protect your home from harsh weather conditions',
      'improve energy efficiency and reduce heating costs',
      'increase your property value significantly',
      'provide peace of mind with industry-leading warranties',
    ],
    keywords: ['roofing', 'roof replacement', 'roof repair', 'roof installation', 'GAF Master Elite'],
  },
  siding: {
    intro: 'siding solutions',
    benefits: [
      'enhance your home\'s curb appeal and value',
      'provide superior weather resistance and insulation',
      'reduce maintenance requirements significantly',
      'offer long-lasting protection against the elements',
    ],
    keywords: ['siding', 'siding installation', 'siding replacement', 'exterior siding', 'vinyl siding'],
  },
  windows: {
    intro: 'energy-efficient windows',
    benefits: [
      'dramatically reduce heating and cooling costs',
      'improve home comfort year-round',
      'enhance your home\'s aesthetic appeal',
      'increase property value and energy efficiency ratings',
    ],
    keywords: ['window replacement', 'energy efficient windows', 'window installation', 'windows'],
  },
  restoration: {
    intro: 'storm restoration services',
    benefits: [
      'quick response to storm damage emergencies',
      'expert insurance claim assistance',
      'complete restoration to pre-storm condition',
      'prevent further damage with temporary protection',
    ],
    keywords: ['storm damage', 'hail damage', 'storm restoration', 'insurance claims', 'roof repair'],
  },
}

// Generate city-specific content
export function generateCityContent(
  cityName: string,
  state: string,
  stateFull: string
): CityContent {
  const stateAbbr = state.toUpperCase()
  const weather = WEATHER_PATTERNS[stateAbbr as keyof typeof WEATHER_PATTERNS]
  const challenges = weather.challenges
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]

  // Generate intro paragraph
  const intro = `${cityName}, ${stateFull} homeowners trust Advanced Roofing & Siding Inc. for all their exterior renovation needs. As a GAF Master Elite contractor serving the ${cityName} area, we bring over 30 years of experience and industry-leading expertise to every project. Whether you need a complete roof replacement, new siding installation, energy-efficient windows, or storm damage restoration, our team of certified professionals is committed to delivering exceptional results that protect your investment and enhance your home's value.`

  // Generate weather-specific content
  const weatherContent = `Living in ${cityName}, ${stateAbbr} means dealing with ${challenges[0]}, ${challenges[1]}, and ${challenges[2]}. These ${stateFull} weather conditions can take a significant toll on your home's exterior, making it essential to work with a contractor who understands local climate challenges. ${weather.seasons.winter}, which can lead to ice dams, roof leaks, and structural damage if not properly addressed. ${weather.seasons.spring}, requiring immediate attention to prevent water infiltration and further deterioration. Our team specializes in ${cityName} roofing and siding solutions designed specifically to withstand these harsh conditions, using premium materials and proven installation techniques that have protected ${cityName} homes for decades.`

  // Generate services content
  const servicesContent = `Advanced Roofing & Siding Inc. offers comprehensive exterior services throughout ${cityName}, ${stateAbbr}. Our ${SERVICE_CONTENT.roofing.intro} feature GAF Master Elite certified installations with industry-leading warranties that protect your investment for decades. We use only premium materials that are specifically rated for ${stateFull}'s climate, ensuring your roof can handle heavy snow loads, ice accumulation, and temperature extremes. Our ${SERVICE_CONTENT.siding.intro} transform your home's exterior while providing superior weather resistance and energy efficiency. We offer a wide selection of materials including vinyl, fiber cement, and wood siding, each chosen for its durability and performance in ${stateFull} weather conditions. Our ${SERVICE_CONTENT.windows.intro} help ${cityName} homeowners reduce energy costs while improving comfort year-round. Professional window installation is crucial in ${stateFull}'s climate, where proper sealing and insulation can make a significant difference in heating and cooling expenses. Additionally, our ${SERVICE_CONTENT.restoration.intro} provide ${cityName} residents with expert damage assessment and seamless insurance claim support when severe weather strikes.`

  // Generate local benefits
  const localBenefits = `Choosing Advanced Roofing & Siding Inc. for your ${cityName} home means partnering with a contractor who truly understands the unique needs of ${stateFull} homeowners. Our GAF Master Elite certification means we're among the top 3% of roofing contractors nationwide, giving you access to the highest quality materials and comprehensive warranties. We've maintained an A+ rating with the Better Business Bureau since 2007, demonstrating our commitment to excellence and customer satisfaction in the ${cityName} area. As a family-owned business, we're deeply committed to our community and take pride in every project we complete. Our team is fully licensed and insured, and we stand behind our work with industry-leading warranties. When you choose us for your ${cityName} roofing, siding, or window needs, you're choosing a contractor with the expertise, credentials, and local knowledge to deliver results that exceed your expectations.`

  // Generate call to action
  const callToAction = `Ready to protect and enhance your ${cityName} home? Contact Advanced Roofing & Siding Inc. today for your free estimate. Our experienced team is ready to discuss your roofing, siding, window, or storm restoration needs and provide you with a detailed, no-obligation quote. We serve homeowners throughout ${cityName} and the surrounding ${stateFull} communities, bringing GAF Master Elite quality and 30+ years of experience to every project. Don't wait until weather damage becomes a costly emergency—invest in your home's protection today with Advanced Roofing & Siding Inc.`

  // Generate keywords array
  const keywords = [
    `roofing ${cityName}`,
    `siding ${cityName}`,
    `${cityName} roofing contractor`,
    `${cityName} ${stateAbbr} roofing`,
    `roof replacement ${cityName}`,
    `siding installation ${cityName}`,
    `window replacement ${cityName}`,
    `storm damage ${cityName}`,
    `GAF Master Elite ${cityName}`,
    `exterior services ${cityName}`,
    `${cityName} home improvement`,
    `licensed roofer ${cityName}`,
    `${cityName} roofing company`,
    `siding contractor ${cityName}`,
    `roof repair ${cityName}`,
  ]

  return {
    intro,
    weatherContent,
    servicesContent,
    localBenefits,
    callToAction,
    keywords,
  }
}

// Generate service-specific content for a city
export function generateServiceCityContent(
  serviceId: string,
  cityName: string,
  state: string,
  stateFull: string
): string {
  const stateAbbr = state.toUpperCase()
  const service = SERVICE_CONTENT[serviceId as keyof typeof SERVICE_CONTENT]
  
  if (!service) {
    return ''
  }

  const weather = WEATHER_PATTERNS[stateAbbr as keyof typeof WEATHER_PATTERNS]
  const challenges = weather.challenges

  return `${cityName}, ${stateFull} homeowners choose Advanced Roofing & Siding Inc. for professional ${service.intro} that stand up to local weather conditions. As a GAF Master Elite contractor serving ${cityName}, we understand that ${challenges[0]} and ${challenges[1]} require specialized expertise and premium materials. Our ${cityName} ${service.keywords[0]} services ${service.benefits[0]}, ${service.benefits[1]}, and ${service.benefits[2]}. We've been serving ${cityName} homeowners for over 30 years, building a reputation for quality craftsmanship, exceptional customer service, and reliable results. Whether you need ${service.keywords[1]} or ${service.keywords[2]}, our certified team brings the expertise and attention to detail that ${cityName} residents trust. Contact us today for your free estimate on ${service.keywords[0]} in ${cityName}, ${stateAbbr}.`
}

// Generate problem-solution content
export function generateProblemSolutionContent(
  problem: string,
  cityName: string,
  state: string,
  stateFull: string
): string {
  const stateAbbr = state.toUpperCase()
  const weather = WEATHER_PATTERNS[stateAbbr as keyof typeof WEATHER_PATTERNS]

  const problemTemplates: Record<string, string> = {
    'roof-repair': `If you're experiencing roofing issues in ${cityName}, ${stateAbbr}, Advanced Roofing & Siding Inc. provides expert roof repair services to address leaks, damaged shingles, and weather-related problems. ${cityName} homes face unique challenges from ${weather.challenges[0]} and ${weather.challenges[1]}, which can lead to roof damage requiring immediate attention.`,
    'roof-replacement': `When it's time for a complete roof replacement in ${cityName}, ${stateAbbr}, trust Advanced Roofing & Siding Inc., a GAF Master Elite contractor with 30+ years of experience serving ${cityName} homeowners. ${weather.seasons.winter}, making it essential to have a roof system designed specifically for ${stateFull} weather conditions.`,
    'hail-damage': `${cityName}, ${stateFull} experiences frequent hailstorms that can cause significant damage to roofs, siding, and windows. Advanced Roofing & Siding Inc. specializes in hail damage assessment and restoration for ${cityName} homeowners, working directly with insurance companies to ensure you receive the coverage you deserve.`,
    'storm-damage': `Severe weather in ${cityName}, ${stateAbbr} can cause extensive damage to your home's exterior. Advanced Roofing & Siding Inc. provides comprehensive storm damage restoration services, from emergency repairs to complete reconstruction, helping ${cityName} residents restore their homes quickly and efficiently.`,
    'siding-replacement': `Old or damaged siding in ${cityName}, ${stateFull} not only affects your home's appearance but also its energy efficiency and weather protection. Advanced Roofing & Siding Inc. offers professional siding replacement services using premium materials designed to withstand ${stateFull}'s climate challenges.`,
  }

  const baseContent = problemTemplates[problem] || `Advanced Roofing & Siding Inc. provides expert solutions for ${problem} issues in ${cityName}, ${stateAbbr}.`

  return `${baseContent} Our team understands the specific challenges ${cityName} homeowners face, including ${weather.challenges[0]} and ${weather.challenges[1]}. We use only premium materials and proven techniques to ensure your home is protected against ${stateFull} weather conditions. As a GAF Master Elite contractor with an A+ BBB rating, we bring over 30 years of experience to every ${cityName} project. Contact us today for your free estimate and discover why ${cityName} residents trust Advanced Roofing & Siding Inc. for all their exterior needs.`
}


