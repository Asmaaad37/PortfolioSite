import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/asmaadsaeed',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/Asmaaad37',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://x.com/AsmaadSaeed',
    label: 'X',
    icon: faTwitter,
  },
  {
    link: 'https://www.instagram.com/1asmaad.x',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://facebook.com/asmaadsaeed',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:asmaadsaeed03@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
