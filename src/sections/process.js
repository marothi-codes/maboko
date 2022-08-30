/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Enquiry',
    text:
      'Once we receive an enquiry from a client, we give them a call to set an appointment for a site visit. A quote cannot be done without a site visit. If someone offers you a quote without a site visit then you need to think twice about working with them.',
  },
  {
    id: 2,
    title: 'Consultation & Site Visit',
    text:
      "We visit the client on-site so that we may be able to identify their wants and needs and also offer on-site advice. We take measurements and photos for reference later on and we ask for the client's utility account for the last 3 to 6 months.",
  },
  {
    id: 3,
    title: 'Quotation Process',
    text:
      'We draft different quotations giving the client options to consider. We also supply the client with checklists in the form of spreadsheets so that the client can make an informed decision about which inverter and battery he/she should consider. This goes hand in hand with what we have specified in the quotes.',
  },
  {
    id: 4,
    title: 'Order Processing',
    text:
      'Once the client has confirmed the order and paid the initial deposit, we place an order (as per the confirmed quotation) with our suppliers and collect it on behalf of the client. Foremost Solar will keep each client up to date during this process. We then set an installation date in conjunction with the client and our installations teams.',
  },
  {
    id: 5,
    title: 'Installation & CoC',
    text:
      "We install the system and when it is fully commissioned (including setting up the client with his/her app on their phone) and the client has paid the balance of the quote, we issue a paid in full invoice along with a CoC (Certificate of Compliance). Both of these documents must be submitted to the client's insurance company as soon as possible.",
  },
  {
    id: 6,
    title: 'After sale service',
    text:
      "The client's installer monitors the solar system remotely making online adjustments to get the best out of the system. This is done with the client's input as he/she learns how to use the solar system. Should there be any problems Foremost Solar will assist the client with the warranty or insurance process.",
  },
];

export default function Process() {
  return (
    <section id="process" sx={styles.process}>
      <Container>
        <SectionHeader
          title="Solar Purchasing Process"
          slogan="GET INSIGHT FROM THE SALE TO THE INSTALLATION PROCESS"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  process: {
    backgroundColor: '#4099ed',
    position: 'relative',
    py: [7, 7, 7, 7, 7, 7],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)'],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
    '@media screen and (max-width: 1023.99px)': {
      textAlign: 'center',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#3e4bd9',
    '@media screen and (max-width: 1023.99px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
