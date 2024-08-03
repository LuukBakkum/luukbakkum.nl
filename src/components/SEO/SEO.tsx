import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import i18n from '../../i18n';
import faviconPNG from '/favicon.png';
import { useLocation } from 'react-router-dom';

const img = {
  src: faviconPNG,
  width: 739,
  height: 1200,
};

const SEO: React.FC = () => {
  // Possibly add a different canonical URL too
  const baseUrl = 'https://semplaatsman.nl';
  const location = useLocation();
  const currUrl = `${baseUrl}${location.pathname}`;
  const { t } = useTranslation('seo');

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t('title')}</title>
      <meta name="author" content={t('author')} />
      <meta name="description" content={t('description')} />
      <meta
        name="keywords"
        content={Object.values(t('keywords', { returnObjects: true })).join(', ')}
      />
      <link rel="canonical" href={currUrl} />

      {/* Basic OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currUrl} />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      <meta property="og:image" content={img.src} />
      <meta property="og:image:width" content={img.width.toString()} />
      <meta property="og:image:height" content={img.height.toString()} />

      {/* Structured data for a person (adjust as needed) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: t('author'),
          givenName: t('givenName'),
          familyName: t('familyName'),
          additionalName: t('additionalName'),
          description: t('personDescription'),
          url: currUrl,
          jobTitle: t('jobTitle'),
          sameAs: [t('linkedinUrl'), t('githubUrl'), t('portfolioUrl')],
          knowsAbout: t('knowsAbout', { returnObjects: true }) as string[],
          email: t('email'),
          gender: t('gender'),
          knowsLanguage: t('knowsLanguage', { returnObjects: true }) as string[],
          nationality: t('nationality'),
          address: {
            '@type': 'PostalAddress',
            addressLocality: t('addressLocality'),
            addressCountry: t('addressCountry'),
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
