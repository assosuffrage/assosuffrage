import Head from "next/head";
import Image from "next/image";
import Layout from "./components/Layout";
import Accueil from "./accueil";
import Calendrier from "./calendrier";
import Nous from "./sommes-nous";
import Rejoindre from "./rejoindre";
import Contacts from "./contacts";
import Oui from "./oui";
import Non from "./non";
import Jsp from "./jsp";
import Actions from "./actions";

export default function Home() {
  return (
    <Layout page>
      <Accueil page="SUFFRAGE" />
      <Calendrier page="Calendrier" />
      <Nous page="Qui sommes nous" />
      <Actions page="Actions" />
      <Rejoindre page="Rejoindre" />
      <Contacts page="Contacts" />
      <Oui page="Oui" />
      <Non page="Non" />
      <Jsp page="Jsp" />
    </Layout>
  );
}
