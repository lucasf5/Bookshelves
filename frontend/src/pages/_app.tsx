import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, theme } from 'styles/stitches.config'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" themes={[darkTheme]}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
