import Link from 'next/link';
import AirtableEmbed from '../components/AirtableEmbed';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import Tile from '../components/Tile';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h1>


        <div className="flex flex-col items-center py-16">
          <p className="mb-3 font-bold uppercase dark:text-white opacity-60">
            Pianist playing piano music by women and BIPOC composers of past and present to expand the canon and fundraise for collective liberation
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl">Events</h2>
          <p className="mt-3 text-lg opacity-60">
            Peruse past and future piano events.
          </p>
        <AirtableEmbed link={'https://airtable.com/embed/appHHvX86wYGcjdLS/shr18xsv8K57Af3iD?viewControls=on'} />

        <Tile 
          title={'About'} 
          text={ 'Pianilo is a pianist focused on exploring works by systematically neglected composers, like the women and people of color excluded from the classical music canon. She is particularly inspired by Chiquinha Gonzaga, the first woman conductor in Brazil, first pianist of the Brazilian genre Choro, and abolitionist who used her concerts to champion the abolition of slavery in Brazil. From freeing the Atlanta Forest Defenders to freeing abortion to freeing Palestine, Nilo tries to be like Chinquinha by focusing her piano performance on raising funds and awareness of liberation struggles.' }
        />

        <Tile 
          title={'Connect'} 
          text={ 'Want a pianist for your fundraiser? Curious about femme, BIPOC, and queer composers? Reach out!' }
        >
        </Tile>
        <AirtableEmbed link={'https://airtable.com/embed/appHHvX86wYGcjdLS/shryJfTrzowj7XA5G'} />
      </main>
      
      <Footer copyrightText="Pianilo 2024 ~ Free Palestine" />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

