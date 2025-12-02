# Email Setup Guide

## Web3Forms Configuration (No API Keys Needed!)

All contact forms on the website send emails to `alsetsolutionsinc@gmail.com` with the subject "New Lead from ARS".

### Quick Setup (2 Minutes)

1. **Get Your Free Access Key**:
   - Go to https://web3forms.com
   - Enter your email: `alsetsolutionsinc@gmail.com`
   - Click "Get Access Key"
   - Copy the access key (it will be sent to your email)

2. **Add to Vercel**:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add `WEB3FORMS_ACCESS_KEY` = `[your access key from step 1]`
   - Redeploy your application

That's it! No Gmail passwords, no API keys, no complex setup.

### Why Web3Forms?

- ✅ **Free** - 250 submissions per month (more than enough)
- ✅ **No API Keys** - Just a simple access key
- ✅ **No SMTP Setup** - Works out of the box
- ✅ **Reliable** - Handles email delivery automatically
- ✅ **Spam Protection** - Built-in spam filtering

### Testing

After setting up the access key, test the contact form:
1. Fill out the form on any page
2. Submit the form
3. Check `alsetsolutionsinc@gmail.com` inbox
4. You should receive an email with subject "New Lead from ARS"

### Troubleshooting

- **"Email service is not configured"**: Make sure `WEB3FORMS_ACCESS_KEY` is set in Vercel environment variables
- **Emails not arriving**: Check spam folder, verify access key is correct
- **Need more submissions**: Upgrade at https://web3forms.com (free tier is 250/month)

### Forms Updated

All contact forms have been updated to send emails:
- `/contact` - Main contact page
- `/services/[service]/form` - Service-specific forms
- `/service-areas/[state]/[city]` - City service area forms

