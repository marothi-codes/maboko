/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Button } from 'theme-ui';
import FsLightbox from 'fslightbox-react';

import SectionHeader from '../components/section-header';

import { IoMdEye } from 'react-icons/io';

import Item1 from 'assets/work/01.jpeg';
import Item2 from 'assets/work/02.jpeg';
import Item3 from 'assets/work/03.jpeg';
import Item4 from 'assets/work/04.jpeg';
import Item5 from 'assets/work/05.jpeg';
import Item6 from 'assets/work/06.jpeg';
import Item7 from 'assets/work/07.jpeg';
import Item8 from 'assets/work/08.jpeg';
import Item9 from 'assets/work/09.jpeg';

function work() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        sx={{
          pt: [7, 7, 7, 7, 7, 7, 7, 7],
        }}
      >
        <SectionHeader slogan="CLICK BELOW TO SEE OUR WORK" title="Our Portfolio" />
        <Button onClick={() => setToggle(!toggle)} sx={styles.workButton}>
          <IoMdEye />
          &nbsp;See Our Work
        </Button>
      </div>
      <FsLightbox
        toggler={toggle}
        sources={[Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9]}
      />
    </>
  );
}

const styles = {
  workButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
};

export default work;
