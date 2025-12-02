import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, address, timeline, city, state } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Get Web3Forms access key from environment variable
    // Get your free access key from: https://web3forms.com
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY environment variable is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at 763-427-3093.' },
        { status: 500 }
      )
    }

    // Prepare form data for Web3Forms
    const formData = new FormData()
    formData.append('access_key', accessKey)
    formData.append('subject', 'New Lead from ARS')
    formData.append('from_name', 'ARS Website Contact Form')
    formData.append('email', 'alsetsolutionsinc@gmail.com')
    
    // Build email content
    let emailBody = `New Lead from ARS Website\n\n`
    emailBody += `Contact Information:\n`
    emailBody += `- Name: ${name}\n`
    emailBody += `- Email: ${email}\n`
    emailBody += `- Phone: ${phone}\n`
    if (address) emailBody += `- Address: ${address}\n`
    if (city) emailBody += `- City: ${city}\n`
    if (state) emailBody += `- State: ${state}\n`
    emailBody += `\nService Information:\n`
    emailBody += `- Service Needed: ${service || 'Not specified'}\n`
    if (timeline) emailBody += `- Timeline: ${timeline}\n`
    if (message) {
      emailBody += `\nMessage:\n${message}\n`
    }
    emailBody += `\n---\nSubmitted from Advanced Roofing & Siding website`

    formData.append('message', emailBody)
    
    // Add form fields for better organization
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    if (address) formData.append('address', address)
    if (city) formData.append('city', city)
    if (state) formData.append('state', state)
    if (service) formData.append('service', service)
    if (timeline) formData.append('timeline', timeline)
    if (message) formData.append('message', message)

    // Send email via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      console.error('Web3Forms error:', data)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or call us directly at 763-427-3093.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or call us directly at 763-427-3093.' },
      { status: 500 }
    )
  }
}

