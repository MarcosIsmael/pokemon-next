import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { Card, Grid } from '@nextui-org/react'
import { NextPage } from 'next'

interface Props {
  pokemons: SmallPokemon[]
}
const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <>
      <Layout title='Listado de pokémons'>
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map(({ id, name, img }, index) => (
            <Grid key={id} xs={6} sm={3} md={2} xl={1}>
              <Card hoverable clickable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={img} width={'100%'} height={140} />
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Layout>
    </>
  )
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ctx => {
  console.log('hola mundo')
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }))

  return {
    props: {
      pokemons,
    },
  }
}

export default Home
