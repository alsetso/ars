'use client'

import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { WhoWeServePreview } from '@/components/sections/WhoWeServePreview'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { ReviewsPreview } from '@/components/sections/ReviewsPreview'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { FAQ } from '@/components/sections/FAQ'

export function HomePageClient() {
  return (
    <PageLayout>
      <Hero />
      <WhoWeServePreview />
      <Services />
      <Process />
      <ProjectGallery />
      <ServiceAreas />
      <ReviewsPreview />
      <InsuranceClaimsCTA />
      <FAQ />
    </PageLayout>
  )
}
