import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Configured with Baraka Gas EmailJS account credentials
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_vmp05xl',
    TEMPLATES: {
        CONTACT: 'template_lmlehbq',      // Contact form submissions
        DEALER_LEAD: 'template_dw2ewcm',  // Dealer locator leads
        QUOTE: 'template_lmlehbq',        // Quote requests (using contact template for now)
        NEWSLETTER: 'template_lmlehbq',   // Newsletter subscriptions (using contact template for now)
    },
    PUBLIC_KEY: '0mWwM-9KqMF1Gatqd',
};

export interface EmailData {
    to_name?: string;
    from_name: string;
    from_email: string;
    phone?: string;
    message: string;
    subject?: string;
    location?: string;
    orderType?: string;
    cylinderSize?: string;
    quantity?: string;
    [key: string]: any; // Allow additional fields for quote details
}

export const sendEmail = async (data: EmailData, templateId?: string) => {
    // Use provided template ID or default to CONTACT template
    const template = templateId || EMAILJS_CONFIG.TEMPLATES.CONTACT;

    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            template,
            data,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        console.log('Email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
