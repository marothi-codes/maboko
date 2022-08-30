import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import AboutSection from '../sections/about-section';
import Team from '../sections/team-section';
import WhyUs from '../sections/why-us';
//import Process from '../sections/process';
//import Testimonials from '../sections/testimonial';
import ContactSection from 'sections/contact-section';
//import Partners from 'sections/partners';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Layout>
          <SEO title="T-Maboko IT Solutions (Pty) Ltd: IT Consulting, Network Infrastructure, IT Hardware, Software, Servers, Computers, Digital Marketing, IT Consulting in South Africa" />
          <Banner />
          {/*<Partners />*/}
          <AboutSection />
          <Services />
          <WhyUs />
          <Team />
         {/*<Process />*/}
          {/*<Testimonials />*/}
          <ContactSection />
        </Layout>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
