'use client'

import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Stats } from '@/components/sections/Stats'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { ProgramsPreview } from '@/components/sections/ProgramsPreview'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { ReviewsPreview } from '@/components/sections/ReviewsPreview'
import { FAQ } from '@/components/sections/FAQ'

export function HomePageClient() {
  return (
    <PageLayout>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <ProjectGallery />
      <WhyChooseUs />
      <Stats />
      <ServiceAreas />
      <ProgramsPreview />
      <InsuranceClaimsCTA />
      <ReviewsPreview />
      <FAQ />
    </PageLayout>
  )
}

