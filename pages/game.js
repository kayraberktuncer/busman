import Head from 'next/head'
import { useState } from 'react'
import Footer from '../comps/footer'
import InfoForm from '../comps/infoForm'

export default function Game() {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [info, setInfo] = useState('')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Game | Busman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
        <h1 className="text-6xl font-bold">
          <a
            className="text-blue-600"
            href="https://github.com/kayraberktuncer/Busman"
          >
            Busman
          </a>
          agement
        </h1>

        {!name ? (
          <InfoForm
            setName={setName}
            setTitle={setTitle}
            setCompany={setCompany}
            setInfo={setInfo}
          />
        ) : (
          ''
        )}
      </main>
      <Footer />
    </div>
  )
}
