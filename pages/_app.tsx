import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.scss'
import '../styles/extend.scss'


function MyApp({ Component, pageProps }: AppProps) {


  
  return (

          <Component {...pageProps} />

  )
}

export default MyApp