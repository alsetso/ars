# Email Setup Guide

## Resend API Configuration

All contact forms on the website send emails via Resend API to `alsetsolutionsinc@gmail.com` with the subject "New Lead from ARS".

### Required Environment Variable

You need to set the following environment variable:

```
RESEND_API_KEY=your-resend-api-key-here
```

### Setup Instructions

1. **Get Your Resend API Key**:
   - Sign up at https://resend.com
   - Go to API Keys section
   - Create a new API key
   - Copy the key

2. **Add to Environment Variables**:
   - **Local Development**: Add to `.env.local` file:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     ```
   - **Vercel Production**: 
     - Go to your Vercel project settings
     - Navigate to "Environment Variables"
     - Add `RESEND_API_KEY` = `[your API key]`
     - Redeploy your application

3. **Verify Domain (for production)**:
   - In Resend dashboard, add and verify `autamn.com` domain
   - This allows sending from `noreply@autamn.com`

### Email Configuration

- **From:** noreply@autamn.com
- **To:** alsetsolutionsinc@gmail.com
- **Subject:** New Lead from ARS

### Forms Updated

All contact forms have been updated:
- `/contact` - Main contact page
- `/services/[service]/form` - Service-specific forms
- `/service-areas/[state]/[city]` - City service area forms

### Email Format

The email includes:
- Contact Information (name, email, phone, address, city, state)
- Service Information (service needed, timeline)
- Message/Project Details

All formatted in HTML for easy reading.

### Testing

After setting up the API key:
1. Fill out a contact form
2. Submit the form
3. Check `alsetsolutionsinc@gmail.com` inbox
4. You should receive an email with subject "New Lead from ARS"

### Troubleshooting

- **"Email service is not configured"**: Make sure `RESEND_API_KEY` is set in environment variables
- **Authentication failed**: Verify your API key is correct
- **Emails not arriving**: Check spam folder, verify domain is verified in Resend dashboard

