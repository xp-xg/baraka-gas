import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Baraka Gas Ltd",
    description: "Privacy Policy for Baraka Gas Ltd. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                    At Baraka Gas Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We collect information that you provide directly to us, such as when you:
                </p>
                <ul>
                    <li>Request a quote or place an order.</li>
                    <li>Contact our customer support team.</li>
                    <li>Sign up for our newsletter or updates.</li>
                    <li>Use our dealer locator service.</li>
                </ul>
                <p>
                    This information may include your name, email address, phone number, delivery address, and payment information.
                </p>

                <h2>2. How We Use Your Information</h2>
                <p>
                    We use the information we collect to:
                </p>
                <ul>
                    <li>Process and fulfill your orders for LPG and related products.</li>
                    <li>Communicate with you about your orders, services, and promotional offers.</li>
                    <li>Improve our website, products, and services.</li>
                    <li>Comply with legal obligations.</li>
                </ul>

                <h2>3. Cookies and Tracking Technologies</h2>
                <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you use our site and allow us to remember your preferences. You can control cookie settings through your browser.
                </p>

                <h2>4. Data Sharing and Disclosure</h2>
                <p>
                    We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                </p>

                <h2>5. Data Security</h2>
                <p>
                    We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
                </p>

                <h2>7. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                    <strong>Baraka Gas Ltd</strong><br />
                    Email: info@barakagas.com<br />
                    Phone: +254 721 489 755
                </p>
                <p className="text-sm text-muted-foreground mt-8">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
