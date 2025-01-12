'use client';

import React from 'react'
import Navbar from '../ui/components/nav'
import Footer from '../ui/components/footer'
import { useState } from 'react'
import { LayoutContext } from './layoutContext'

const navItems = [
  {
    path: '#home',
    name: '&Home',
    id: 'home',
  },
  {
    path: '#my-work',
    name: 'My Work',
    id: 'my-work',
  },
  {
    path: '#academics',
    name: 'Academics',
    id: 'academics',
  },
  {
    path: '#resume',
    name: 'Resume',
    id: 'resume',
  },
  {
    path: '#contact',
    name: 'Contact',
    id: 'contact',
  }
]

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [selected, setSelected] = useState('home')

    return (
      <LayoutContext.Provider value={{ selected, setSelected }}>
        <main style={{ scrollBehavior: "smooth" }} className="flex flex-auto flex-col antialiased">
          <div className="flex w-full justify-center">
            <Navbar items={navItems} selected={selected}/>
          </div>
          {children}
        </main>
      </LayoutContext.Provider>
    )
  }