'use client'

import React from 'react';
import Post from '../Post';

const slug = "demonstrating-skills"
const body = <div>
    <p>
        How can you demonstrate both technical skills and business understanding through your coding projects? Someone asked me a question in this area &ndash; here is an adaptation of a quick reply I gave. I may try to rewrite this into a more developed post in future, but for now it is very rough! I&apos;m trying to avoid points which I discussed in my <a href="internships">Internships</a> post, which was primarily about application processes. Instead, I&apos;ll be focusing on skills I think can help while actually working as a software engineer.
    </p>
    <p>
        For the technical side, I would recommend choosing the most challenging projects you can, and trying to use the latest tech. Make sure you're using tech and skills you actually want to learn, too! The way I see it, if you're always doing the most challenging thing you can manage, it will always reflect the best of your ability.
    </p>
    <p>
        You also want to make sure that the code quality is high - well structured, unit tested (perhaps integration tests), and so on. There are many resources on this, Clean Code by Robert Martin is a classic but also plenty of stuff on YouTube. This will ensure your code quality is high, expose you to important software engineering principles you'll use on the job, and be noticed by anyone looking through your code.
    </p>
    <p>
        I'd also say that it's important to pursue personal projects you're genuinely interested in. This will motivate you to do a good job, and also means you know what "good" is. You can look at your project from a customer perspective and try to meet your own high standards. This will also help a lot for the real-world impact side of things.
    </p>
    <p>
        For business needs, it's to try and good to understand why companies pursue certain projects and not others, where the money is being made, etc. Alongside customer thinking, I'd also try to quantify aspects of your projects if possible. For example, "Achieved 5000 downloads in 3 months", "Cut launch time by 35% by [doing some optimisation]", or "Maintained minimum unit test coverage of 80%".
    </p>
    <p>
        I also found the <a href="https://www.amazon.jobs/content/en/our-workplace/leadership-principles">Amazon Leadership Principles</a> useful in trying to learn about the business side. For the purposes of this post, you can ignore Hire and Develop the Best, Strive to be Earth&apos;s Best Employer, and Success and Scale Bring Broad Responsibility for personal projects, but I think the rest are relevant here.
    </p>
</div >

export default function Page() {
    return (
        <Post
            slug={slug}
            body={body}
        />
    );
};