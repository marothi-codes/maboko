/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from '../link';
import theme from 'theme';
import { social } from '../../utils/socialLinks';
import FooterLogo from 'assets/footer-logo.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerTopArea}>
        <Container>
          <Grid sx={styles.footer.grid}>
            <div>
              <h3 sx={styles.footer.footerTopArea.foremostContacts}>Contact Us</h3>
              <hr sx={theme.styles.hr} />
              <Link path="mailto:thabangm@tmaboko.co.za" sx={styles.footer.footerTopArea.link}>
                <strong>Email: </strong>thabangm@tmaboko.co.za
              </Link>
              <Link path="tel:+27730285639" sx={styles.footer.footerTopArea.link}>
                <strong>Phone: </strong>+27 67 111 5742
              </Link>

              <nav>
                {social.map((item, idx) => (
                  <Link
                    key={idx}
                    path={item.path}
                    sx={styles.footer.footerTopArea.link}
                    target="_blank"
                  >
                    {item.icon} {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 sx={styles.footer.footerTopArea.foremostOffice}>Our Office</h3>
              <hr sx={theme.styles.hr} />
              <address sx={styles.footer.footerTopArea.address}>
                1222 South Africa Loop
                <br />
                Far East Bank
                <br />
                Sandton
                <br />
                2014
              </address>
            </div>
          </Grid>
        </Container>
      </Box>
      <Box sx={styles.footer.footerBottomArea}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          sx={styles.footer.logo}
        >
          <Image src={FooterLogo} width={180} alt="T Maboko IT Solutions Logo" />
        </ScrollLink>
        <Box sx={styles.footer.menus}>
          <Text sx={styles.footer.copyright}>
            T Maboko IT Solutions (Pty) Ltd
            <br />
            Copyright &copy; {new Date().getFullYear()}
            <br />
            <Link
              path="https://github.com/marothi-codes"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.footer.footerBottomArea.link}
            >
              By: Marothi Codes 
            </Link>
            <Link
              path="https://www.instagram.com/mindshosting/"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.footer.footerBottomArea.link}
            >
              in Partnership with Minds Hosting
            </Link>
          </Text>
        </Box>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    logo: {
      cursor: 'pointer',
    },
    footerBottomArea: {
      backgroundColor: 'black',
      color: '#fff',
      display: 'flex',
      pt: [1, null, 1],
      pb: [1, null, 1],
      textAlign: 'center',
      flexDirection: 'column',
      link: {
        fontSize: '12.2px',
        color: '#fff',
        cursor: 'pointer',
        transition: 'all 0.35s',
        display: 'block',
        textDecoration: 'none',
        px: [2, null, 4],
        width: '100%',
        ':hover': {
          color: '#b3d234',
        },
      },
    },
    footerTopArea: {
      backgroundColor: 'secondary',
      color: 'white',
      display: 'flex',
      pt: [5, 6, 6],
      pb: ['10px', null, '20px'],
      textAlign: 'center',
      flexDirection: 'column',
      nav: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        width: '100%',
        clear: 'both',
      },
      link: {
        fontSize: [1, '18px'],
        color: 'white',
        fontWeight: '400',
        mb: 2,
        cursor: 'pointer',
        transition: 'all 0.35s',
        display: 'block',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.8],
        px: [2, null, 4],
        textAlign: 'left',
        width: '100%',
        ':hover': {
          color: '#b3d234',
        },
        '@media screen and (max-width: 1024px)': {
          textAlign: 'center',
        },
      },
      foremostContacts: {
        '@media screen and (min-width: 1024px)': {
          textAlign: 'left',
        },
      },
      foremostOffice: {
        '@media screen and (min-width: 1024px)': {
          textAlign: 'right',
        },
      },
      address: {
        textAlign: 'left',
        '@media screen and (min-width: 1024px)': {
          textAlign: 'right',
        },
        '@media screen and (max-width: 1023.99px)': {
          textAlign: 'center',
        },
      },
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '18px'],
      color: '#fff',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      width: '100%',
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    grid: {
      width: ['100%', '80%', '100%'],
      mx: 'auto',
      gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
      gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', null, 'repeat(2,1fr)'],
    },
  },
};
