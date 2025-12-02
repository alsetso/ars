# Email Setup Guide

## Gmail SMTP Configuration

All contact forms on the website send emails to `alsetsolutionsinc@gmail.com` with the subject "New Lead from ARS".

### Required Environment Variables

You need to set the following environment variables in your Vercel project (or `.env.local` for local development):

```
GMAIL_USER=alsetsolutionsinc@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password-here
```

### How to Get a Gmail App Password

1. **Enable 2-Step Verification** on your Google account:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter "ARS Website" as the name
   - Click "Generate"
   - Copy the 16-character password (spaces don't matter)

3. **Add to Vercel**:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add `GMAIL_USER` = `alsetsolutionsinc@gmail.com`
   - Add `GMAIL_APP_PASSWORD` = `[the 16-character app password]`
   - Redeploy your application

### Testing

After setting up the environment variables, test the contact form:
1. Fill out the form on any page
2. Submit the form
3. Check `alsetsolutionsinc@gmail.com` inbox
4. You should receive an email with subject "New Lead from ARS"

### Troubleshooting

- **"Email service is not configured"**: Make sure `GMAIL_APP_PASSWORD` is set in environment variables
- **Authentication failed**: Verify you're using an App Password, not your regular Gmail password
- **Emails not arriving**: Check spam folder, verify email address is correct

### Forms Updated

All contact forms have been updated to send emails:
- `/contact` - Main contact page
- `/services/[service]/form` - Service-specific forms
- `/service-areas/[state]/[city]` - City service area forms

