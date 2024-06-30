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

    <section>
      <h3>Upcoming Events</h3>
    </section>

    <section>
      <h3>Past Events</h3>
    </section>

    <section>
      <h3>About</h3>
      <p>
          Pianilo is an avid amateur pianist and active member of the Asheville Area Piano Forum obsessed with exploring works by systematically neglected composers, like the women and people of color excluded from the classical music canon. She is particularly inspired by Chiquinha Gonzaga, the first woman conductor in Brazil, first pianist of the Brazilian genre Choro, and abolitionist who used her concerts to champion the abolition of slavery in Brazil. From freeing the Atlanta Forest Defenders to freeing abortion to freeing Palestine, Nicole tries to be like Chinquinha and focuses her piano performance on raising funds and awareness of liberation struggles. When she’s not playing piano, Nicole builds tech for abortion access with <a href="https://midwestaccesscoalition.org">Midwest Access Coalition</a> and is an organizer with <a href="https://techies4rj.org">Techies for Reproductive Justice</a> and <a href="https://codewithasheville.org">Code with Asheville</a>.
      </p>
    </section>

    <section>
      <h3>Contact</h3>
      <p>
        Want to connect? Concert and fundraiser idea? Repertoire recommendations? Reach out!
      </p>
    </section>






        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">

                {post.data.date && (
                  <p className="mb-3 font-bold uppercase opacity-60">
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-lg opacity-60">
                    {post.data.description}
                  </p>
                )}
                <ArrowIcon className="mt-4" />

              </Link>
            </li>
          ))}
        </ul>

        <p>Want a pianist for your fundraiser? Curious about femme, BIPOC, and queer composers? <Link href={"https://airtable.com/appHHvX86wYGcjdLS/shryJfTrzowj7XA5G"}>Reach out!</Link></p>
      </main>
      <AirtableEmbed link={"https://airtable.com/embed/appHHvX86wYGcjdLS/shr18xsv8K57Af3iD?viewControls=on"} />
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

