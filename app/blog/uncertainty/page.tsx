'use client'

import React from 'react';
import Post from '../Post';

const slug = "uncertainty"
const body = <div>
  <h2>Mathematical Certainty</h2>
  <p>My first formal academic interest &ndash; many years before I started programming &ndash; was mathematics. I can&apos;t be sure looking back, but as I recall I was drawn strongly to the idea that mathematics somehow provides absolute truth and certainty.</p>
  <p>Nothing I encountered across my education seemed as certain or irrefutable as a mathematical proof of a statement or theorem. Even mathematical areas dedicated studying randomness, estimation and error, such as probability theory or numerical analysis, allow you to make and prove very definite, incontrovertible statements about uncertainty in various ways &ndash; at least, uncertainty as defined by these mathematical theories.</p>
  <p>My understanding is that many people interested in mathematics feel this way, and that links can even be drawn from these ideas back to the Ancient Greeks and <a href="https://en.wikipedia.org/wiki/Theory_of_forms">Platonic idealism</a>, if not before. And while Gödel&apos;s <a href="https://en.wikipedia.org/wiki/Gödel's_incompleteness_theorems">incompleteness theorems</a> famously cast much doubt on this notion of mathematical certitude, I would tend to consider myself (if only for reasons of faith) a believer in the power of mathematics to prove genuine mathematical truths &ndash; whatever that means, exactly.</p>
  <h2>The Real World</h2>
  <p>With that all said, however, I am not a professional mathematician, but an aspiring software engineer. And unfortunately, it seems that the moment you step outside the pristine world of mathematics, all claims to absolute knowledge and certainty go completely out the window. In fact, in the real world, I fear that the apparent certainty that misapplied mathematics can seem to provide can be profoundly misleading, or even dangerous.</p>
  <p>Many people far more qualified to speak on this subject than me, including <a href="https://www.fooledbyrandomness.com/crisis.pdf">Nassim Taleb</a> and <a href="https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction">Cathy O&apos;Neil</a>, have examined these issues in great depth. Such subjects frequently provoke heated debate and disagreement between those who agree with a given mathematical model and those who do not. I think this is well illustrated by this quote from <a href="https://en.wikipedia.org/wiki/Charlie_Munger">Charlie Munger</a>, vice chairman of Berkshire Hathaway, on the <a href="https://en.wikipedia.org/wiki/Efficient-market_hypothesis">Efficent Market Hypothesis (EMH)</a>:
  </p>
  <blockquote> <p> &quot;I have a name for people who went to the extreme efficient market theory—which is &apos;bonkers.&apos; It was an intellectually consistent theory that enabled them to do pretty mathematics. So I understand its seductiveness to people with large mathematical gifts. It just had a difficulty in that the fundamental assumption did not tie properly to reality.&quot;</p>
    <footer><a href="https://25iq.com/2015/09/05/a-dozen-things-ive-learned-from-charlie-munger-about-risk-2/">Source</a> - quoted by Tren Griffin, author of <i>Charlie Munger: The Complete Investor</i>.</footer>
  </blockquote>
  <p>I shan&apos;t comment on the correctness of Munger&apos;s statement as applied to the EMH in this instance. But the issue he describes, that of mapping an inadequate mathematical model to reality and drawing erroneous conclusions as a result, is something which I would very much like to avoid across the course of my career.</p>
  <h2>Strategies</h2>
  <p>I shall briefly examine a few strategies for how to operate in an uncertain world, taken from science, engineering and business. On the face of it, business may seem rather separate from the other two &ndash; but I am hoping to work in the technology industry, where it could be argued that all three fields work in tandem. Furthermore, from my limited reading, I believe each of these three cultures have unique things to offer in addressing the problem of uncertainty.</p>
  <p>Rather than trying and failing to summarise each of these incredibly vast subjects in a couple of paragraphs, I thought I&apos;d use the remainder of this post to list a few relevant resources for further reading. I&apos;ll keep this list updated should I come across anything new and interesting in future.</p>
  <h3>Science</h3>
  <p>My understanding of how science is able to make concrete progress in the face of uncertainty is simply the <a href="https://en.wikipedia.org/wiki/Scientific_method">scientific method</a>. Some additional resources:</p>
  <ul>
    <li>I am currently reading philosopher of science Karl Popper&apos;s book <a href="https://en.wikipedia.org/wiki/The_Logic_of_Scientific_Discovery">The Logic of Scientific Discovery</a>, examining the nature of scientific methodology and discovery.</li>
    <li><a href="https://books.google.co.uk/books/about/Einstein_s_Luck.html?id=Q944_kVKfqcC&source=kp_book_description&redir_esc=y">Einstein&apos;s Luck</a>, by historian John Waller, examines the role that myth, ambition and dishonesty has played in the history of science.</li>
    <li>Nassim Taleb&apos;s <a href="https://en.wikipedia.org/wiki/Nassim_Nicholas_Taleb#Incerto">Incerto</a> collection is devoted to the study of uncertainty in a world we don&apos;t understand.</li>
    <li>Ed Thorp&apos;s memoir <a href="https://www.edwardothorp.com/books/a-man-for-all-markets/">A Man For All Markets</a>. Thorp is a mathematics professor who invented card-counting and a pioneer in market-neutral hedging. Among other things, I found his life story and his views on handling risk very interesting. </li>
  </ul>
  <h3>Engineering</h3>
  <p>Though less well-known, some see the <a href="https://en.wikipedia.org/wiki/Engineering_design_process">engineering design process</a> as a sort of engineering equivalent of the scientific method. I really need to study this more before I can say anything about it, though.</p>
  <p>While the resources listed below are not specifically devoted to handling uncertainty, the process of building systems that never existed before requires the writers to grapple with this problem in a very hands-on fashion.</p>
  <ul>
    <li>Though it is certainly not a typical engineering book, I would recommend Nikola Tesla&apos;s remarkable autobiography <a href="https://en.wikipedia.org/wiki/My_Inventions:_The_Autobiography_of_Nikola_Tesla">My Inventions</a> to anyone remotely interested in Tesla&apos;s life or contributions to the world. It is an extremely unusual read, to say the least.</li>
    <li>I found <a href="https://books.google.co.uk/books/about/Clean_Code.html?id=_i6bDeoCQzsC&redir_esc=y">Clean Code</a> by Robert C. Martin to be an exceedingly useful, pragmatic and practical book on building effective software systems.</li>
    <li><a href="https://books.google.co.uk/books/about/The_Manager_s_Path.html?id=xeUpMQAACAAJ&redir_esc=y">The Manager&apos;s Path: A Guide for Tech Leaders Navigating Growth and Change</a> by Camille Fournier gave me an intriguing perspective into how large software projects are coordinated from the top down.</li>
  </ul>
  <h3>Business</h3>
  <p>I&apos;ve not read many straight business books, but found those that I have to be extremely insightful, and (unsurprisingly) in a totally different way to the above subjects. The importance of vision, belief, drive, and execution are emphasised infinitely more often &ndash; although I have no doubt that these are mandatory qualities for great scientists and engineers, too.</p>
  <p>In terms of handling uncertainty, a point which I have seen come up a number of times is the simple effectiveness of serious, extended debate. Basically, getting a number of knowledgeable, motivated people together and arguing about what to do for as long as it takes. And then, whenever anything changes or comes to light, arguing some more.</p>
  <p>This approach might not have the seductive purity of a scientific model, say; and there is no way of mathematically proving its worth. However, it does appear to have been used in developing many of the most successful organisations and companies in modern history, including in the tech industry.</p>
  <p>Some resources:</p>
  <ul>
    <li><a href="https://en.wikipedia.org/wiki/Good_to_Great">Good to Great</a> by Jim Collins. The stories of how management acted to turn companies around in the face of immense pressure and strife, sometimes changing their companies&apos; lines of business completely, were very compelling. Unlike mathematics, science, or engineering, there were often no certainties about their situation whatsoever.
      <br></br><br></br>
      (I should probably mention though that the methodology of the series this book belongs to has been heavily criticised by many, <a href="https://newkind.com/a-nobel-prize-winner-takes-on-jim-collins-and-the-business-book-industry/">including Daniel Kahneman</a>, Nobel laureate in economics.)</li>
    <li><a href="https://books.google.co.uk/books/about/Only_the_Paranoid_Survive.html?id=HjMYMLMy98oC">Only The Paranoid Survive: How to Exploit the Crisis Points That Challenge Every Company</a> by <a href="https://en.wikipedia.org/wiki/Andrew_Grove">Andrew Grove</a>, former CEO and Chairman of Intel Corporation. Grove&apos;s insights into &quot;strategic inflection points&quot; &ndash; fundamental changes in an industry or environment that mandate adaptation &ndash; make for fascinating reading in light of the AI era we may be headed towards.
      <br></br><br></br>
      I would also encourage anyone interested to read a little about Grove&apos;s astonishing life trajectory prior to his work at Intel, which practically defies all description. In his words:
      <blockquote>
        <i>By the time I was twenty, I had lived through a Hungarian Fascist dictatorship, German military occupation, the Nazis&apos; &quot;Final Solution,&quot; the siege of Budapest by the Soviet Red Army, a period of chaotic democracy in the years immediately after the war, a variety of repressive Communist regimes, and a popular uprising that was put down at gunpoint... many young people were killed; countless others were interned. Some two hundred thousand Hungarians escaped to the West. I was one of them.</i>
        <footer><a href="https://books.google.co.uk/books?id=vUKoDwAAQBAJ&pg=PT8&lpg=PT8&dq=By+the+time+I+was+twenty,+I+had+lived+through+a+Hungarian+Fascist+dictatorship,+German+military+occupation,+the+Nazis%27+%22Final+Solution,%22+the+siege+of+Budapest+by+the+Soviet+Red+Army,+a+period+of+chaotic+democracy+in+the+years+immediately+after+the+war,+a+variety+of+repressive+Communist+regimes,+and+a+popular+uprising+that+was+put+down+at+gunpoint...+%5Bwhere%5D+many+young+people+were+killed;+countless+others+were+interned.+Some+two+hundred+thousand+Hungarians+escaped+to+the+West.+I+was+one+of+them.&source=bl&ots=6tVGuvqa7P&sig=ACfU3U0JiwdaP1UhLlFVIy6CGwa5gTrw7A&hl=en&sa=X&ved=2ahUKEwiWquSJyeKFAxWbWkEAHWWPBFgQ6AF6BAgKEAM#v=onepage&q=By%20the%20time%20I%20was%20twenty%2C%20I%20had%20lived%20through%20a%20Hungarian%20Fascist%20dictatorship%2C%20German%20military%20occupation%2C%20the%20Nazis'%20%22Final%20Solution%2C%22%20the%20siege%20of%20Budapest%20by%20the%20Soviet%20Red%20Army%2C%20a%20period%20of%20chaotic%20democracy%20in%20the%20years%20immediately%20after%20the%20war%2C%20a%20variety%20of%20repressive%20Communist%20regimes%2C%20and%20a%20popular%20uprising%20that%20was%20put%20down%20at%20gunpoint...%20%5Bwhere%5D%20many%20young%20people%20were%20killed%3B%20countless%20others%20were%20interned.%20Some%20two%20hundred%20thousand%20Hungarians%20escaped%20to%20the%20West.%20I%20was%20one%20of%20them.&f=false">Source</a> - <i>Swimming Across</i>, Andrew Grove.</footer>
      </blockquote>
    </li>
  </ul>
</div >

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};