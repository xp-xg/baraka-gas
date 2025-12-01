import React from 'react';

interface Review {
    author: string;
    rating: number;
    reviewBody: string;
    datePublished?: string;
}

interface ReviewSchemaProps {
    itemName: string;
    reviews: Review[];
}

export function ReviewSchema({ itemName, reviews }: ReviewSchemaProps) {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: itemName,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: averageRating.toFixed(1),
            reviewCount: reviews.length,
            bestRating: '5',
            worstRating: '1'
        },
        review: reviews.map((review) => ({
            '@type': 'Review',
            author: {
                '@type': 'Person',
                name: review.author
            },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: '5',
                worstRating: '1'
            },
            reviewBody: review.reviewBody,
            ...(review.datePublished && { datePublished: review.datePublished })
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// For organization-level ratings
interface OrganizationReviewSchemaProps {
    organizationName: string;
    reviews: Review[];
}

export function OrganizationReviewSchema({ organizationName, reviews }: OrganizationReviewSchemaProps) {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: organizationName,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: averageRating.toFixed(1),
            reviewCount: reviews.length,
            bestRating: '5',
            worstRating: '1'
        },
        review: reviews.map((review) => ({
            '@type': 'Review',
            author: {
                '@type': 'Person',
                name: review.author
            },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: '5',
                worstRating: '1'
            },
            reviewBody: review.reviewBody,
            ...(review.datePublished && { datePublished: review.datePublished })
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
