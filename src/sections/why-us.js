/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import theme from 'theme';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import Mindset from 'assets/feature/mindset.svg';
import Lifestyle from 'assets/feature/lifestyle.svg';

const data = [
  {
    id: 1,
    imgSrc: Partnership,
    altText: 'Smart & Agile',
    title: 'Smart & Agile',
    text: `We hire smart and agile people who are forward looking and want to become leaders in their field. That's why more than 80% of our people have been with Syneto for over 5 years.`,
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: 'Freedom & Imagination',
    title: 'Freedom & Imagination',
    text: `We value individuals & their needs over processes & rules. We want our people to be creative & free-thinking, that's why we never force them into closed procedures.`,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Communication & Interaction',
    title: 'Communication & Interaction',
    text: `We value continuous communication between us and our customers. A product is only as good as the needs it serves. We always focus on the customer's wants & needs.`,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Community & Open-Source',
    title: 'Community & Open-Source',
    text: `We encourage everyone to write and contribute to open-source projects. Storage OS's Illumos based kernel is open source as well as the VMware integration library.`,
  },
  {
    id: 5,
    imgSrc: Mindset,
    altText: 'Start-Up Mindset',
    title: 'Start-Up Mindset',
    text: `We maintain a start-up culture where every employee's opinion is valued & appreciated. At T.Maboko, we like to challenge ourselves by analysing any idea's pros and cons.`,
  },
  {
    id: 6,
    imgSrc: Lifestyle,
    altText: 'Workplace & Lifestyle',
    title: 'Workplace & Lifestyle',
    text: `We offer a workplace where everyone can keep a healthy way of life and can truly feel at home. A happy employee is also an efficient and productive one.`,
  },
];

export default function WhyUs() {
  return (
    <section id="culture" sx={{ variant: 'section.whyUs' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <br />

        <SectionHeader slogan="BEST IN THE BUSINESS" title="Our Culture" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(3,1fr)'],
    '@media screen and (max-width: 767.99px)': {
      textAlign: 'center',
    },
  },
};
