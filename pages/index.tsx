
import { Layout } from '@/components/layouts'
import { Button } from '@nextui-org/react'
import { NextPage } from 'next'


  const Home : NextPage = () =>{
  return (
    <>
    <Layout title='Listado de pokémons'>
    <Button color={'gradient'} >Hola mundo</Button>
    </Layout>
    </>
  )
}


export default Home