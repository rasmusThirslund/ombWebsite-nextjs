import { memo, ReactNode } from "react";

import styles from "./DefaultLayout.module.scss";

import classnames from "classnames";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = memo(({ children }: DefaultLayoutProps) => {
  return (
    <div className={styles.root}>
      <main className={styles.content}>{children}</main>
    </div>
  );
});

export default DefaultLayout;
