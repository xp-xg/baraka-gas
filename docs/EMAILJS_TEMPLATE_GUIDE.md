# EmailJS Template Setup - Detailed Guide

This guide explains **exactly** how to set up email templates in EmailJS with detailed explanations of each field and variable.

---

## Understanding Email Template Variables

Email templates use **variables** (placeholders) that get replaced with actual data when an email is sent.

### Variable Format:
- Variables are wrapped in double curly braces: `{{variable_name}}`
- Example: `{{from_name}}` will be replaced with the actual sender's name

### Common Variables Used:
| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{{from_name}}` | Sender's name | "John Doe" |
| `{{from_email}}` | Sender's email | "john@example.com" |
| `{{phone}}` | Phone number | "+254 712 345 678" |
| `{{message}}` | Message content | "I need a quote for..." |
| `{{subject}}` | Email subject | "Product Inquiry" |
| `{{location}}` | User's location | "Nairobi, Westlands" |

---

## Template 1: Contact Form - Detailed Setup

### Step-by-Step:

1. **Go to EmailJS Dashboard** → Click "Email Templates"
2. **Click "Create New Template"**
3. **Fill in the template editor:**

#### Template Settings (Top Section):

**Template Name:** `Contact Form Submission`
- This is just for your reference in the dashboard
- Use a descriptive name so you know what it's for

#### Email Content Section:

**To Email:** 
- Enter: `info@barakagas.com` (or your business email)
- This is where contact form submissions will be sent

**From Name:**
- Enter: `{{from_name}}`
- This will show the customer's name as the sender

**From Email:**
- Enter: `{{from_email}}`
- This will show the customer's email

**Subject Line:**
- Enter: `New Contact Form - {{subject}}`
- Example result: "New Contact Form - Product Inquiry"

**Message Body:**
```
You have received a new contact form submission from the Baraka Gas website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     {{from_name}}
Email:    {{from_email}}
Phone:    {{phone}}
Subject:  {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from: https://barakagas.com/contact
Timestamp: {{timestamp}}
```

**What the received email will look like:**
```
From: John Doe <john@example.com>
To: info@barakagas.com
Subject: New Contact Form - Product Inquiry

You have received a new contact form submission from the Baraka Gas website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     John Doe
Email:    john@example.com
Phone:    +254 712 345 678
Subject:  Product Inquiry

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I would like to know more about your 13kg gas cylinders and delivery options in Westlands area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from: https://barakagas.com/contact
```

4. **Click "Save"**
5. **Copy the Template ID** (shown at the top, e.g., `template_abc123xyz`)

---

## Template 2: Quote Request - Detailed Setup

### Step-by-Step:

1. **Create New Template**
2. **Template Name:** `Quote Request`

#### Email Content:

**To Email:** `info@barakagas.com`

**From Name:** `{{from_name}}`

**From Email:** `{{from_email}}`

**Subject Line:** `New Quote Request - {{orderType}}`

**Message Body:**
```
🔔 NEW QUOTE REQUEST

A customer has requested a quote from the Baraka Gas website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name:        {{from_name}}
Email Address:    {{from_email}}
Phone Number:     {{phone}}
Delivery Location: {{location}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Order Type:       {{orderType}}
Cylinder Size:    {{cylinderSize}}
Quantity:         {{quantity}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ QUICK ACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Call Customer: {{phone}}
📧 Email Customer: {{from_email}}
📍 Location: {{location}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted from: https://barakagas.com/quote
Priority: Normal
```

**Example of received email:**
```
From: Jane Smith <jane@example.com>
To: info@barakagas.com
Subject: New Quote Request - Cylinder Refill

🔔 NEW QUOTE REQUEST

A customer has requested a quote from the Baraka Gas website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name:        Jane Smith
Email Address:    jane@example.com
Phone Number:     +254 722 123 456
Delivery Location: Karen, Nairobi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Order Type:       Cylinder Refill
Cylinder Size:    13kg
Quantity:         2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Need delivery by Friday. Please call before delivery.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ QUICK ACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Call Customer: +254 722 123 456
📧 Email Customer: jane@example.com
📍 Location: Karen, Nairobi
```

---

## Template 3: Newsletter Subscription - Detailed Setup

### Step-by-Step:

1. **Create New Template**
2. **Template Name:** `Newsletter Subscription`

#### Email Content:

**To Email:** `info@barakagas.com`

**From Name:** `Baraka Gas Website`

**From Email:** `noreply@barakagas.com` (or your domain)

**Subject Line:** `✉️ New Newsletter Subscriber`

**Message Body:**
```
📬 NEW NEWSLETTER SUBSCRIPTION

Someone just subscribed to the Baraka Gas newsletter!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 SUBSCRIBER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email Address: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Add this email to your newsletter mailing list
2. Send a welcome email to the subscriber
3. Include them in future promotional campaigns

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subscribed from: https://barakagas.com (Footer Newsletter Form)
Date: {{timestamp}}
```

**Example of received email:**
```
From: Baraka Gas Website <noreply@barakagas.com>
To: info@barakagas.com
Subject: ✉️ New Newsletter Subscriber

📬 NEW NEWSLETTER SUBSCRIPTION

Someone just subscribed to the Baraka Gas newsletter!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 SUBSCRIBER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email Address: customer@example.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Add this email to your newsletter mailing list
2. Send a welcome email to the subscriber
3. Include them in future promotional campaigns
```

---

## Template 4: Dealer Locator Lead - Detailed Setup

### Step-by-Step:

1. **Create New Template**
2. **Template Name:** `Dealer Locator Lead`

#### Email Content:

**To Email:** `info@barakagas.com`

**From Name:** `Baraka Gas Website`

**From Email:** `noreply@barakagas.com`

**Subject Line:** `📍 New Dealer Locator Lead`

**Message Body:**
```
🎯 NEW DEALER LOCATOR LEAD

A potential customer is looking for a dealer in their area!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 LEAD INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phone Number: {{phone}}
Location:     {{location}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ RECOMMENDED ACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 📞 Call the customer at: {{phone}}
2. 📍 Recommend nearest dealer in: {{location}}
3. 💼 Follow up within 24 hours for best conversion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ℹ️ CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This lead came from the "Coming Soon" dealer locator page.
The customer is interested in finding a nearby dealer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted from: https://barakagas.com/locator
Priority: High (Follow up ASAP)
```

**Example of received email:**
```
From: Baraka Gas Website <noreply@barakagas.com>
To: info@barakagas.com
Subject: 📍 New Dealer Locator Lead

🎯 NEW DEALER LOCATOR LEAD

A potential customer is looking for a dealer in their area!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 LEAD INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phone Number: +254 711 222 333
Location:     Mombasa, Nyali

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ RECOMMENDED ACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 📞 Call the customer at: +254 711 222 333
2. 📍 Recommend nearest dealer in: Mombasa, Nyali
3. 💼 Follow up within 24 hours for best conversion
```

---

## Testing Your Templates

After creating each template, you should test it:

### In EmailJS Dashboard:

1. **Click on the template** you just created
2. **Click "Test It" button** (top right)
3. **Fill in sample data:**
   ```
   from_name: Test User
   from_email: test@example.com
   phone: +254 700 000 000
   message: This is a test message
   subject: Test Subject
   location: Nairobi
   orderType: Cylinder Refill
   cylinderSize: 13kg
   quantity: 1
   ```
4. **Click "Send Test"**
5. **Check your email** (the one you set as "To Email")

### What to Check:
- ✅ Email arrives in your inbox
- ✅ All variables are replaced with actual values
- ✅ No `{{variable_name}}` placeholders remain
- ✅ Formatting looks good
- ✅ Subject line is correct

---

## Common Template Issues & Fixes

### Issue 1: Variables Not Replacing
**Problem:** Email shows `{{from_name}}` instead of actual name

**Solution:** 
- Make sure variable names match exactly (case-sensitive)
- Check that your code is sending the correct field names
- Example: If template uses `{{from_name}}`, code must send `from_name: "John"`

### Issue 2: Missing Data
**Problem:** Some fields are blank in the email

**Solution:**
- Check that your form is collecting that data
- Verify the field name matches the template variable
- Add default values in code: `phone: phone || "Not provided"`

### Issue 3: Email Goes to Spam
**Problem:** Emails end up in spam folder

**Solution:**
- Use a verified email service (Gmail, Outlook)
- Don't use suspicious words in subject line
- Keep "From Email" consistent
- Add your domain to EmailJS allowed domains

---

## Pro Tips for Better Templates

### 1. Use Emojis for Visual Clarity
```
📧 Email: {{from_email}}
📞 Phone: {{phone}}
📍 Location: {{location}}
```

### 2. Add Separators for Readability
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION TITLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3. Include Actionable Information
```
⚡ QUICK ACTIONS
📞 Call: {{phone}}
📧 Reply: {{from_email}}
```

### 4. Add Context
```
Submitted from: https://barakagas.com/contact
Priority: High
Follow-up required: Yes
```

### 5. Use Consistent Formatting
- Keep spacing consistent
- Align labels (use spaces)
- Use clear section headers

---

## Template Variables Reference

Here's a complete list of variables used across all forms:

| Variable | Used In | Description |
|----------|---------|-------------|
| `{{from_name}}` | All forms | Customer's name |
| `{{from_email}}` | All forms | Customer's email |
| `{{phone}}` | Contact, Quote, Locator | Phone number |
| `{{message}}` | Contact, Quote | Message/notes |
| `{{subject}}` | Contact | Inquiry subject |
| `{{location}}` | Quote, Locator | Delivery/area location |
| `{{orderType}}` | Quote | Type of order |
| `{{cylinderSize}}` | Quote | Gas cylinder size |
| `{{quantity}}` | Quote | Order quantity |
| `{{timestamp}}` | All (auto) | Submission time |

---

## Next Steps

After setting up all templates:

1. ✅ Save all Template IDs
2. ✅ Test each template with sample data
3. ✅ Update `/lib/email-service.ts` with your IDs
4. ✅ Test all website forms
5. ✅ Monitor emails for a few days
6. ✅ Adjust templates as needed

---

**Need help?** Review the main setup guide at `/docs/EMAILJS_SETUP.md`
