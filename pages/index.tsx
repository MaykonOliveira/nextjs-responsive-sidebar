import Head from 'next/head'
import { MenuIcon, SearchIcon, UserIcon, ViewGridIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function Home() {
  const [active, setActive] = useState(false)

  function toggleSidebar() {
    setActive(!active)
  }

  return (
    <div className="flex min-h-screen text-text-color">
      <Head>
        <title>Sidebar responsive study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={`
        transition-all duration-300
        flex flex-col items-center justify-between bg-green
        ${active ? 'w-64' : 'w-20'}
      `}>
        <div className="p-4 w-full space-y-6">
          <div className="flex items-center justify-between">
            <img className={`
              ${active ? 'block' : 'hidden'}
            `}
              src="/assets/logo.svg" />
            <button className="p-3 rounded-xl hover:bg-light-green" onClick={toggleSidebar}>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>

          <form className="flex items-center justify-center p-3 bg-light-green rounded-xl">
            <SearchIcon className={`h-6 w-6 ${ active ? 'pointer-events-none' : 'cursor-pointer'}`} onClick={toggleSidebar} />
            <input className={`
              w-full outline-none border-none ml-[0.5rem] bg-light-green
              ${active ? 'block' : 'hidden'}
            `}
              placeholder="Buscar"></input>
          </form>

          <div className="space-y-3">
            <button className="flex w-full p-3 rounded-xl hover:bg-light-green">
              <img className="h-6 w-6" src="/assets/grid.svg" />
              <span className={`
                ml-3
                ${active ? 'block' : 'hidden'}
              `}>Dashboard</span>
            </button>

            <button className="flex w-full p-3 rounded-xl hover:bg-light-green">
              <img className="h-6 w-6" src="/assets/pet.svg" />
              <span className={`
                ml-3
                ${active ? 'block' : 'hidden'}
              `}>Pets</span>
            </button>

            <button className="flex w-full p-3 rounded-xl hover:bg-light-green">
              <img className="h-6 w-6" src="/assets/user.svg" />
              <span className={`
                ml-3
                ${active ? 'block' : 'hidden'}
              `}>Clientes</span>
            </button>

            <button className="flex w-full p-3 rounded-xl hover:bg-light-green">
              <img className="h-6 w-6" src="/assets/user-md.svg" />
              <span className={`
                ml-3
                ${active ? 'block' : 'hidden'}
              `}>Vets</span>
            </button>

            <button className="flex w-full p-3 rounded-xl hover:bg-light-green">
              <img className="h-6 w-6" src="/assets/settings.svg" />
              <span className={`
                ml-3
                ${active ? 'block' : 'hidden'}
              `}>Ajustes</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-16 px-3 py-2 bg-light-green">
          <div className={`
            w-full space-x-3
            ${active ? 'flex' : 'hidden'}
          `}>
            <img className="h-11 w-11 rounded-xl" src="/assets/avatar.svg" />
            <div className="flex flex-col items-left justify-center">
              <span className="text-sm">Eleanor Pena</span>
              <span className="text-xs">Veterinária</span>
            </div>
          </div>

          <button className="p-3 rounded-xl hover:bg-green">
            <img className="h-6 w-6" src="/assets/log-out.svg" />
          </button>
        </div>
      </aside>
      <main className="flex flex-grow p-7 bg-body-bg-color">
        <h2 className="font-semibold	">Dashboard</h2>
      </main>
    </div>
  )
}
