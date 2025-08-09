'use client'
import Link from 'next/link'
import { Code, History, Settings, Star } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Editor', href: '/dashboard', icon: Code },
  { name: 'History', href: '/dashboard/history', icon: History },
  { name: 'Favorites', href: '/dashboard/favorites', icon: Star },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block w-64 border-r">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
              pathname === item.href 
                ? 'bg-accent text-accent-foreground' 
                : 'hover:bg-accent/50'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}