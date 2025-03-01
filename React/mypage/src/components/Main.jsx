import React from 'react';
import Section from './Section';
import dots from './assets/dots.jpg';
import hotairballoon from './assets/hotairballoon.jpg';
import venus from './assets/venus.avif';
import croc from './assets/croc.avif';
import lemons from './assets/lemons.jpg';
import huom from './assets/huom.png';

const Main = () => (
  <main>
    <Section id="home" title="Hello!" imgSrc={dots} imgAlt="Arrow">
      This website has a couple of fun random facts, go ahead and learn.
    </Section>
    <Section id="hotairballoon" title="Hot Air Balloon" imgSrc={hotairballoon} imgAlt="Hot air balloon">
      A sheep, a duck and a rooster were the first passengers on a hot air balloon.
    </Section>
    <Section id="venus" title="Venus" imgSrc={venus} imgAlt="Venus">
      Venus is the only planet to spin clockwise. It travels around the sun once every 225 Earth days but it rotates once every 243 days.
    </Section>
    <Section id="crocodile" title="Crocodile" imgSrc={croc} imgAlt="Crocodile">
      A crocodile cannot stick its tongue out. They have membrane that holds their tongue in place on the roof of their mouth so it can't move.
    </Section>
    <Section id="lemon" title="Lemon" imgSrc={lemons} imgAlt="Lemons">
      A lemon floats but lime sinks. This is because of their different densities.
    </Section>
    <Section id="note" title="Note" imgSrc={huom} imgAlt="Note!">
      These facts are just random facts from the internet and in fact not fact-checked by the maker of this fact page.
    </Section>
  </main>
);

export default Main;
