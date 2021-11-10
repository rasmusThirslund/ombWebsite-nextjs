import { memo, ReactNode } from "react";

import { PageHeader, PageFooter, Cursor } from "@app/components/organisms";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = memo(({ children }: DefaultLayoutProps) => {
  return (
    <div className="max-w-screen-xxl mx-auto">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
      <Cursor />
    </div>
  );
});

export default DefaultLayout;
