import React from 'react';

interface Product {
    position: number;
    name: string;
    description: string;
    image: string;
    sku?: string;
}

interface ProductListSchemaProps {
    products: Product[];
}

export function ProductListSchema({ products }: ProductListSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Baraka Gas LPG Products & Accessories',
        description: 'Complete range of LPG gas cylinders and safety accessories available in Kenya',
        itemListElement: products.map(product => ({
            '@type': 'Product',
            position: product.position,
            name: product.name,
            description: product.description,
            image: `https://barakagas.com${product.image}`,
            sku: product.sku || `BG-${product.position}`,
            brand: {
                '@type': 'Brand',
                name: 'Baraka Gas Ltd'
            },
            offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'KES',
                seller: {
                    '@type': 'Organization',
                    name: 'Baraka Gas Ltd',
                    url: 'https://barakagas.com'
                }
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
