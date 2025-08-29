'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handler = () => {
      const sections = links.map(l => document.querySelector(l.href) as HTMLElement).filter(Boolean)
      let current = '#home'
      const scrollY = window.scrollY + 160
      for (const sec of sections) {
        if (sec.offsetTop <= scrollY) current = `#${sec.id}`
      }
      setActive(current)
    }
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="font-semibold">Amya</a>
        <ul className="flex gap-4">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={"px-3 py-2 rounded-full transition " + (active===l.href ? 'bg-pinkbrand-100 text-pinkbrand-700' : 'hover:bg-neutral-100')}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
