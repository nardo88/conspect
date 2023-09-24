import type { AppProps } from 'next/app'
import '../app/styles/index.scss'
import { ReduxProvider } from '@app/providers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}
