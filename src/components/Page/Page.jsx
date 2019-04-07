import React from 'react'
import { Helmet } from 'react-helmet'

import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

import styles from './Page.module.scss'
import '../../styles/global.scss'


export const Page = ({ children, title, ogTitle, ogDescription }) => (
  <div className={styles.page}>
    <Helmet>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
    </Helmet>
    <NavBar />
    <main className={styles.content}>
      {children}
    </main>
    <Footer />
  </div>
)