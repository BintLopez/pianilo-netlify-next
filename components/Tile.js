import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon';

export default function Tile({ title, text, url }) {
  if (url == undefined) url = "";
  return <>
    <div className="w-full my-5">
      <div
        className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
      >
        <Link href={ url } className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">
          <h2 className="text-2xl md:text-3xl">{ title }</h2>
          <p className="mt-3 text-lg opacity-60">
            { text }
          </p>
        </Link>
      </div>
    </div>
  </>;
}
