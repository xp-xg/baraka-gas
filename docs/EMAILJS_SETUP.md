# EmailJS Setup Guide for Baraka Gas

This guide will help you configure EmailJS to enable email functionality for contact forms, quote requests, newsletter subscriptions, and dealer locator leads.

## Overview

The website uses EmailJS to send emails for:
- Contact form submissions
- Quote requests (cylinders and bulk LPG)
- Newsletter subscriptions
- Dealer locator lead generation

All emails are currently in **simulation mode** until you configure your EmailJS account.

---

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create a free account (allows 200 emails/month)
4. Verify your email address

---

## Step 2: Add Email Service

1. **Login to EmailJS Dashboard**: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Click **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook/Office 365**
   - **Custom SMTP** (for business email like info@barakagas.com)

### For Gmail:
- Click **"Gmail"**
- Click **"Connect Account"**
- Sign in with your Gmail account
- Allow EmailJS permissions
- Give it a Service ID (e.g., `service_baraka_gas`)
- Click **"Create Service"**

### For Custom SMTP (Business Email):
- Click **"Custom SMTP"**
- Enter your SMTP settings:
  - **SMTP Server**: Your email provider's SMTP server
  - **Port**: Usually 587 (TLS) or 465 (SSL)
  - **Username**: Your email address (e.g., info@barakagas.com)
  - **Password**: Your email password
- Click **"Create Service"**

> **Note**: Save your **Service ID** - you'll need it later!

---

## Step 3: Create Email Templates

You need to create **4 email templates** for different purposes.

### Template 1: Contact Form

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. **Template Name**: `Contact Form Submission`
4. **Template Content**:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from Baraka Gas Website Contact Form
```

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_contact_abc123`)

### Template 2: Quote Request

1. Create another new template
2. **Template Name**: `Quote Request`
3. **Template Content**:

```
Subject: New Quote Request - {{orderType}}

Customer Details:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Location: {{location}}

Order Details:
Type: {{orderType}}
Cylinder Size: {{cylinderSize}}
Quantity: {{quantity}}

Additional Notes:
{{message}}

---
Sent from Baraka Gas Website Quote Form
```

4. Click **"Save"**
5. **Copy the Template ID**

### Template 3: Newsletter Subscription

1. Create another new template
2. **Template Name**: `Newsletter Subscription`
3. **Template Content**:

```
Subject: New Newsletter Subscription

A new user has subscribed to the newsletter:

Email: {{from_email}}

---
Sent from Baraka Gas Website Newsletter Form
```

4. Click **"Save"**
5. **Copy the Template ID**

### Template 4: Dealer Locator Lead

1. Create another new template
2. **Template Name**: `Dealer Locator Lead`
3. **Template Content**:

```
Subject: New Dealer Locator Lead

A user is interested in finding a dealer:

Phone: {{phone}}
Location: {{location}}

---
Sent from Baraka Gas Website Dealer Locator
```

4. Click **"Save"**
5. **Copy the Template ID**

---

## Step 4: Get Your Public Key

1. Click **"Account"** in the left sidebar
2. Find **"API Keys"** section
3. Copy your **Public Key** (starts with something like `user_...`)

---

## Step 5: Configure the Website

Now you need to update the website code with your EmailJS credentials.

### Option A: Single Template (Simpler)

If you want to use **one template for all emails**, update `/lib/email-service.ts`:

```typescript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_baraka_gas',      // Your Service ID from Step 2
    TEMPLATE_ID: 'template_contact_abc123', // Your Template ID from Step 3
    PUBLIC_KEY: 'user_xyz123abc',          // Your Public Key from Step 4
};
```

### Option B: Multiple Templates (Recommended)

For better organization, you can use different templates for different forms. Update `/lib/email-service.ts`:

```typescript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_baraka_gas',
    TEMPLATES: {
        CONTACT: 'template_contact_abc123',
        QUOTE: 'template_quote_def456',
        NEWSLETTER: 'template_newsletter_ghi789',
        DEALER_LEAD: 'template_dealer_jkl012',
    },
    PUBLIC_KEY: 'user_xyz123abc',
};

// Update the sendEmail function to accept template ID
export const sendEmail = async (data: EmailData, templateId?: string) => {
    const template = templateId || EMAILJS_CONFIG.TEMPLATES.CONTACT;
    
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
        console.warn('EmailJS keys are missing. Email simulation mode.');
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            template,
            data,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
```

---

## Step 6: Test Your Setup

1. **Save all changes**
2. **Restart the dev server**: `npm run dev`
3. **Test each form**:
   - Contact form at `/contact`
   - Quote form at `/quote`
   - Newsletter subscription in the footer
   - Dealer locator at `/locator`

4. **Check your email** - you should receive emails at the address configured in your EmailJS service

---

## Troubleshooting

### Emails Not Sending?

1. **Check Console**: Open browser DevTools (F12) → Console tab
   - Look for EmailJS errors
   - Verify no "simulation mode" warnings

2. **Verify Credentials**:
   - Service ID is correct
   - Template IDs match your EmailJS dashboard
   - Public Key is correct

3. **Check EmailJS Dashboard**:
   - Go to **"Email Logs"** to see sent emails
   - Check for error messages

### Common Issues:

**"Invalid template ID"**
- Double-check your template IDs in the EmailJS dashboard
- Make sure you copied them correctly

**"Service not found"**
- Verify your Service ID
- Make sure the service is active in EmailJS dashboard

**"Public key is invalid"**
- Get a fresh copy of your public key from Account settings
- Make sure there are no extra spaces

**Emails going to spam**
- Add your domain to EmailJS allowed domains
- Use a verified email service (Gmail, Outlook, etc.)

---

## Email Limits

### Free Plan:
- **200 emails/month**
- **2 email services**
- **Unlimited templates**

### If You Need More:
- Upgrade to a paid plan at [EmailJS Pricing](https://www.emailjs.com/pricing/)
- Or use a different email service (SendGrid, AWS SES, etc.)

---

## Security Notes

⚠️ **Important**:
- Never commit your EmailJS credentials to public repositories
- The Public Key is safe to use in client-side code
- Keep your Service ID and Template IDs in environment variables for production

### For Production (Optional):

Create a `.env.local` file:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_baraka_gas
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact_abc123
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xyz123abc
```

Update `/lib/email-service.ts`:
```typescript
export const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};
```

---

## Next Steps

After setting up EmailJS:

1. ✅ Test all forms thoroughly
2. ✅ Set up email forwarding rules (if needed)
3. ✅ Monitor email usage in EmailJS dashboard
4. ✅ Consider upgrading if you exceed 200 emails/month
5. ✅ Set up auto-reply templates (optional)

---

## Support

- **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support**: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Need help?** Contact your developer or refer to the EmailJS documentation.
