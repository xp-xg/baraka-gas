import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Baraka Gas Ltd",
    description: "Disclaimer for Baraka Gas Ltd. Important information regarding our services and liability.",
};

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Disclaimer</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                    The information contained on the Baraka Gas Ltd website is for general information purposes only.
                </p>

                <h2>1. General Disclaimer</h2>
                <p>
                    Baraka Gas Ltd assumes no responsibility for errors or omissions in the contents on the Service. In no event shall Baraka Gas Ltd be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
                </p>
                <p>
                    Baraka Gas Ltd reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.
                </p>

                <h2>2. Product Disclaimer</h2>
                <p>
                    All product images shown are for illustration purposes only. Actual products may vary due to product enhancement. While we strive to ensure the accuracy of product descriptions and specifications, we do not warrant that they are error-free.
                </p>

                <h2>3. External Links Disclaimer</h2>
                <p>
                    The Baraka Gas Ltd website may contain links to external websites that are not provided or maintained by or in any way affiliated with Baraka Gas Ltd. Please note that the Baraka Gas Ltd does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>

                <h2>4. Safety Disclaimer</h2>
                <p>
                    LPG (Liquefied Petroleum Gas) is a flammable substance. While Baraka Gas Ltd provides safety guidelines and high-quality cylinders, the safe handling and usage of the product are the responsibility of the user. Baraka Gas Ltd is not liable for any accidents, injuries, or damages resulting from improper use, storage, or handling of our products.
                </p>

                <h2>5. Availability Disclaimer</h2>
                <p>
                    We strive to ensure our services are available at all times. However, we do not guarantee that our website or services will be uninterrupted, timely, secure, or error-free.
                </p>

                <p className="text-sm text-muted-foreground mt-8">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
