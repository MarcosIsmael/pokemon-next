import Head from 'next/head'
import React, { FC } from 'react'



interface Props {
  children: JSX.Element[]  | JSX.Element,
  title?: string 
}
const Layout : FC<Props>  = ({children, title}:Props) => {
  return (
     <>
    <Head>
    <title> {title || 'Pokemon App'}</title>
    <meta name='author' content='Marcos Galiano'/>
    <meta name='description' content='Información sobre el poémon XXXX'/>
    <meta name='keywords' content='XXXX, pokemon, pokedex'/>
    </Head>

    {/* Navbar */}

    <main>
      {children}
    </main>
    </>
  )
}

export default Layout