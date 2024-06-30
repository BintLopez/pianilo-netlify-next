import Link from 'next/link';
import AirtableEmbed from '../components/AirtableEmbed';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
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

    <p>
      Listen to Nilo on the keys, learn about works by femme, BIPOC, and queer composers, explore new music, expand the canon, and raise funds & awareness for reproductive justice.
    </p>

    <AirtableEmbed link={"https://airtable.com/embed/appHHvX86wYGcjdLS/shr18xsv8K57Af3iD?viewControls=on"} />

    
<p>    </p>

    <ul className="w-full">
      <li
        className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
      >
        <Link href={"https://airtable.com/appHHvX86wYGcjdLS/shryJfTrzowj7XA5G"} className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">
          <h2 className="text-2xl md:text-3xl">Say hello</h2>
          <p className="mt-3 text-lg opacity-60">
            Want a pianist for your fundraiser? Curious about femme, BIPOC, and queer composers? Reach out!
          </p>
        </Link>
      </li>
    </ul>

      </main>
      
      <Footer copyrightText={globalData.footerText} />
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

