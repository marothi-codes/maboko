/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from '../link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import { social } from '../../utils/socialLinks';
import LogoDark from 'assets/logo.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header className={className} sx={styles.header} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((item, idx) => (
            <ScrollLink
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              key={idx}>
              {item.label}
            </ScrollLink>
          ))}
          {social.map((item, idx) => (
            <Link
                  key={`link-${idx}`}
                  path={item.path}
                  sx={styles.social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
          ))}
        </Flex>
        {/* Mobile specific navbar */}
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'white',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: '#000',
      color: 'white',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'white',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5rem',
    link: {
      color: 'white',
      transition: 'all 0.35s',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
      '&:visited': {
        color: 'white',
      },
    },
  },
};
