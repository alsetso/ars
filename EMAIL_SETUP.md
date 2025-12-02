# Email Setup Guide

## Simple Mailto Solution (No Setup Required!)

All contact forms on the website use **mailto links** to send emails to `alsetsolutionsinc@gmail.com` with the subject "New Lead from ARS".

### How It Works

When a user submits a form:
1. The form data is formatted into an email message
2. The user's default email client opens automatically
3. The email is pre-filled with:
   - **To:** alsetsolutionsinc@gmail.com
   - **Subject:** New Lead from ARS
   - **Body:** All form data (name, email, phone, service, message, etc.)
4. The user clicks "Send" in their email client

### No Setup Required!

✅ **No API keys**  
✅ **No SMTP configuration**  
✅ **No third-party services**  
✅ **No environment variables**  
✅ **Works immediately**

### User Experience

- On desktop: Opens default email client (Mail, Outlook, Gmail, etc.)
- On mobile: Opens default email app
- If no email client: User can copy the email address and send manually

### Forms Updated

All contact forms have been updated:
- `/contact` - Main contact page
- `/services/[service]/form` - Service-specific forms
- `/service-areas/[state]/[city]` - City service area forms

### Email Format

The pre-filled email includes:
- Contact Information (name, email, phone, address, city, state)
- Service Information (service needed, timeline)
- Message/Project Details

All formatted clearly for easy reading.

