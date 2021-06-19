import Head from 'next/head'
import Link from 'next/link'
import Footer from './comps/footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home | Busman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a
            className="text-blue-600"
            href="https://github.com/kayraberktuncer/Busman"
          >
            Busman
          </a>
        </h1>

        <p className="mt-3 text-xl">
          Busman is a transportation company management game.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/game">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Start &rarr;</h3>
              <p className="mt-4 text-xl">
                Enter the required information and start the game.
              </p>
            </a>
          </Link>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vel.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Guide &rarr;</h3>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vel.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
