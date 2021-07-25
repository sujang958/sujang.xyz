import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import Layout from '../components/layout'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App