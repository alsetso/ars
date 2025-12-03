'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { SERVICES } from '@/lib/constants'
import { motion } from 'framer-motion'
import { Home, PaintBucket, Square, CloudRain, Snowflake } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const iconMap = {
  Home,
  PaintBucket,
  Square,
  CloudRain,
  Snowflake,
}

// Service images - All using gallery images
const serviceImages = [
  '/gallery/394570286_927694532166401_5050008028973736549_n.webp', // Premium Roofing
  '/gallery/379307894_905433307725857_336380520310619416_n (1).webp', // Siding Solutions
  '/gallery/58814576_10155971881765740_7471379444305756160_n.webp', // Window Installation
  '/gallery/380156327_905711167698071_326976560032986429_n.webp', // Storm Restoration
  '/gallery/340661788_241238031731100_708703886642482358_n.webp', // Winterization
]

const serviceSlugs = {
  roofing: '/services/roofing',
  siding: '/services/siding',
  windows: '/services/windows',
  restoration: '/services/storm-restoration',
  winterization: '/services/winterization',
}

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeader
        title="Our Services"
        description="Comprehensive exterior solutions backed by decades of expertise"
      />

      <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap]
          const slug = serviceSlugs[service.id as keyof typeof serviceSlugs]
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={slug}>
                <Card className="group h-full cursor-pointer overflow-hidden p-0 border-0 shadow-none hover:shadow-lg transition-shadow duration-300" variant="elevated">
                  {/* Service Image */}
                  <div className="relative h-32 overflow-hidden md:h-40">
                    <Image
                      src={serviceImages[index]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute left-3 top-3 rounded-lg bg-white/95 backdrop-blur-sm p-2 transition-transform duration-200 group-hover:scale-105 md:left-4 md:top-4">
                      <Icon className={`h-4 w-4 md:h-5 md:w-5 ${service.id === 'winterization' ? 'text-blue-600' : 'text-brand-primary'}`} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="pt-3 px-3 pb-3 md:pt-4 md:px-4 md:pb-4">
                    <h3 className="mb-1 text-base font-bold tracking-tight text-gray-900 md:mb-1.5 md:text-lg group-hover:text-brand-primary transition-colors duration-200">{service.title}</h3>
                    <p className="text-xs text-gray-600 leading-snug md:text-sm">{service.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}


