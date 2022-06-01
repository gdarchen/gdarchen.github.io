type Color = 'warning' | 'success' | 'danger' | 'info' | 'primary';

type Language = {
  color: Color;
  name: string;
  description: string;
  extra?: string;
};

export const languages: Language[] = [
  {
    color: 'info',
    name: 'English',
    description: 'C1 - TOEIC Test',
    extra: 'Score: 865 • December 2016',
  },
  {
    color: 'success',
    name: 'German',
    description: 'B2 - Zertifikat Deutsch',
    extra: 'Gœthe-Institut • June 2013',
  },
  {
    color: 'warning',
    name: 'French',
    description: 'Mother tongue',
  },
];
