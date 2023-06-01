import { Layout } from '@/components/layouts'
import { useRouter } from 'next/router'
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { Pokemon } from '@/interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout title='Algun pokémon'>
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}

export default PokemonPage
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokeId = [...Array(151)].map((id, index) => {
    return `${index + 1}}`
  })

  console.log(pokeId.map(id => ({ params: { id } })))
  return {
    paths: pokeId.map(id => ({ params: { id } })),
    //[
    //   {
    //     params: { id: '1' },
    //   },
    // ],
    fallback: false,
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  console.log('xxxxxxxxxx => ', id)
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data,
    },
  }
}
