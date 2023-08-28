import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    <div className="bg-zinc-900 bg-[url(../assets/bg-mobile.png)] bg-cover object-top text-white sm:bg-[url(../assets/bg-desktop.png)]">
      <Header />

      <main className="relative px-8 py-6 md:px-28 lg:px-40">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
