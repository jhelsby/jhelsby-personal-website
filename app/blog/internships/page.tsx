'use client'

import React from 'react';
import Post from '../Post';

const slug = "internships"
const body = <div>
    <h2>Internship Applications</h2>
    <p>I&apos;m very fortunate to be undertaking a Software Development Engineer internship at Amazon London at the moment. Since I started, a few people have asked me if I have any tips on how they might secure a similar role. I don&apos;t know how qualified I am to answer such a question, but would like to help if I can.</p>
    <p>I found that I was repeating myself in these conversations, so I thought I would gather my general suggestions together here. Please note that they are intended for software engineering internships only. If you have further questions after reading this through, feel free to <a href="/contact">get in touch</a>.</p>
    <p>One final point before I begin: in my view, staying balanced is more important than any of the points below, and will help you perform better in the long run. Please prioritise your wellbeing above LeetCode!</p>
    <h3>Securing an Interview</h3>
    Here are some points you may wish to consider while trying to secure an interview. You may consider some or all of these to be extremely obvious 😄
    <ul>
        <li>Perfect your CV. There are many resources on how to do this, for example <a href="https://formation.dev/blog/software-engineer-resume-guide-examples/">this article</a> from a former Google and Facebook recruiter. The points below may also provide material to include on there. (Note: the article recommends using a one-page CV, but in the UK my understanding is that two pages is fine.) </li>
        <li>If at university, try to get the best grades that you can. I think that both the grades and the knowledge will help you!</li>
        <li>Work seriously on coding projects, whether in your spare time or at university. For example, solving a real-world problem from end-to-end (building, testing, deploying etc.). Put a good amount of your work on GitHub.</li>
        <li>Consider developing a portfolio website &apos; some application processes request these.</li>
        <li>Pursue your tech interests, whether through practical experience, blogs, books, projects or elsewhere. Embrace your curiosity and learn as much as possible.</li>
        <li>Participate in hackathons.</li>
        <li>Keep an eye out for further opportunities, such as career events, conferences (in-person or virtual), and company events.</li>
        <li>Get some leadership and teamwork experience.</li>
        <li>Consider taking certifications you are interested in.</li>
        <li>If possible to obtain, employee referrals can be very valuable.</li>
    </ul>
    <h3>The Interview Process</h3>
    <h4>Behavioural Interviews</h4>
    <p>There are many good resources out there for behavioural interviews, so I don&apos;t have too much to say here. One thing I would suggest is not to neglect this portion of the process just because you are applying for a technical role. If you have worked hard on your CV and projects to get the interview, you will have a lot of good material to discuss in this section &ndash; you just need to make sure you present it in the best way that you can. Another thing which I think might be useful is to try to develop, and demonstrate, a level of interest and understanding in the business side of the tech industry &apos; even if you much prefer coding.</p>
    <p>I found these articles useful to prepare for the behavioural part of the interview process, among others: <a href="https://www.aboutamazon.com/news/workplace/amazon-interview-best-tips">An Amazon recruiting manager offers his 3 best tips for a successful job interview</a>, and <a href="https://www.google.com/about/careers/applications/interview-tips/">Interviewing at Google: best practices, advice, and tips</a>.</p>
    <h4>Coding Interviews</h4>
    <p>I think it can be good to start preparing for coding interviews as soon as possible, as they can be very challenging. Here are some resources I found useful:</p>
    <ul>
        <li>Like many people, I learned the basics of Data Structures & Algorithms for coding interviews from <a href="https://www.crackingthecodinginterview.com/">Cracking the Coding Interview</a>, and used LeetCode, the Blind 75, and NeetCode 150 on <a href="https://neetcode.io/practice">NeetCode to practice</a>.</li>
        <li>I also thought the book <a href="https://elementsofprogramminginterviews.com/">Elements of Programming Interviews</a> was extremely good, from what I&apos;ve read so far. I think it is more advanced than certain other resources I have encountered.</li>
        <li>I found the article <a href="https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed">14 Patterns to Ace Any Coding Interview Question</a> helpful.</li>
        <li>I find the free flashcard software <a href="https://apps.ankiweb.net/">Anki</a> very useful for memorising things.</li>
    </ul>
    <p>Alongside practicing the problems themselves, it may be worth practicing the process of solving them in front of someone. I found <a href="https://www.youtube.com/watch?v=XKu_SEDAykw">this mock interview video</a> from Google useful in that respect.</p>
    <p>Finally, I have the sense that what works for one person may not for another with coding interview preparation. There is a lot of preparation material online written or recorded by technology companies, or experienced engineers who have been through the interview process countless times &ndash; I would suggest looking around and seeing what works for you.</p>
    <p>Good luck! If you are persistent, I think you will be amazed at how much progress you make &endash; even if you find these problems difficult or impossible to begin with.</p>
    <h3>Amazon</h3>
    <p>I believe the exact application and interview process for roles at Amazon can vary between teams, so I am unsure how relevant my personal experience would be for you. With that said, my application process involved submitting my CV, a few online coding assessments, and behavioural and technical interviews - and I would definitely recommend studying Amazon&apos;s <a href="https://www.aboutamazon.co.uk/who-we-are/leadership-principles">Leadership Principles</a> for the behavioural component.</p>
    <p>I found Amazon&apos;s own resources very helpful to prepare. In particular, <a href="https://www.amazon.jobs/en-gb/landing_pages/interviewing-at-amazon"> Interviewing at Amazon</a> and <a href="https://www.aboutamazon.com/news/workplace/amazon-internship-tips-for-students-and-recent-grads">Amazon internship tips for students and recent grads</a>.</p>
</div >

export default function Page() {
    return (
        <Post
            slug={slug}
            body={body}
        />
    );
};