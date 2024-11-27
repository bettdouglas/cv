import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

