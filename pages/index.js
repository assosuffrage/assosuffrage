import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'
import Accueil from './accueil'
import Calendrier from './calendrier'
import Nous from './sommes-nous'
import Rejoindre from './rejoindre'

export default function Home() {
  return (
    <Layout   page="SUFFRAGE">
      <Accueil />
      <Calendrier />
      <Nous />
      <Rejoindre />
    </Layout>
   
  )
}
