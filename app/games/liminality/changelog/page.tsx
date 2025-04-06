import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next";
import Image from "next/image"
import liminalityss from "../../../img/liminalityone.png"

export const metadata: Metadata = {
  title: "Liminality Changelog - games.lory.dev",
  description: "The most Liminal game yet.",
};

export default function LiminalityChangelog() {
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
            <h1 className="text-4xl font-bold mb-8">Liminality Changelog</h1>
            <div className="space-y-8">
              <Card className="bg-black/50 border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Version 1.0</h2>
                <p className="text-gray-400 mb-4">Releasing on April 20, 2025</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pb-4">
                  <li>Split game files into chunks</li>
                  <li>Every chapter now has its own menu</li>
                  <li>Fixed camera movement partially</li>
                  <li>Removed some annoying screenshake</li>
                  <li>Chapter 1: Added prologue</li>
                  <li>Added Chapter 4</li>
                  <li>Added Chapter 5</li>
                  <li>Added Chapter 6</li>
                  <li>Added Chapter 7</li>
                  <li>Fixed some bugs</li>
                  <li>Overhauled the employee hotel</li>
                  <li>Added multiple endings</li>
                  <li>Added main endings 1, 2 & 3</li>
                  <li>Removed DLC text from the chapter selection menu</li>
                  <li>Removed unused locked options from the menu</li>
                  <li>Removed new game text (saving system has been scrapped)</li>
                  <li>Removed coordinates on FPS counter</li>
                  <li>Polished current game mechanics</li>
                  <li>New "original" loading screen</li>
                  <li>Changed chapter 1 image on chapter selection</li>
                  <li>Moved difficulty selection to the chapter selection menu (any difficulty other than Liminal is NOT canon)</li>
                  <li>Added an option to disable texture streaming</li>
                </ul>
                <div className="relative aspect-video size-3/5">
                <Image
                  src={liminalityss}
                  alt="Liminality"
                  fill
                  className="object-cover rounded-lg"
                />
                </div>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Version 0.13</h2>
                <p className="text-gray-400 mb-4">Released on November 16, 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Removed Spooky decorations and Spooktober event</li>
                  <li>Fixed some bugs</li>
                  <li>Added Chapter 3</li>
                </ul>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Version 0.12</h2>
                <p className="text-gray-400 mb-4">Released on October 17, 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Added spooky decorations</li>
                  <li>Fixed some bugs</li>
                  <li>Spooktober event</li>
                  <li>New item: Jack-O-Lantern</li>
                  <li>Items now spawn properly and there's a max equipped item limit of 3</li>
                  <li>Fixed the bug where you drowned out of water occasionally</li>
                  <li>Fixed the bug where if you drowned the oxygen bar wouldn't show up again and you'd be immortal</li>
                </ul>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Version 0.11</h2>
                <p className="text-gray-400 mb-4">Released on September 21, 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Added Swimming</li>
                  <li>New event: Storm</li>
                  <li>Added Photo Mode (Press N ingame)</li>
                  <li>You can now choose wether you want to enable random events
                  directly in the menu</li>
                  <li>Chapter 3 added for testers and for Discord server members upon request</li>
                  <li>VHS effect blur has been removed</li>
                </ul>
              </Card>
              <Card className="bg-black/50 border border-white/10 p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Version 0.10</h2>
                <p className="text-gray-400 mb-4">Released on September 4, 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li><strong>Added Bloodmoon</strong> (you need to turn on Random Events in the Chapter 1 menu at the bottom right)</li>
                  <li>Fixed some bugs</li>
                  <li>Added a Changelog: you can find it under the "Extras" menu</li>
                  <li>Optimized the game to run a bit better on older GPUs (the minimum system requirements have not changed)</li>
                </ul>
              </Card>
              <h2 className="text-white text-2xl font-mono">Older version changelogs have yet to be added.</h2>
            </div>
          </div>
        </section>
      </main>


      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-mono font-bold mb-4 md:mb-0">games.lory.dev</div>
            <div className="flex gap-6">
              <Link href="https://github.com/lory-dev/games.lory.dev" target="_blank" className="hover:text-primary-foreground/80">
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