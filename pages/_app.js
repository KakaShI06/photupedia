import { Roboto } from 'next/font/google'
import Head from 'next/head'
import '../styles/_global.scss'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
})

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
