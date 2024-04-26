'use client'

import React from 'react';
import Post from '../Post';

const slug = "uncertainty"
const body = <div>
  <h3>Mathematical Certainty</h3>
  <p>I&apos;ve always been interested in science and technology, but my first formal academic interest &ndash; many years before I started programming &ndash; was mathematics. I can&apos;t be sure looking back, but as I recall I was drawn strongly to the idea that mathematics somehow provides absolute truth and certainty.</p>
  <p>Nothing I encountered across my education seemed as certain or irrefutable as a mathematical proof of a statement or theorem. Even mathematical areas dedicated studying randomness, estimation and error, such as probability theory or numerical analysis, allow you to make and prove very definite, incontrovertible statements about uncertainty in various ways &ndash; at least, uncertainty as defined by these mathematical theories.</p>
  <p>My understanding is that many people interested in mathematics feel this way, and that links can even be drawn from these ideas back to the Ancient Greeks and <a href="https://en.wikipedia.org/wiki/Theory_of_forms">Platonic idealism</a>, if not before. And while Gödel&apos;s <a href="https://en.wikipedia.org/wiki/Gödel's_incompleteness_theorems">incompleteness theorems</a> famously cast much doubt on this notion of mathematical certitude, I would tend to consider myself (if only for reasons of faith) a believer in the power of mathematics to prove genuine mathematical truths &ndash; whatever that means, exactly.</p>
  <h3>The Real World</h3>
  <p>With that all said, however, I am not a professional mathematician, but an aspiring software engineer. And unfortunately, it seems that the moment you step outside the pristine world of mathematics, all claims to absolute knowledge and certainty go completely out the window. In fact, in the real world, I fear that the apparent certainty that misapplied mathematics can seem to provide can be profoundly misleading, or even dangerous.</p>
  <p>Many people far more qualified to speak on this subject than me, including <a href="https://www.fooledbyrandomness.com/crisis.pdf">Nassim Taleb</a> and <a href="https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction">Cathy O&apos;Neil</a>, have examined these issues in great depth. Such subjects frequently provoke heated debate and disagreement between those who agree with a given mathematical model and those who do not. I think this is well illustrated by this quote from the late <a href="https://en.wikipedia.org/wiki/Charlie_Munger">Charlie Munger</a>, vice chairman of Berkshire Hathaway, on the <a href="https://en.wikipedia.org/wiki/Efficient-market_hypothesis">Efficent Market Hypothesis (EMH)</a>:
  </p>
  <blockquote> <p> &quot;I have a name for people who went to the extreme efficient market theory—which is &apos;bonkers.&apos; It was an intellectually consistent theory that enabled them to do pretty mathematics. So I understand its seductiveness to people with large mathematical gifts. It just had a difficulty in that the fundamental assumption did not tie properly to reality.&quot;</p>
  <footer><a href="https://25iq.com/2015/09/05/a-dozen-things-ive-learned-from-charlie-munger-about-risk-2/">Source</a> - quoted by Tren Griffin, author of Charlie Munger: The Complete Investor.</footer>
</blockquote>
<p>I shan&apos;t comment on the correctness of Munger&apos;s statement as applied to the EMH in this instance. But what he is describing, namely, mapping an inadequate mathematical model to reality and drawing erroneous conclusions as a result, is something which I would very much like to avoid across the course of my career.</p>
<h3>Two Strategies &ndash; Science and Business</h3>

To be completed.

</div>

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};