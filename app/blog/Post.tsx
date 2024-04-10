'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

export default function Post() {
    return (
        <div id="outer-container">
            <Sidebar />
            <div id="page-wrap">
                <h1><SidebarToggle />Title.</h1>
                <p><a href="/blog">Back to blog homepage</a>.</p>
                <p>
                    Body.
                </p>
            </div>
        </div>
    );
};