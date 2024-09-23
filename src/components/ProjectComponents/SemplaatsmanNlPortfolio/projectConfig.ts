import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import portfolioImage from '../../../assets/projects/luukbakkum.nl-portfolio.webp';

const projectConfig: ProjectConfig = {
  slug: 'luukbakkum.nl',
  localeKey: 'luukbakkum.nl-portfolio',
  createdDate: '2024-07-14',
  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.scss,
    technologies.vite,
    technologies.i18next,
  ],
  projectType: ProjectType.Frontend,
  codeUrl: 'https://github.com/LuukBakkum/luukbakkum.nl',
  liveUrl: 'https://luukbakkum.nl',
  imagePath: portfolioImage,
  component: lazy(() => import('./SemplaatsmanNlPortfolio')),
};

export default projectConfig;
