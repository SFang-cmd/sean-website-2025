'use client';

import Link from 'next/link'
import { karla } from '../ui/fonts'
import { useState, useEffect } from 'react'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export default function Navbar() {
  const [region, setRegion] = useState(Array(9))


  return (
    <nav
      className={`fixed top-[5vh] z-50 flex justify-center w-1/3 rounded-full bg-[#37718E] text-white font-bold ${karla.className}`}
      id="nav"
    >
      <div className="flex items-center space-x-0 pr-10">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
