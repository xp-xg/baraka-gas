import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use | Baraka Gas Ltd",
    description: "Terms of Use for Baraka Gas Ltd. Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Use</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                    Welcome to Baraka Gas Ltd. By accessing or using our website, you agree to be bound by these Terms of Use. Please read them carefully.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>

                <h2>2. Service Description</h2>
                <p>
                    Baraka Gas Ltd provides LPG products, accessories, and delivery services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
                </p>

                <h2>3. User Responsibilities</h2>
                <p>
                    You agree to use our website and services only for lawful purposes. You are prohibited from:
                </p>
                <ul>
                    <li>Using the site in any way that violates any applicable local, national, or international law.</li>
                    <li>Attempting to gain unauthorized access to any portion of the website or any other systems or networks connected to the website.</li>
                    <li>Interfering with or disrupting the operation of the website or servers.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>
                    The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
                </p>

                <h2>5. Warranties and Liability</h2>
                <p>
                    The information and services on this site are provided on an "as is," "as available" basis. Baraka Gas Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                    In no event shall Baraka Gas Ltd be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Baraka Gas Ltd's website.
                </p>

                <h2>6. Indemnification</h2>
                <p>
                    You agree to indemnify, defend, and hold harmless Baraka Gas Ltd, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services.
                </p>

                <h2>7. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>

                <h2>8. Contact Information</h2>
                <p>
                    Questions about the Terms of Use should be sent to us at legal@barakagas.com.
                </p>
                <p className="text-sm text-muted-foreground mt-8">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
