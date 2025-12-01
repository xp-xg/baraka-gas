import React from 'react';

interface ProductSchemaProps {
    name: string;
    description: string;
    price: string;
    image: string;
    sku: string;
}

export function ProductSchema({ name, description, price, image, sku }: ProductSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image: `https://barakagas.com${image}`,
        sku,
        brand: {
            '@type': 'Brand',
            name: 'Baraka Gas'
        },
        offers: {
            '@type': 'Offer',
            price: price.replace(/[^0-9]/g, ''),
            priceCurrency: 'KES',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Organization',
                name: 'Baraka Gas Ltd'
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
