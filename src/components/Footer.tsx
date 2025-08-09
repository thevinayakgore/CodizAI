import { Twitter, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 m-auto w-full">
        <div>
          <h3 className="font-bold text-lg mb-4">Codiz AI</h3>
          <p className="text-sm text-muted-foreground">
            AI-powered code review platform for developers.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/docs">API</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="#">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Link>
          <Link href="#">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Link>
          <Link href="#">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  )
}