import { CloudDownload, Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import ResumePDF from '../../../assets/pdf/CV_GautierDarchen.pdf';

type HeaderLink = {
  key: string;
  tooltip: string;
  icon: React.ElementType;
  text: string;
  showTextOnLargeScreen?: boolean;
  href?: string;
};

type NavigationLink = {
  hash: string;
  label: string;
};

export const headerLinks: HeaderLink[] = [
  {
    key: 'download-resume',
    tooltip: 'Download my résumé',
    href: ResumePDF,
    icon: CloudDownload,
    text: 'Résumé',
    showTextOnLargeScreen: true,
  },
  {
    key: 'twitter',
    tooltip: '@GDarchen',
    href: 'https://twitter.com/gdarchen',
    icon: Twitter,
    text: 'Twitter',
  },
  {
    key: 'github',
    tooltip: 'gdarchen',
    href: 'https://github.com/gdarchen',
    icon: GitHub,
    text: 'GitHub',
  },
  {
    key: 'linkedin',
    tooltip: 'Gautier Darchen',
    href: 'https://www.linkedin.com/in/gautierdarchen/',
    icon: LinkedIn,
    text: 'LinkedIn',
  },
  {
    key: 'facebook',
    tooltip: 'Gautier Darchen',
    href: 'https://www.facebook.com/gautier.darchen',
    icon: Facebook,
    text: 'Facebook',
  },
  {
    key: 'instagram',
    tooltip: '@g_darchen',
    href: 'https://www.instagram.com/g_darchen/',
    icon: Instagram,
    text: 'Instagram',
  },
];

export const navigationLinks: NavigationLink[] = [
  {
    hash: '#aboutMe',
    label: 'About me',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
  {
    hash: '#experiences',
    label: 'Experiences',
  },
  {
    hash: '#languages',
    label: 'Languages',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#skills',
    label: 'Skills',
  },
];
