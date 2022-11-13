import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, lightTheme } from 'styles/stitches.config'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
