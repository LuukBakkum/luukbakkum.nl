import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import styles from './ContactsList.module.scss';
import IconBox from '../../IconBox';

const iconMap = {
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  email: IoMailOutline,
  address: IoLocationOutline,
};

const ContactsList: React.FC = () => {
  const { t } = useTranslation('layout');
  const contacts = t('sidebar.contacts', { returnObjects: true });

  return (
    <ul className={styles.contactsList}>
      {Object.entries(contacts).map(([key, contact]) => {
        const IconComponent = iconMap[key as keyof typeof iconMap];
        return (
          <li key={key} className={styles.contactItem}>
            <IconBox>
              <IconComponent />
            </IconBox>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>{contact.title}</p>
              <a href={contact.link} className={styles.contactLink}>
                {contact.handle}
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
