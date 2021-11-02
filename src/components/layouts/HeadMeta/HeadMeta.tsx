import { memo, ReactNode } from "react";

import Head from "next/head";
import { useTranslation } from "react-i18next";

interface HeadMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  extra?: ReactNode;
}

const HeadMeta = memo(
  ({ title, description, keywords, image, extra }: HeadMetaProps) => {
    const { t } = useTranslation();
    const pageTitle = `${t("website.title")} - ${title}`;

    return (
      <Head>
        {!!pageTitle && (
          <>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
          </>
        )}
        {!!description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
        {!!keywords?.length && (
          <>
            <meta property="keywords" content={keywords.join(", ")} />
          </>
        )}
        {!!image && <meta property="og:image" content={`https:${image}`} />}
        {!!extra && extra}
      </Head>
    );
  }
);

export { HeadMeta };
