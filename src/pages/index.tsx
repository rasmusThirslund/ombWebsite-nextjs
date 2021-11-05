import { useTranslation } from "react-i18next";

import { HeadMeta, SectionWrapper } from "@app/components/layouts";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeadMeta title="Home" />
      <SectionWrapper size="full" noPadding>
        <p className="text-h1">Full no padding</p>
      </SectionWrapper>
      <SectionWrapper size="xxlarge">xxlarge</SectionWrapper>
      <SectionWrapper size="xlarge">x large</SectionWrapper>
      <SectionWrapper size="large">large</SectionWrapper>
      <SectionWrapper size="medium">medium</SectionWrapper>
      <SectionWrapper size="small">small</SectionWrapper>
      <SectionWrapper size="xsmall">x small</SectionWrapper>
    </>
  );
}
