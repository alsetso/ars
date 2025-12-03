'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimatedDiv } from '@/components/ui/AnimatedDiv'
import { Camera, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Featured project images - mix of roofing, siding, and windows
const projectImages = [
  {
    src: '/gallery/394570286_927694532166401_5050008028973736549_n.webp',
    alt: 'Premium roofing installation project in Minnesota',
    category: 'Roofing',
  },
  {
    src: '/gallery/379307894_905433307725857_336380520310619416_n (1).webp',
    alt: 'Siding installation project in Wisconsin',
    category: 'Siding',
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
    alt: 'Commercial siding project',
    category: 'Siding',
  },
]

export function ProjectGallery() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Our Recent Projects"
        description="Quality craftsmanship across Minnesota and Wisconsin"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4">
          {projectImages.map((project, index) => (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="group relative overflow-hidden p-0"
                variant="elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-900">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        {/* CTA */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Card className="bg-white" variant="outlined">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
              <Camera className="h-7 w-7 text-brand-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">
              See More of Our Work
            </h3>
            <p className="mb-6 text-base text-gray-700 md:text-lg">
              Browse our complete gallery of roofing, siding, and window projects
            </p>
            <Link href="/resources/videos">
              <Button variant="primary" size="lg" className="group">
                View Project Gallery
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Card>
        </AnimatedDiv>
      </div>
    </Section>
  )
}

