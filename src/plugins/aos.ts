import aos from 'aos';
import { Context } from '@nuxt/types';
import 'aos/dist/aos.css';

export default ({ app }: Context) => {
  app.AOS = aos.init(); // eslint-disable-line new-cap
};
