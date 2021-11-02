import { useTranslation } from "react-i18next";

import { HeadMeta } from "@app/components/layouts";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeadMeta title="Home" />
      <p>Ombrello site</p>
    </>
  );
}
