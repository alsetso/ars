import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Button } from '@/components/ui/Button'
import { 
  Building2, 
  Users, 
  Shield, 
  FileText, 
  Phone, 
  Star, 
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources - Advanced Roofing & Siding Inc. | Minnesota & Wisconsin',
  description: 'Access valuable resources including community programs, insurance claims assistance, GAF Master Elite certification info, 24/7 support, customer reviews, and project videos.',
  keywords: ['roofing resources', 'Minnesota roofing programs', 'insurance claims help', 'GAF Master Elite', 'roofing contractor resources', 'exterior contractor resources', 'Minnesota roofing support'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources',
  },
  openGraph: {
    title: 'Resources - Advanced Roofing & Siding Inc.',
    description: 'Access valuable resources including community programs, insurance claims assistance, GAF Master Elite certification, and more.',
    url: 'https://advancedroofingmn.com/resources',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Resources - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const resources = [
  {
    id: 'programs',
    title: 'Who We Serve',
    description: 'Specialized solutions for homeowners, businesses, municipalities, real estate professionals, property managers, and HOAs. Fast, reliable service for all markets.',
    icon: Building2,
    href: '/who-we-serve',
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    features: ['Municipal partnerships', 'Agent incentives', 'Property management', 'HOA programs'],
  },
  {
    id: 'insurance-claims',
    title: 'Insurance Claims Assistance',
    description: 'Expert storm damage claim support. Free inspections, adjuster representation, and full claim management. 48-hour inspection guarantee.',
    icon: Shield,
    href: '/resources/insurance-claims',
    color: 'from-green-50 to-green-100',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    features: ['Free inspections', 'Adjuster representation', '48-hour guarantee', 'Full claim support'],
  },
  {
    id: 'gaf-master-elite',
    title: 'GAF Master Elite®',
    description: 'Only 2% of roofing contractors earn GAF Master Elite® certification. Learn about our elite workmanship, proven reliability, and strongest warranties.',
    icon: Award,
    href: '/resources/gaf-master-elite-contractor',
    color: 'from-yellow-50 to-yellow-100',
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    features: ['Top 2% certification', 'Strongest warranties', 'Elite workmanship', 'Factory training'],
  },
  {
    id: '24-7-support',
    title: '24/7 Support',
    description: 'Always available. Always ready. Real help when you need it most - 24/7 emergency roofing and siding support for Minnesota and Wisconsin.',
    icon: Phone,
    href: '/resources/24-7-support',
    color: 'from-red-50 to-red-100',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    features: ['24/7 phone support', 'Emergency response', 'After-hours service', 'Storm response'],
  },
  {
    id: 'reviews',
    title: 'Customer Reviews',
    description: 'Read verified customer reviews from satisfied homeowners and businesses across Minnesota and Wisconsin. See why customers trust us.',
    icon: Star,
    href: '/resources/reviews',
    color: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    features: ['Verified reviews', 'Customer testimonials', 'Real experiences', 'High ratings'],
  },
  {
    id: 'videos',
    title: 'Project Videos',
    description: 'Watch Advanced Roofing & Siding Inc. in action. View our professional roofing, siding, and exterior projects across Minnesota and Wisconsin.',
    icon: PlayCircle,
    href: '/resources/videos',
    color: 'from-indigo-50 to-indigo-100',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    features: ['Project showcases', 'Quality craftsmanship', 'Real projects', 'Video gallery'],
  },
  {
    id: 'project-gallery',
    title: 'Project Gallery',
    description: 'Browse our gallery of professional roofing, siding, and window installations. See quality craftsmanship across Minnesota and Wisconsin.',
    icon: ImageIcon,
    href: '/resources/project-gallery',
    color: 'from-teal-50 to-teal-100',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    features: ['Photo gallery', 'Real projects', 'Quality showcase', 'Before & after'],
  },
  {
    id: 'warranties',
    title: 'Warranties',
    description: 'Industry-leading GAF warranties including the Golden Pledge 50-year warranty at no additional cost. GAF Master Elite contractor protection for your investment.',
    icon: Shield,
    href: '/resources/warranties',
    color: 'from-amber-50 to-amber-100',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    features: ['50-year coverage', 'No additional cost', 'GAF Golden Pledge', 'Full replacement protection'],
  },
]

export default function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Resources"
        description="Everything you need to know about Advanced Roofing & Siding Inc."
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />

      {/* Introduction Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to the Advanced Roofing & Siding Inc. resource center. Here you'll find everything you need to know about our services, programs, certifications, and support options.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Whether you're a homeowner in <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota or Wisconsin</Link>, a property manager, city official, or real estate professional, we have resources tailored to your needs.
                </p>
                <p className="text-lg text-gray-700">
                  Explore our community programs, learn about our <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite certification</Link>, get help with <Link href="/resources/insurance-claims" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">insurance claims</Link>, read <Link href="/resources/reviews" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">customer reviews</Link>, and more.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Resources Grid */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Our Resources"
          description="Explore our programs, support options, and helpful information"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <AnimatedDiv
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${resource.iconBg}`}>
                      <Icon className={`h-7 w-7 ${resource.iconColor}`} strokeWidth={2} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{resource.title}</h3>
                    <p className="mb-4 text-gray-600">{resource.description}</p>
                    <ul className="mb-6 space-y-2">
                      {resource.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={resource.href}>
                      <Button variant="primary" size="md" className="w-full group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Quick Links Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Quick Links"
            description="Popular resources and information"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                    <FileText className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Need Help with Insurance Claims?</h3>
                    <p className="text-sm text-gray-600 mb-3">Get expert assistance with storm damage claims</p>
                    <Link href="/resources/insurance-claims">
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">24/7 Emergency Support</h3>
                    <p className="text-sm text-gray-600 mb-3">Available anytime you need us</p>
                    <Link href="/resources/24-7-support">
                      <Button variant="outline" size="sm">
                        Get Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50">
                    <MessageSquare className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Read Customer Reviews</h3>
                    <p className="text-sm text-gray-600 mb-3">See what our customers say about us</p>
                    <Link href="/resources/reviews">
                      <Button variant="outline" size="sm">
                        View Reviews
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>

            <AnimatedDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                    <PlayCircle className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Watch Our Projects</h3>
                    <p className="text-sm text-gray-600 mb-3">See our work in action</p>
                    <Link href="/resources/videos">
                      <Button variant="outline" size="sm">
                        Watch Videos
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white border-2 border-gray-200">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                Ready to Get Started?
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                Have questions or ready to start your project? Contact us today for a free estimate or to learn more about our services.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/services/free-estimate">
                  <Button variant="primary" size="lg">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:763-427-3093">
                  <Button variant="outline" size="lg">
                    Call 763-427-3093
                  </Button>
                </a>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

