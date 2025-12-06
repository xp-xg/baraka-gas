import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${post.title} | Baraka Gas Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
                    </Link>
                </Button>

                <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-2 text-primary font-medium">
                        <span className="bg-primary/10 px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b pb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {post.readTime}
                        </div>
                    </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t flex justify-between items-center">
                    <div className="text-muted-foreground">
                        Share this article:
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon">
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}
