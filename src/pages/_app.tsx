import { AppProps } from "next/app";

import DefaultLayout from "@app/components/layouts/DefaultLayout/DefaultLayout";
import { Debug } from '@app/components/atoms';
import "@app/features/localization/localization";

import "@app/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
export default App;
