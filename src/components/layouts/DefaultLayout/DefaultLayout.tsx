import { memo, ReactNode } from "react";

import { PageHeader, PageFooter, Cursor } from "@app/components/organisms";
import { Debug } from '@app/components/atoms';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = memo(({ children }: DefaultLayoutProps) => {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
      <Cursor />
      <Debug />
    </>
  );
});

export default DefaultLayout;
