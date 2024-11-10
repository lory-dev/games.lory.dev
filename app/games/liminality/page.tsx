import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Star, Clock, Users, Video, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import liminalityss from "../../img/liminality2.png"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liminality - games.lory.dev",
  description: "The most Liminal game yet.",
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
                <h1 className="text-4xl font-bold mb-4">Liminality</h1>
                <p className="text-gray-400 mb-6">
                    Liminality is a new game that immerses you into the world of Liminal Spaces.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>6/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>2+ hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Single player</span>
                  </div>
                </div>
                <Button className="gap-2" asChild>
                  <Link href="https://store.steampowered.com/app/2916260/Liminality/" target="_blank">
                  <DollarSign className="w-4 h-4" /> 
                    Purchase on Steam ($4,99)
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={liminalityss}
                  alt="Liminality"
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
                <h3 className="text-xl font-bold mb-2 text-white">Immersive World</h3>
                <p className="text-gray-400">
                  Explore many vast Liminal Spaces, where reality feels <em><strong>off</strong></em>.
                </p>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Deep Lore</h3>
                <p className="text-gray-400">
                  You will be forgotten.
                  <br />
                  1352
                </p>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Plastic Duck</h3>
                <p className="text-gray-400">
                  Plastic Duck makes a return fr██████████████████████████████
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
                <h3 className="text-xl font-bold mb-2 text-white">Version 0.12 Released</h3>
                <p className="text-gray-400 mb-2">
                  Spooktober
                </p>
                <Link href="/games/liminality/changelog" className="text-blue-400 hover:underline">
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