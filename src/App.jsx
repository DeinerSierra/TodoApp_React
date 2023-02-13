import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/MoonIcon'

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">todo</h1>
          <button className="text-white"><MoonIcon fill="#444"/></button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 mt-8 flex gap-4 items-center px-4">
          <span className="rounded-full border-2 inline-block h-5 w-5"></span>
          <input type="text" placeholder="Create a New To do" className=" w-full outline-none p-2 text-gray-400"/>
        </form>
      </header>
      <main className="container mx-auto px-4 mt-4">
        <div className="bg-white rounded-md [&>article]:px-4">
          <article className="flex gap-4 py-4 border-b-gray-600 border-b">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
            <p className="text-gray-600 grow">Complete online js curses</p>
            <button><CrossIcon/></button>
          </article>

          <article className="flex gap-4 py-4 border-b-gray-600 border-b">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
            <p className="text-gray-600 grow">Complete online js curses</p>
            <button><CrossIcon/></button>
          </article>
          
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>

        </div>
        
      </main>

      <section className='container mx-auto p-4 mt-8'>
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
          </div>
      </section>

      <section className="mt-8">Drag and drop</section>
      
    </div>
  )
}

export default App
