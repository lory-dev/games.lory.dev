import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Gamepad2, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import liminality from './img/liminality.jpg'
import budget from './img/budgetbackrooms.jpg'
import tbdx from './img/tbdx.jpg'

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-mono font-bold">
              games.lory.dev
            </Link>
            <div className="space-x-6">
              <Link href="#games" className="hover:text-primary-foreground/80">
                Games
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-6xl md:text-8xl font-mono font-bold text-center">
          games
        </h1>
        <h2 className="text-2xl md:text-4xl font-mono font-bold text-center">.lory.dev</h2>
        <p className="mt-6 text-xl text-gray-400">Game Dev & Publisher</p>
        <div className="flex gap-4 mt-8">
          <Button variant="secondary" className="gap-2" asChild>
            <Link href="#games">
            <Gamepad2 className="w-4 h-4" />
            Our Games
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-black" id="games">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-white/10 p-6">
              <Image
                src={liminality}
                alt="Liminality Screenshot"
                width={400}
                height={225}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">Liminality</h3>
              <p className="text-gray-400 mb-4">
                The most Liminal experience yet.
              </p>
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link href="/games/liminality">
                  Learn More
                </Link>
              </Button>
            </Card>
            <Card className="bg-black/50 border border-white/10 p-6">
              <Image
                src={budget}
                alt="Budget Backrooms Screenshot"
                width={400}
                height={225}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">Budget Backrooms</h3>
              <h4 className="text-lg font-mono text-white">Developed by DavidJoacaRo</h4>
              <p className="text-gray-400 mb-4">
                Free and open-source Backrooms game made in Unreal Engine 4 on a low budget.
              </p>
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link href="/games/budgetbackrooms">
                  Learn More
                </Link>
              </Button>
            </Card>
            <Card className="bg-black/50 border border-white/10 p-6">
              <Image
                src={tbdx}
                alt="TBDX Screenshot"
                width={400}
                height={225}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">The Backrooms Deluxe</h3>
              <h4 className="text-lg font-bold text-red-700">DISCONTINUED</h4>
              <p className="text-gray-400 mb-4">
                Explore the universe of "The Backrooms". A continuation of my previous backrooms game.
              </p>
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link href="/games/tbdx">
                  Learn More
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-mono font-bold mb-4 md:mb-0">games.lory.dev</div>
            <div className="flex gap-6">
              <Link href="https://github.com/lory-dev" className="hover:text-primary-foreground/80">
                GitHub
              </Link>
              <Link href="https://lory.dev" className="hover:text-primary-foreground/80">
                lory.dev
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} lory.dev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}