import { FaFacebookSquare, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

export default {
  menuItems: [
    {
      path: 'https://www.facebook.com/SolarForemost/',
      icon: <FaFacebookSquare />,
      title: 'Facebook',
    },
    {
      path: 'https://twitter.com/ForemostSolarZA',
      icon: <FaTwitter />,
      title: 'Twitter',
    },
    {
      path: 'https://www.google.com/search?q=foremost+solar&source=hp&ei=ba38YoOhH5KV8gKvx5eIBQ',
      icon: <FaGoogle />,
      title: 'Google',
    },
    {
      path: 'https://instagram.com/foremostsolar2',
      icon: <FaInstagram />,
      title: 'Instagram',
    },
  ],
};
