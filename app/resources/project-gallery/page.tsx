import { PageLayout } from '@/components/layout/PageLayout'
import { PageHero } from '@/components/ui/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Camera, Image as ImageIcon, MapPin, Calendar, Mail, MessageSquare, Video, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Project Gallery - Advanced Roofing & Siding Inc. | Minnesota & Wisconsin',
  description: 'Browse our project gallery showcasing professional roofing, siding, and window installations across Minnesota and Wisconsin. GAF Master Elite contractor quality craftsmanship.',
  keywords: ['roofing gallery', 'Minnesota roofing projects', 'siding installation gallery', 'Advanced Roofing gallery', 'roofing contractor photos', 'Minnesota exterior contractor gallery', 'GAF Master Elite projects', 'roofing work photos'],
  alternates: {
    canonical: 'https://advancedroofingmn.com/resources/project-gallery',
  },
  openGraph: {
    title: 'Project Gallery - Advanced Roofing & Siding Inc. | Minnesota & Wisconsin',
    description: 'Browse our project gallery showcasing professional roofing, siding, and window installations across Minnesota and Wisconsin.',
    url: 'https://advancedroofingmn.com/resources/project-gallery',
    images: [
      {
        url: 'https://advancedroofingmn.com/AFS-Logo900.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Roofing & Siding Inc. Project Gallery',
      },
    ],
  },
}

// Project images with categories
const projectImages = [
  {
    src: '/gallery/394570286_927694532166401_5050008028973736549_n.webp',
    alt: 'Storm restoration project in Minnesota',
    category: 'Storm Restoration',
  },
  {
    src: '/gallery/379307894_905433307725857_336380520310619416_n (1).webp',
    alt: 'Roofing installation project in Wisconsin',
    category: 'Roofing',
  },
  {
    src: '/gallery/58814576_10155971881765740_7471379444305756160_n.webp',
    alt: 'Window installation project',
    category: 'Windows',
  },
  {
    src: '/gallery/380156327_905711167698071_326976560032986429_n.webp',
    alt: 'Storm restoration project in Minnesota',
    category: 'Storm Restoration',
  },
  {
    src: '/gallery/340661788_241238031731100_708703886642482358_n.webp',
    alt: 'Residential roofing project',
    category: 'Roofing',
  },
  {
    src: '/gallery/310571525_636102627992261_6745535343486299305_n.webp',
    alt: 'Commercial storm restoration project',
    category: 'Storm Restoration',
  },
  {
    src: '/gallery/315336128_671806221088568_2626046884352502994_n.webp',
    alt: 'Roofing replacement project',
    category: 'Roofing',
  },
  {
    src: '/gallery/351499412_645224983741699_6973171527731469674_n.webp',
    alt: 'Roofing replacement project',
    category: 'Roofing',
  },
  {
    src: '/gallery/380152211_905711257698062_7876618726786121530_n.webp',
    alt: 'Exterior renovation project',
    category: 'Roofing',
  },
  {
    src: '/gallery/379833840_906233377645850_4118701267333514526_n.webp',
    alt: 'Professional roofing installation',
    category: 'Roofing',
  },
  {
    src: '/gallery/379466626_906233337645854_1361939232979378521_n.webp',
    alt: 'Storm restoration project',
    category: 'Storm Restoration',
  },
  {
    src: '/gallery/380157379_905711161031405_8090624436019478063_n.webp',
    alt: 'Complete exterior renovation',
    category: 'Roofing',
  },
  {
    src: '/gallery/38600881_10155423224060740_369013887741198336_n.webp',
    alt: 'Roofing project in Minnesota',
    category: 'Roofing',
  },
  {
    src: '/gallery/58749283_10155971881775740_7335754229753053184_n.webp',
    alt: 'Window and siding project',
    category: 'Windows',
  },
  {
    src: '/gallery/70591306_10156272051195740_842810443335467008_n.webp',
    alt: 'Commercial roofing project',
    category: 'Roofing',
  },
  {
    src: '/gallery/71495409_10156313592080740_6523220406751461376_n.webp',
    alt: 'Residential storm restoration project',
    category: 'Storm Restoration',
  },
  {
    src: '/gallery/71829930_10156313592070740_6773079622390120448_n (1).webp',
    alt: 'Roofing installation project',
    category: 'Roofing',
  },
  {
    src: '/gallery/261311101_408550814080778_7104520534060364107_n.webp',
    alt: 'Exterior renovation project',
    category: 'Siding',
  },
  {
    src: '/gallery/305030588_654336832835507_2625733693514799564_n.webp',
    alt: 'Professional roofing work',
    category: 'Roofing',
  },
  {
    src: '/gallery/19400203_10154461048575740_5922676874025222668_o.webp',
    alt: 'Complete exterior project',
    category: 'Roofing',
  },
]

export default function ProjectGalleryPage() {
  return (
    <PageLayout>
      <PageHero
        title="Project Gallery"
        description="Quality craftsmanship across Minnesota and Wisconsin"
        backgroundImage="https://images.unsplash.com/photo-1632495375739-c7876ca4c8b9?q=80&w=2400"
      />
      
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Our Recent Projects"
            description="Browse our gallery of professional roofing, siding, and window installations"
          />

          {/* Image Gallery Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((project, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Card className="group relative overflow-hidden p-0" variant="elevated">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Category Badge */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-900">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-4 py-2">
                        <ImageIcon className="h-4 w-4 text-brand-primary" />
                        <span className="text-sm font-semibold text-gray-900">View Project</span>
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
                  Advanced Roofing & Siding Inc. Project Gallery
                </h2>
                <p className="text-gray-700 mb-4">
                  Welcome to our project gallery showcasing the exceptional work of Advanced Roofing & Siding Inc., 
                  Minnesota's premier <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>. 
                  Our gallery features professional roofing, siding, and exterior renovation projects across <Link href="/service-areas" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">Minnesota and Wisconsin</Link>.
                </p>
                <p className="text-gray-700 mb-4">
                  As a <Link href="/resources/gaf-master-elite-contractor" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">GAF Master Elite contractor</Link>, 
                  we represent the top 2% of roofing professionals nationwide. Our gallery demonstrates the quality 
                  craftsmanship, attention to detail, and professional standards that have earned us an A+ rating 
                  with the Better Business Bureau and the trust of thousands of homeowners and businesses.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you're considering <Link href="/services/roofing" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">roofing</Link>, 
                  <Link href="/services/siding" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> siding</Link>, 
                  <Link href="/services/windows" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2"> windows</Link>, 
                  or <Link href="/services/storm-restoration" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">storm restoration</Link> 
                  services, our project gallery shows you exactly what to expect when you choose Advanced Roofing & Siding Inc.
                </p>
                <div className="rounded-lg bg-red-50 p-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Browse Our Gallery?</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>See our professional team in action on real projects</li>
                    <li>Understand our quality standards and attention to detail</li>
                    <li>Learn about our <Link href="/resources/warranties" className="text-brand-primary hover:text-red-800 font-semibold underline underline-offset-2">industry-leading warranties</Link> and installation processes</li>
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

