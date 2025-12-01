import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { COMPANY_INFO } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Advanced Roofing & Siding Inc.',
  description: 'Privacy Policy for Advanced Roofing & Siding Inc. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <Section className="bg-white pt-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Introduction</h2>
              <p className="text-gray-700">
                {COMPANY_INFO.name} ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Information We Collect</h2>
              <p className="text-gray-700">
                We may collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Information about your project or service needs</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              <p className="text-gray-700">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you estimates and project information</li>
                <li>Communicate with you about our services</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Information Sharing</h2>
              <p className="text-gray-700">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your
                personal information. However, no method of transmission over the internet is 100%
                secure.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Your Rights</h2>
              <p className="text-gray-700">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:
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


