import React from 'react';

export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Baraka Gas Ltd',
        legalName: 'Baraka Gas Ltd',
        slogan: 'Clean & Reliable Cooking Partner',
        url: 'https://barakagas.com',
        logo: 'https://barakagas.com/images/logo.jpg',
        foundingDate: '2018',
        founder: {
            '@type': 'Person',
            name: 'Jack Kimwele'
        },
        description: 'Leading provider of safe, reliable, and affordable LPG solutions in Kenya. Established in 2018, we specialize in residential delivery, bulk commercial solutions, and industrial LPG supply.',
        email: 'info@barakagas.com',
        telephone: '+254721489755',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'P.O. Box 26806-00100',
            addressLocality: 'Nairobi',
            addressCountry: 'KE'
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+254721489755',
                contactType: 'customer service',
                areaServed: 'KE',
                availableLanguage: ['English', 'Swahili']
            },
            {
                '@type': 'ContactPoint',
                telephone: '+254722240086',
                contactType: 'customer service',
                areaServed: 'KE',
                availableLanguage: ['English', 'Swahili']
            },
            {
                '@type': 'ContactPoint',
                telephone: '+254721489755',
                contactType: 'emergency',
                areaServed: 'KE',
                availableLanguage: ['English', 'Swahili']
            }
        ],
        areaServed: {
            '@type': 'Country',
            name: 'Kenya'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
