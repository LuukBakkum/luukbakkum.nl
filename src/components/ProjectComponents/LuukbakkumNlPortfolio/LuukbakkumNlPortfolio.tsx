import React from 'react';

import projectConfig from './projectConfig';
import styles from './LuukbakkumNlPortfolio.module.scss';

const LuukbakkumNlPortfolio: React.FC = () => {
  return (
    <div>
      <p>This is just a temporary project page, full documentation will be written soon!</p>
      <p>
        In the mean time, you can check out{' '}
        <a
          href={projectConfig.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label=""
        >
          the source code on GitHub
        </a>
        !
      </p>
    </div>
  );
};

export default LuukbakkumNlPortfolio;
