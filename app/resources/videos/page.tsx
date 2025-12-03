import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { PlayCircle, Calendar, MapPin, Camera, Video, MessageSquare, Mail, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Videos - Advanced Roofing & Siding Inc. | Minnesota Roofing Projects',
  description: 'Watch Advanced Roofing & Siding Inc. in action. View our professional roofing, siding, and exterior projects across Minnesota and Wisconsin. GAF Master Elite contractor showcasing quality craftsmanship.',
  keywords: ['roofing videos', 'Minnesota roofing projects', 'siding installation videos', 'Advanced Roofing videos', 'roofing contractor videos', 'Minnesota exterior contractor videos', 'GAF Master Elite projects', 'roofing work videos'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/videos',
  },
  openGraph: {
    title: 'Videos - Advanced Roofing & Siding Inc. | Minnesota Roofing Projects',
    description: 'Watch Advanced Roofing & Siding Inc. in action. View our professional roofing, siding, and exterior projects across Minnesota and Wisconsin.',
    url: 'https://advancedroofingmn.com/resources/videos',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Roofing & Siding Inc. Videos',
      },
    ],
  },
}

// Video data - currently one video, but structured to easily add more
const VIDEOS = [
  {
    id: 'inver-grove-heights-project',
    title: 'Inver Grove Heights, MN Project',
    description: 'Watch our team in action on this recent project, showcasing our attention to detail and professional craftsmanship. See how Advanced Roofing & Siding Inc. delivers GAF Master Elite quality on every job.',
    youtubeId: 'dPOfuHMt8hQ',
    thumbnail: 'https://img.youtube.com/vi/dPOfuHMt8hQ/maxresdefault.jpg',
    duration: '3:45',
    date: '2024',
    location: 'Inver Grove Heights, Minnesota',
  },
]

export default function VideosPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Project Videos"
        description="Watch Advanced Roofing & Siding Inc. in action across Minnesota and Wisconsin"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />
      
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Project Videos"
            description="See our quality craftsmanship and professional work in action"
          />

          {/* YouTube-style video list */}
          <div className="space-y-6">
            {VIDEOS.map((video, index) => (
              <AnimatedDiv
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Video Embed */}
                    <div className="md:col-span-2">
                      <div className="relative w-full overflow-hidden rounded-lg bg-gray-900" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 h-full w-full"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    {/* Video Info - YouTube-style sidebar */}
                    <div className="md:col-span-1">
                      <div className="space-y-4">
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-gray-900">
                            {video.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{video.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{video.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                            <PlayCircle className="h-5 w-5 text-brand-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Advanced Roofing & Siding Inc.</p>
                            <p className="text-xs text-gray-500">GAF Master Elite Contractor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedDiv>
            ))}
          </div>

          {/* Customer Submission Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Camera className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Are We Working on Your Home Now?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  We'd love to see your experience! Share photos or videos of our crew in action, or leave us a review about your project.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Video className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Share Videos</h3>
                  <p className="text-sm text-gray-600">
                    Send us videos of our crew working on your project
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Camera className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Share Photos</h3>
                  <p className="text-sm text-gray-600">
                    Send photos of our team or your completed project
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Star className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">Leave a Review</h3>
                  <p className="text-sm text-gray-600">
                    Tell others about your experience with our team
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 border-2 border-red-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Send Us Your Content</h3>
                      <p className="text-sm text-gray-600">
                        Email your videos, photos, or reviews to:
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-2">
                    <a
                      href="mailto:StacyLehn@GMail.com?subject=Project%20Video%20or%20Photo%20Submission"
                      className="text-2xl font-bold text-brand-primary hover:text-red-800 transition-colors break-all"
                    >
                      StacyLehn@GMail.com
                    </a>
                    <p className="text-xs text-gray-500">
                      Include your name and project address in your email
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  By sharing your content, you grant Advanced Roofing & Siding Inc. permission to use your photos and videos for marketing purposes, including our website and social media.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/resources/reviews">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-brand-primary font-semibold border-2 border-brand-primary transition-colors hover:bg-brand-primary hover:text-white">
                      <MessageSquare className="h-5 w-5" />
                      Leave a Review
                    </button>
                  </Link>
                  <a
                    href="mailto:StacyLehn@GMail.com?subject=Project%20Video%20or%20Photo%20Submission"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-white font-semibold transition-colors hover:bg-red-800"
                  >
                    <Mail className="h-5 w-5" />
                    Send Content via Email
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedDiv>

          {/* SEO Content Section */}
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-gray-50">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Roofing & Siding Inc. Project Videos
                </h2>
                <p className="text-gray-700 mb-4">
                  Welcome to our video gallery showcasing the exceptional work of Advanced Roofing & Siding Inc., 
                  Minnesota's premier GAF Master Elite contractor. Our videos provide an inside look at our 
                  professional roofing, siding, and exterior renovation projects across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>.
                </p>
                <p className="text-gray-700 mb-4">
                  As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>, 
                  we represent the top 2% of roofing professionals nationwide. Our videos demonstrate the quality 
                  craftsmanship, attention to detail, and professional standards that have earned us an A+ rating 
                  with the Better Business Bureau and the trust of thousands of homeowners and businesses.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you're considering <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, 
                  <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> siding</Link>, 
                  <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> windows</Link>, 
                  or <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link> 
                  services, our project videos show you exactly what to expect when you choose Advanced Roofing & Siding Inc.
                </p>
                <div className="rounded-lg bg-red-50 p-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Watch Our Videos?</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>See our professional team in action on real projects</li>
                    <li>Understand our quality standards and attention to detail</li>
                    <li>Learn about our <Link href="/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> and installation processes</li>
                    <li>Get a sense of our workmanship before you commit to a project</li>
                    <li>View completed projects in cities throughout <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link></li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-6">
                  Ready to start your project? <Link href="/contact" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Contact us today</Link> for a free estimate, 
                  or learn more about our <Link href="/services" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">comprehensive exterior services</Link>.
                </p>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </Section>
    </PageLayout>
  )
}

