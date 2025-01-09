import React from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex flex-auto flex-col">
        <div className="flex w-full justify-center py-4">
          <Navbar />
        </div>
        {children}
        <Footer /> 
      </main>
    )
  }