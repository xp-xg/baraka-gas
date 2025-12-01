import React from 'react';

interface LocalBusinessProps {
    name: string;
    streetAddress: string;
    addressLocality: string;
    postalCode?: string;
    telephone: string[];
    latitude?: number;
    longitude?: number;
}

export function LocalBusinessSchema({
    name,
    streetAddress,
    addressLocality,
    postalCode,
    telephone,
    latitude,
    longitude
}: LocalBusinessProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `https://barakagas.com/#${addressLocality.toLowerCase().replace(/\s+/g, '-')}`,
        name: `Baraka Gas Ltd - ${name}`,
        image: 'https://barakagas.com/images/logo.jpg',
        address: {
            '@type': 'PostalAddress',
            streetAddress,
            addressLocality,
            postalCode,
            addressCountry: 'KE'
        },
        telephone: telephone[0],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '17:30'
            }
        ],
        priceRange: 'KSh 1,200 - KSh 15,000',
        ...(latitude && longitude && {
            geo: {
                '@type': 'GeoCoordinates',
                latitude,
                longitude
            }
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
