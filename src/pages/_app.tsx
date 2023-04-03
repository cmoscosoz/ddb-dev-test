import "../styles/app.scss";
import type { AppProps } from "next/app";

//context provider
import { AppWrapper } from "context/NotificationsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
