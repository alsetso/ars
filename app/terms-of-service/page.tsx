import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { COMPANY_INFO } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Advanced Roofing & Siding Inc.',
  description: 'Terms of Service for Advanced Roofing & Siding Inc. Read our terms and conditions.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      <Section className="bg-white pt-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Terms of Service</h1>
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              <p className="text-gray-700">
                By accessing or using the website of {COMPANY_INFO.name}, you agree to be bound by
                these Terms of Service and all applicable laws and regulations.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Services</h2>
              <p className="text-gray-700">
                {COMPANY_INFO.name} provides roofing, siding, window installation, and storm
                restoration services. All services are subject to written estimates and contracts.
                We reserve the right to refuse service to anyone for any reason.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Estimates and Contracts</h2>
              <p className="text-gray-700">
                All estimates are valid for a specified period and are subject to change. Work will
                not commence until a signed contract and any required deposits are received. All
                contracts are subject to our standard terms and conditions.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Warranties</h2>
              <p className="text-gray-700">
                We provide warranties on our workmanship and materials as specified in individual
                contracts. Manufacturer warranties apply to materials used. Warranty terms vary by
                service and product.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Payment Terms</h2>
              <p className="text-gray-700">
                Payment terms are specified in each contract. We accept various payment methods.
                Late payments may be subject to fees as outlined in the contract.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, {COMPANY_INFO.name} shall not be liable for
                any indirect, incidental, special, or consequential damages arising from our
                services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Licensing and Insurance</h2>
              <p className="text-gray-700">
                {COMPANY_INFO.name} is licensed (#{COMPANY_INFO.license}) and fully insured. We
                maintain all required licenses and insurance coverage as required by state and local
                regulations.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-700">
                {COMPANY_INFO.name}
                <br />
                {COMPANY_INFO.location}
                <br />
                Phone: <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-primary">{COMPANY_INFO.phone}</a>
                <br />
                Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-primary">{COMPANY_INFO.email}</a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </PageLayout>
  )
}


