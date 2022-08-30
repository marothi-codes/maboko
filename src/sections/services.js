/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';

import FeatureCardColumn from 'components/feature-card-column.js';
import Work from './work';

import theme from 'theme';

import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Products from 'assets/key-feature/products.svg';
import Service from 'assets/key-feature/service.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: 'IT Sales & Consulting',
    title: 'IT Sales & Consulting',
    text: `
      <ul>
        <li>Software</li>
        <li>Telephonic Support</li>
        <li>Door to door Consulting</li>
        <li>New & refurbished hardware</li>
        <li>Great discounts on bulk supply</li>
      </ul>
      `,
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Printing Solutions',
    title: 'Printing Solutions',
    text: `
      <ul>
        <li>Sales</li>
        <li>Paper</li>
        <li>Inks & Cartridges</li>
        <li>Repairs & Refurbishment</li>
      </ul>
      `,
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: 'Office Movement',
    title: 'Office Movement',
    text: `
      <ul>
        <li>Packaging</li>
        <li>Networking</li>
        <li>Reinstallation</li>
        <li>Asset Tagging</li>
        <li>Cleaning of Infrastructure</li>
      </ul>
      `,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'IT Outsourcing',
    title: 'IT Outsourcing',
    text: `
      <ul>
        <li>24/7 IT Support to our clients</li>
        <li>Relocation of Infrastructure</li>
        <li>Redesign existing networks to fit customer needs</li>
      </ul>
      `,
  },
  {
    id: 5,
    imgSrc: Products,
    altText: 'Digital Marketing',
    title: 'Digital Marketing',
    text: `
      <ul>
        <li>Posters</li>
        <li>Catalogs</li>
        <li>Branding</li>
        <li>Logo Designs</li>
        <li>Social Media & Marketing Management</li>
      </ul>
      `,
  },
  {
    id: 6,
    imgSrc: Service,
    altText: 'Enterprise Server & Network Support',
    title: 'Enterprise Server & Network Support',
    text: `
      <ul>
        <li>Server Support</li>
        <li>Network Support</li>
        <li>Backup Solutions</li>
        <li>Infrastructure Relocation</li>
        <li>Troubleshooting existing Networks</li>
      </ul>
      `,
  },
];

export default function Services() {
  return (
    <section id="service" sx={{ variant: 'section.services' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <SectionHeader slogan="WHAT DO WE DO?" title="Our Services" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <br />
        <hr sx={theme.styles.hr} />
        <Work />
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)'],
  },
};
