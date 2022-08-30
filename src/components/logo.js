/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'react-scroll';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      to="home"
      sx={{ cursor: 'pointer', display: 'flex', mr: 15, variant: 'links.logo' }}
      {...rest}>
      <Image src={src} alt="navbar logo" width="70" />
    </Link>
  );
}
