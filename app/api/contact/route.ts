import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function isValidPhone(phone: string) {
  return /^[\d\s\-().+]{7,20}$/.test(phone)
}
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 1000)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const name      = sanitize(body.name)
    const email     = sanitize(body.email).toLowerCase()
    const phone     = sanitize(body.phone)
    const service   = sanitize(body.service)
    const message   = sanitize(body.message)
    const address   = sanitize(body.address)
    const city      = sanitize(body.city)
    const state     = sanitize(body.state)
    const zip       = sanitize(body.zip)
    const timeline  = sanitize(body.timeline)
    const sourceUrl = sanitize(body.source_url)

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email, and phone are required.' }, { status: 400 })
    }
    if (!address) {
      return NextResponse.json({ error: 'Property address is required.' }, { status: 400 })
    }
    if (!timeline) {
      return NextResponse.json({ error: 'Project timeline is required.' }, { status: 400 })
    }
    if (!message) {
      return NextResponse.json({ error: 'Project details are required.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 })
    }

    // Build full address string
    const fullAddress = [address, city, state, zip].filter(Boolean).join(', ') || null

    // ── 1. Persist to pipeline via SECURITY DEFINER RPC (anon key is sufficient) ──
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { auth: { persistSession: false } },
      )
      const { error: rpcError } = await supabase.rpc('intake_contact', {
        p_street:       address   || null,
        p_city:         city      || null,
        p_state:        state     || null,
        p_zip:          zip       || null,
        p_full_address: fullAddress,
        p_name:         name      || null,
        p_phone:        phone     || null,
        p_email:        email     || null,
        p_service:      service   || null,
        p_message:      message   || null,
        p_timeline:     timeline  || null,
        p_source_url:   sourceUrl || null,
      })
      if (rpcError) console.error('Pipeline intake error:', rpcError)
    } catch (dbError) {
      console.error('Pipeline intake error:', dbError)
    }

    // ── 2. Send notification email via Resend ─────────────────────────────────
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@advancedroofingmn.com',
        to:   'alsetsolutionsinc@gmail.com',
        subject: `New Lead: ${name} — ${service || 'General Inquiry'}`,
        text: [
          'New Lead from ARS Website',
          '',
          `Name:    ${name}`,
          `Email:   ${email}`,
          `Phone:   ${phone}`,
          address   ? `Address: ${address}`       : '',
          city      ? `City:    ${city}`           : '',
          state     ? `State:   ${state}`          : '',
          zip       ? `Zip:     ${zip}`            : '',
          '',
          `Service:  ${service || 'Not specified'}`,
          timeline  ? `Timeline: ${timeline}`      : '',
          sourceUrl ? `Source:   https://advancedroofingmn.com${sourceUrl}` : '',
          '',
          'Message:',
          message || 'No message provided',
        ].filter(Boolean).join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#A40F1A;border-bottom:2px solid #A40F1A;padding-bottom:10px;">
              New Lead — Advanced Roofing & Siding
            </h2>
            <div style="background:#f9fafb;padding:20px;border-radius:8px;margin:20px 0;">
              <h3 style="color:#111;margin-top:0;">Contact</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              ${address ? `<p><strong>Address:</strong> ${address}, ${city}, ${state}</p>` : ''}
            </div>
            <div style="background:#f9fafb;padding:20px;border-radius:8px;margin:20px 0;">
              <h3 style="color:#111;margin-top:0;">Service</h3>
              <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
              ${timeline  ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
              ${sourceUrl ? `<p><strong>Source page:</strong> <a href="https://advancedroofingmn.com${sourceUrl}" style="color:#A40F1A;">https://advancedroofingmn.com${sourceUrl}</a></p>` : ''}
            </div>
            ${message ? `
            <div style="background:#f9fafb;padding:20px;border-radius:8px;margin:20px 0;">
              <h3 style="color:#111;margin-top:0;">Message</h3>
              <p style="white-space:pre-wrap;">${message}</p>
            </div>` : ''}
            <p style="color:#9ca3af;font-size:12px;margin-top:30px;border-top:1px solid #e5e7eb;padding-top:15px;">
              Submitted from advancedroofingmn.com
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please call us directly at 763-427-3093.' },
      { status: 500 },
    )
  }
}
