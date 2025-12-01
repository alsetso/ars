import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { InsuranceClaimsCTA } from '@/components/sections/InsuranceClaimsCTA'
import { ServiceAreas } from '@/components/sections/ServiceAreas'

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Marquee />
      <Services />
      <ServiceAreas />
      <WhyChooseUs />
      <InsuranceClaimsCTA />
    </PageLayout>
  )
}

