
'use client'

import { useRouter, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';
import { Sidebar, SidebarToggle } from '../../Sidebar';

interface BlogPost {
    slug: string;
    title: string;
    body: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (!params.slug || typeof window === 'undefined') return;

        async function fetchPost() {
            try {
                const res = await fetch(`/blog/${params.slug}`);
                const postData = await res.json();
                setPost(postData);
            } catch (error) {
                console.error('Error fetching blog post:', error);
            }
        }

        fetchPost();
    }, [params.slug]);

    if (!post) {
        return notFound();
    }

    return (
        <div id="outer-container">
            <Sidebar />
            <div id="page-wrap">
                <h1>
                    <SidebarToggle /> {post.title}
                </h1>
                <p>
                    <a href="/blog">Back to blog homepage</a>.
                </p>
                <p>{post.body}</p>
            </div>
        </div>
    );
}