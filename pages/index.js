import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'
import Accueil from './accueil'
import Calendrier from './calendrier'
import Nous from './sommes-nous'
import Rejoindre from './rejoindre'
import Contacts from './contacts'

export default function Home() {
  return (
    <Layout   page="SUFFRAGE">
      <Accueil />
      <Calendrier />
      <Nous />
      <Rejoindre />
      <Contacts />
    </Layout>
   
  )
}
