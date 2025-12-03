import emailjs from '@emailjs/browser';

// TODO: Replace these with your actual EmailJS keys
// Get them from https://dashboard.emailjs.com/admin
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID',   // e.g., 'service_xyz'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g., 'template_abc'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',   // e.g., 'user_123'
};

export interface EmailData {
    to_name?: string;
    from_name: string;
    from_email: string;
    phone?: string;
    message: string;
    subject?: string;
    [key: string]: any; // Allow additional fields for quote details
}

export const sendEmail = async (data: EmailData) => {
    // Check if keys are configured
    if (
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
        console.warn('EmailJS keys are missing. Email simulation mode.');
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            data,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
