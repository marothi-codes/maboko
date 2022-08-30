import React, { useState } from 'react';
import { Box } from 'theme-ui';
import Drawer from 'components/drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from '../link';
import menuItems from './header.data';
import { social } from '../../utils/socialLinks';

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((previousState) => !previousState)}
      closeButton={<IoMdClose size="24px" />}
      drawerStyle={styles.drawer}
      closeButtonStyle={styles.close}
    >
      <Box sx={styles.content}>
        <Box sx={styles.menu}>
          {menuItems.map((item, idx) => (
            <ScrollLink
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={idx}
              onClick={() => setIsDrawerOpen((previousState) => !previousState)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </Box>
        <Box sx={styles.menuFooter}>
          <Box sx={styles.social}>
            {social.map((item, idx) => (
              <Box as="span" key={idx} sx={styles.social.icon}>
                <Link
                  path={item.path}
                  target="_blank"
                  sx={styles.social.link}
                  rel="noopener noreferrer"
                  onClick={() => setIsDrawerOpen((previousState) => !previousState)}
                >
                  {item.icon}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5rem',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
    },
    link: {
      color: 'white',
      transition: 'all 0.35s',
      textDecoration: 'none',
      '&:hover': {
        color: '#b3d234',
      },
      '&:visited': {
        color: 'white',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};
