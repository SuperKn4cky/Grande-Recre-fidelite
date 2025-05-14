import { ChevronLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 flex flex-col gap-6">
        {/* Points Circle */}
        <div className="flex flex-col items-center justify-center py-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#f0f0f0" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#F95702"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="283"
                transform="rotate(-90 50 50)"
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out animate-fill-circle"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-[#F95702]">971</span>
              <span className="text-sm text-gray-500">sur 1000 pts</span>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <section id="home-rewards-section" className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 animate-fade-in">
          <h2 id="home-rewards-title" className="text-lg font-medium mb-4 text-[#2A548D]">Mes rewards</h2>

          <div className="bg-[#F7B2AD]/20 rounded-lg p-3 flex items-start gap-2 mb-4">
            <Info className="w-5 h-5 text-[#B40822] mt-0.5" />
            <p className="text-sm text-gray-700">Pour profiter d'avantages exclusifs, rendez-vous au statut supérieur</p>
          </div>

          <h3 className="text-md font-medium mb-2 text-[#FBC74F]">Avantages Bronze</h3>
          <ul className="space-y-2 mb-2">
            <li className="flex items-start gap-2">
              <div className="bg-[#FBC74F]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#FBC74F] rounded-full"></div>
              </div>
              <span className="text-sm">5€ offerts pour votre anniversaire</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-[#FBC74F]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#FBC74F] rounded-full"></div>
              </div>
              <span className="text-sm">Accès aux ventes privées</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-[#FBC74F]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#FBC74F] rounded-full"></div>
              </div>
              <span className="text-sm">3 points pour chaque euro dépensé</span>
            </li>
          </ul>
        </section>

        {/* Buttons */}
        <Link href="/programme" className="w-full">
          <Button className="w-full bg-[#2A548D] hover:bg-[#3A8EB3] text-white py-6 rounded-lg">
            Mon programme de fidélité
          </Button>
        </Link>

        <Link href="/historique" className="w-full">
          <Button variant="outline" className="w-full py-6 rounded-lg border-[#3A8EB3] text-[#3A8EB3]">
            Mon historique de points
          </Button>
        </Link>

        <Link href="/paliers" className="w-full">
          <Button className="w-full bg-[#72BF93] hover:bg-[#3A8EB3] text-white py-6 rounded-lg">
            Voir les paliers et récompenses
          </Button>
        </Link>
      </main>
    </div>
  )
}
