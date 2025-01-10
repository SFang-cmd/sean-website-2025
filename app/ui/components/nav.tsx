'use client';

import Link from 'next/link'
import { karla } from '../fonts'
import { useState, useEffect } from 'react'

export default function Navbar({ items=[{path: 'none', name: 'none', id: 'home'}], selected }) {
  return (
    <nav
      className={`fixed top-[5vh] z-50 flex justify-center rounded-full bg-[#37718E] text-white ${karla.className}`}
      id="nav"
    >
      <div className="flex items-center space-x-0">
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`transition-all text-lg rounded-full ${item.id === selected ? 'bg-[#548BA7]' : ''} hover:bg-[#548BA7] flex align-middle relative py-1 px-4 m-1`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
