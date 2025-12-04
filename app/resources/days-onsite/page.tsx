import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import {
  Calendar,
  Clock,
  Users,
  Hammer,
  CheckCircle,
  Camera,
  Video,
  Star,
  Share2,
  Mail,
  MessageSquare,
  AlertCircle,
  Home,
  Truck,
  Shield,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect During Installation - Days on Site Guide',
  description: 'Learn what to expect during your roofing or siding installation. Timeline, crew visits, and how to make your experience even better. Share photos, videos, and reviews of our work.',
  keywords: ['roofing installation timeline', 'siding installation process', 'what to expect during roof replacement', 'installation day guide', 'roofing crew visits', 'Minnesota roofing installation'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/days-onsite',
  },
  openGraph: {
    title: 'What to Expect During Installation - Days on Site Guide',
    description: 'Learn what to expect during your roofing or siding installation. Timeline, crew visits, and how to make your experience even better.',
    url: 'https://advancedroofingmn.com/resources/days-onsite',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Installation Process Guide - Advanced Roofing & Siding Inc.',
      },
    ],
  },
}

const installationDays = [
  {
    day: 'Day 1',
    title: 'Pre-Installation Visit',
    icon: Calendar,
    description: 'Our project manager visits to review the scope, answer questions, and ensure everything is ready.',
    activities: [
      'Final walkthrough and measurements',
      'Material delivery confirmation',
      'Access point verification',
      'Safety and site preparation review',
    ],
  },
  {
    day: 'Day 2-3',
    title: 'Material Delivery',
    icon: Truck,
    description: 'Materials arrive and are staged on your property. Our team ensures proper placement and protection.',
    activities: [
      'Shingles, siding, or windows delivered',
      'Materials organized and protected',
      'Driveway and walkway protection installed',
      'Dumpster placement (if needed)',
    ],
  },
  {
    day: 'Day 3-5',
    title: 'Installation Begins',
    icon: Hammer,
    description: 'Our certified crew begins the installation. Most residential projects take 1-3 days depending on size.',
    activities: [
      'Old materials removed carefully',
      'Inspection of underlying structure',
      'New materials installed professionally',
      'Quality checks throughout the process',
    ],
  },
  {
    day: 'Final Day',
    title: 'Completion & Cleanup',
    icon: CheckCircle,
    description: 'Final inspection, cleanup, and warranty registration. Your project is complete!',
    activities: [
      'Final quality inspection',
      'Complete site cleanup',
      'Debris removal',
      'Warranty registration with GAF',
    ],
  },
]

const tipsForBetterExperience = [
  {
    icon: Home,
    title: 'Prepare Your Property',
    description: 'Clear driveways and walkways, move vehicles, and secure outdoor furniture and decorations.',
  },
  {
    icon: AlertCircle,
    title: 'Plan for Noise',
    description: 'Installation involves hammering and machinery. Plan accordingly if you work from home.',
  },
  {
    icon: Users,
    title: 'Communicate with Crew',
    description: 'Our team is professional and approachable. Don\'t hesitate to ask questions or share concerns.',
  },
  {
    icon: Shield,
    title: 'Trust the Process',
    description: 'Our certified crew follows industry best practices. Trust their expertise and experience.',
  },
]

export default function DaysOnSitePage() {
  return (
    <PageLayout>
      <PageHero
        title="What to Expect During Installation"
        description="A guide to your project timeline and how to make your experience even better"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />

      {/* Installation Timeline Section */}
      <Section className="bg-white">
        <SectionHeader
          title="Your Installation Timeline"
          description="Understanding the days and visits during your project"
        />
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6">
            {installationDays.map((day, index) => {
              const Icon = day.icon
              return (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden" variant="elevated">
                    <div className="grid gap-6 md:grid-cols-4">
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                            <Icon className="h-8 w-8 text-brand-primary" strokeWidth={2} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-brand-primary">{day.day}</div>
                            <h3 className="text-lg font-bold text-gray-900">{day.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <p className="mb-4 text-gray-700">{day.description}</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                              <span className="text-sm text-gray-600">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Tips for Better Experience */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Making Your Experience Even Better"
          description="Simple steps to ensure a smooth installation process"
        />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tipsForBetterExperience.map((tip, index) => {
              const Icon = tip.icon
              return (
                <AnimatedDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center" variant="elevated">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                        <Icon className="h-7 w-7 text-brand-primary" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{tip.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{tip.description}</p>
                  </Card>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Share Your Experience Section */}
      <Section className="bg-white">
        <SectionHeader
          title="Show Your Support & Share Your Experience"
          description="We'd love to see your photos and videos of our crew in action!"
        />
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Camera className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Capture Photos & Videos of Our Crew
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  We love seeing our team in action! Your photos and videos help us showcase our quality work and help other homeowners see what to expect.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Camera className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Take Photos</h3>
                  <p className="text-sm text-gray-600">
                    Capture our crew working, materials being installed, or your completed project
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Video className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Record Videos</h3>
                  <p className="text-sm text-gray-600">
                    Short videos of our team in action are perfect for social media sharing
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Share2 className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Share & Tag Us</h3>
                  <p className="text-sm text-gray-600">
                    Share on social media and tag us for a chance to be featured on our page
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 border-2 border-red-200 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  How to Share Your Content
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Send photos and videos directly to:
                    </p>
                    <a
                      href="mailto:StacyLehn@GMail.com?subject=Project%20Photo%20or%20Video%20Submission"
                      className="text-lg font-bold text-brand-primary hover:text-red-800 transition-colors break-all"
                    >
                      StacyLehn@GMail.com
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      Include your name and project address
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Share on Facebook, Instagram, or Google and tag us:
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      @AdvancedRoofingSidingMN
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Use hashtags: #AdvancedRoofing #GAFMasterElite #MinnesotaRoofing
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Leave a Review Section */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-2 border-gray-200">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Star className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Leave Us a Review
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Your feedback helps other homeowners make informed decisions and helps us continue to improve our service.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-brand-primary" />
                    Google Reviews
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Share your experience on Google to help others find us
                  </p>
                  <a
                    href="https://www.google.com/search?q=Advanced+Roofing+%26+Siding+Inc.%2C+3601+211th+Ln+NW%2C+Oak+Grove%2C+MN+55303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Button variant="primary" size="md" className="group">
                      Leave Google Review
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-brand-primary" />
                    Our Reviews Page
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Read what other customers say about their experience
                  </p>
                  <Link href="/resources/reviews">
                    <Button variant="outline" size="md" className="group w-full">
                      View All Reviews
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg bg-red-50 p-6 border-2 border-red-200">
                <h3 className="font-semibold text-gray-900 mb-3">What to Include in Your Review</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Your overall experience with our team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Quality of workmanship and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Professionalism of our crew</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Timeline and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-primary mt-0.5" />
                    <span>Photos of your completed project (if you'd like to share)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
              <div className="text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  Questions About Your Installation?
                </h2>
                <p className="mb-6 text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                  Our team is here to help. Contact us anytime during your project if you have questions or concerns.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="tel:763-427-3093">
                    <Button variant="outline" size="lg">
                      Call 763-427-3093
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}


