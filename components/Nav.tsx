'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/#home', label: 'Home', hash: true },
  { href: '/#about', label: 'About', hash: true },
  { href: '/#experience', label: 'Experience', hash: true },
  { href: '/projects', label: 'Projects', hash: false },
  { href: '/#contact', label: 'Contact', hash: true },
]

export default function Nav() {
  const [active, setActive] = useState('/#home')

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home','about','experience','contact']
      let current = '/#home'
      const y = window.scrollY + 160
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = `/#${id}`
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
      <nav className="container flex items-center justify-between py-4">
        {/* was: <Link ...>Amya</Link> — removed */}
        <div />
        <ul className="flex gap-4">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-3 py-2 rounded-full transition ${active===l.href ? 'bg-pinkbrand-100 text-pinkbrand-700' : 'hover:bg-neutral-100'}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
