'use client'

import React, { ReactNode } from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';
import { blogPosts } from './page';

interface PostProps {
    slug: string;
    body: ReactNode;
}

const Post: React.FC<PostProps> = ({ slug, body }) => {

    const post = blogPosts.find(post => post.slug === slug);

    const title = post ? post.title : '404';
    const date = post ? post.date : 'Post not found';

    return (
        <div id="outer-container">
            <Sidebar />
            <div id="page-wrap">
                <h1><SidebarToggle />{title}. {date}.</h1>
                <p><a href="/blog">Back to blog homepage</a>.</p>
                {body}
            </div>
        </div>
    );
};

export default Post;