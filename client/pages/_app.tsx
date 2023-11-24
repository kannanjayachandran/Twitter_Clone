import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const popins = Poppins({ weight: ['400'], subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <div className={popins .className}>
    <Component {...pageProps} />
  </div>
}
