import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Star, Clock, Users, Video, BadgeInfo } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gamescreenshot from "../../img/bb1.png"

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
                <h1 className="text-4xl font-bold mb-4">Budget Backrooms</h1>
                <p className="text-gray-400 mb-6">
                    Budget Backrooms is a free and open source game made in Unreal Engine 4 developed by DavidJoacaRo.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>9.6/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>1.5+ hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Single player</span>
                  </div>
                </div>
                <Button className="gap-2" asChild>
                  <Link href="https://store.steampowered.com/app/2589200/Budget_Backrooms/" target="_blank">
                  <Download className="w-4 h-4" /> 
                    Download Now (FREE!)
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={gamescreenshot}
                  alt="Budget Backrooms"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4"><div className="flex items-center gap-2"><BadgeInfo className="w-9 h-9 text-white"></BadgeInfo><h1 className="text-2xl text-white font-bold">This game was not developed by me. It was developed by DavidJoacaRo and published by me on Steam.</h1></div></section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Levels</h3>
                <p className="text-gray-400">
                    The levels in this game have a unique and linear layout, you will find plenty of content to explore, easter-eggs and 'Sub-Levels'.
                </p>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Immersive Atmosphere</h3>
                <p className="text-gray-400">
                    <strong>Budget Backrooms</strong> tries its best to deliver a constant and immersive Backrooms experience throughout the gameplay, from sound effects to modest graphics quality. The game uses binaural audio so playing with headphones is strongly recommended.
                </p>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Open Source</h3>
                <p className="text-gray-400">
                  This game is fully open source! That means that if you don't like something about it, you can fix it yourself!
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
                <h3 className="text-xl font-bold mb-2 text-white">Version 0.0.14 Alpha Released</h3>
                <p className="text-gray-400 mb-2">
                  Sanity, Level Selector, Steam Cloud and much more...
                </p>
                <Link href="https://store.steampowered.com/news/app/2589200/view/4285824770231538780?l=english" className="text-blue-400 hover:underline">
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