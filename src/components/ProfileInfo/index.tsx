import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import GALink from '../GALink';
import { ProfileIcons } from '../ProfileIcons';
import styles from './ProfileInfo.module.css';

export default function ProfileInfo() {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <h1>Rafael Santana</h1>
      <p>{t('mainContent.city')}</p>
      <p>{t('mainContent.description')}</p>

      <div className={styles.icons}>
        <ProfileIcons type="github" />
        <ProfileIcons type="whatsapp" />
        <ProfileIcons type="linkedin" />
      </div>

      <GALink
        gaText="email"
        className={styles.button}
        href={`mailto:${t('mainContent.contact')}@rafaelsantana.dev`}
      >
        <Mail size={20} />
        {t('mainContent.email')}
      </GALink>
    </div>
  );
}
