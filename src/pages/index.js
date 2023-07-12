import Navbar from '@/components/navbar/navbar'
import Head from 'next/head'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
Navbar
export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar/>
        <Container>
          <div>
          <Subtitle>Promoções</Subtitle>
          </div>
          <div>
          <Subtitle>Outros jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  )
}
