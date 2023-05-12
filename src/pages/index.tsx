import Head from 'next/head'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Serhii Horeslavskyi | Portfolio</title>
        <meta name="description" content=">Serhii Horeslavskyi 3D Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="relative z-0 bg-primary">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
