import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Star, Clock, Users, Video, BadgeInfo, HeartCrack } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gamescreenshot from "../../img/tbdxss.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Backrooms Deluxe - games.lory.dev",
  description: "Immersive short backrooms game.",
};

export default function CyberOdyssey() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-mono font-bold">
              games.lory.dev
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-primary-foreground/80">
                Games
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl font-bold mb-4">The Backrooms Deluxe</h1>
                <p className="text-gray-400 mb-6">
                    The Backrooms Deluxe is an immersive Backrooms game featuring many levels and many entities.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <HeartCrack className="w-5 h-5 text-red-500" />
                    <span>3.5/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>3.5+ hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>1-4 Players</span>
                  </div>
                </div>
                <Button className="gap-2" asChild>
                  <Link href="https://store.steampowered.com/app/2558700/The_Backrooms_Deluxe/" target="_blank">
                  <Download className="w-4 h-4" /> 
                    Download Now (FREE!)
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={gamescreenshot}
                  alt="The Backrooms Deluxe"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Multiplayer</h3>
                <p className="text-gray-400">
                    The Backrooms Deluxe offers a multiplayer mode of up to 4 players, or up to 8 players with the $0,99 DLC. More players, more fun! <i>(and more bugs)</i>
                </p>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">New Levels</h3>
                <p className="text-gray-400">
                Traverse through 20+ unique levels based on the Backrooms lore. Each level features a different way to escape, with various dangers along the way.
                </p>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Scary Entities</h3>
                <p className="text-gray-400">
                In The Backrooms Deluxe, there are many entities blocking your way of finally exiting the backrooms. Each of the entities has its own appearance and mechanics
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
            <div className="space-y-6">
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Version 2.1 Released</h3>
                <p className="text-gray-400 mb-2">
                  The whole game has been overhauled.
                </p>
                <Link href="https://store.steampowered.com/news/app/2558700/view/4584188879493094789?l=english" className="text-blue-400 hover:underline">
                  View full changelog
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>

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