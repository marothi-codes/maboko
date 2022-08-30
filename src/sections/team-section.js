/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.jpg';
import Member2 from 'assets/team/member-2.jpg';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Thabang Brian Maboko',
    title: 'Thabang Brian Maboko',
    designation: 'CEO and Managing Director',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/brianthabang.maboko.7',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://za.linkedin.com/in/thabang-maboko-a88522124',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Thato Pitjeng',
    title: 'Thato Pitjeng',
    designation: 'Graphic Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/Innovatoryminds',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://za.linkedin.com/in/thato-pitjeng-b15879161',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/innovatoryminds/',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="team" sx={{ variant: 'section.team' }}>
      <Container>
        <SectionHeader slogan="Qualified Professionals at Your Service" title="Our Team" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
