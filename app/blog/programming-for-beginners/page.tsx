'use client'

import React from 'react';
import Post from '../Post';

const slug = "programming-for-beginners"
const body = <div>
    <p>Someone asked me what I would recommend for people interested in software engineering with no programming background. Since I studied programming as part of my university course, I may not be the best qualified person to answer this question &ndash; people who taught themselves from scratch might know better than me.However, I will share a few thoughts and resources in case it is of any use.</p>
    <p>[TBC.]</p>
</div>

export default function Page() {
    return (
        <Post
            slug={slug}
            body={body}
        />
    );
};