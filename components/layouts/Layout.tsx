import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'



interface Props {
  children: JSX.Element[]  | JSX.Element,
  title?: string 
}
 export const Layout : FC<Props>  = ({children, title}:Props) => {
  return (
     <>
    <Head>
    <title> {title || 'Pokemon App'}</title>
    <meta name='author' content='Marcos Galiano'/>
    <meta name='description' content={`Información sobre el poémon ${ title }`}/>
    <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
    </Head>

   <Navbar/>

    <main style={{
      padding:'0px 20px'
    }}>
      {children}
    </main>
    </>
  )
}

