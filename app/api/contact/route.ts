import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Create email content
    const emailContent = `
New Lead from ARS Website

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
${address ? `- Address: ${address}` : ''}
${city ? `- City: ${city}` : ''}
${state ? `- State: ${state}` : ''}

Service Information:
- Service Needed: ${service || 'Not specified'}
${timeline ? `- Timeline: ${timeline}` : ''}

Message:
${message || 'No message provided'}

---
Submitted from Advanced Roofing & Siding website
`

    // Configure Gmail SMTP transporter
    // Note: You'll need to set GMAIL_USER and GMAIL_APP_PASSWORD in your environment variables
    const gmailUser = process.env.GMAIL_USER || 'alsetsolutionsinc@gmail.com'
    const gmailPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailPassword) {
      console.error('GMAIL_APP_PASSWORD environment variable is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword, // Gmail App Password (not regular password)
      },
    })

    // Send email
    await transporter.sendMail({
      from: gmailUser,
      to: 'alsetsolutionsinc@gmail.com',
      subject: 'New Lead from ARS',
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Lead from ARS Website
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
            ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
            ${state ? `<p><strong>State:</strong> ${state}</p>` : ''}
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">Service Information</h3>
            <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>

          ${message ? `
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <p style="color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            Submitted from Advanced Roofing & Siding website
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

