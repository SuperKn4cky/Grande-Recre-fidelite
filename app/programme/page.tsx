import { ChevronLeft, Calendar, Gift, Ticket, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProgrammePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 flex flex-col gap-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h2 id="programme-how-it-works-title" className="text-lg font-medium mb-4 text-[#2A548D]">Comment ça marche ?</h2>
          <div className="space-y-4">
            <div id="programme-how-it-works-1" className="flex items-center gap-3">
              <div className="bg-[#F95702]/10 p-2 rounded-full flex-shrink-0">
                <ShoppingBag className="w-5 h-5 text-[#F95702]" />
              </div>
              <div>
                <h3 id="programme-how-it-works-1-title" className="font-medium text-[#F95702]">Gagnez des points</h3>
                <p id="programme-how-it-works-1-description" className="text-sm text-gray-600">3€ dépensés = 1 point gagné en magasin et en ligne</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#5B5698]/10 p-2 rounded-full flex-shrink-0">
                <Ticket className="w-5 h-5 text-[#5B5698]" />
              </div>
              <div>
                <h3 className="font-medium text-[#5B5698]">Montez de niveau</h3>
                <p className="text-sm text-gray-600">Plus vous cumulez de points, plus vous débloquez d'avantages</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#B40822]/10 p-2 rounded-full flex-shrink-0">
                <Gift className="w-5 h-5 text-[#B40822]" />
              </div>
              <div>
                <h3 className="font-medium text-[#B40822]">Profitez des récompenses</h3>
                <p className="text-sm text-gray-600">Réductions, cadeaux, offres exclusives selon votre niveau</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#42963E]/10 p-2 rounded-full flex-shrink-0">
                <Calendar className="w-5 h-5 text-[#42963E]" />
              </div>
              <div>
                <h3 className="font-medium text-[#42963E]">Avantages anniversaire</h3>
                <p className="text-sm text-gray-600">Des surprises pour votre anniversaire et celui de vos enfants</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h2 id="programme-stats-title" className="text-lg font-medium mb-4 text-[#2A548D]">Mes statistiques</h2>

          <div id="programme-stats" className="space-y-3">
            <div id="programme-stats-points" className="flex justify-between items-center">
              <span id="programme-stats-points-label" className="text-sm text-gray-600">Points actuels</span>
              <span id="programme-stats-points-value" className="font-bold text-[#F95702]">971 pts</span>
            </div>

            <div id="programme-stats-level" className="flex justify-between items-center">
              <span id="programme-stats-level-label" className="text-sm text-gray-600">Niveau actuel</span>
              <span id="programme-stats-level-value" className="font-bold text-[#FBC74F]">Bronze</span>
            </div>

            <div id="programme-stats-next-level" className="flex justify-between items-center">
              <span id="programme-stats-next-level-label" className="text-sm text-gray-600">Prochain niveau</span>
              <span id="programme-stats-next-level-value" className="font-bold text-[#72BF93]">Argent (1000 pts)</span>
            </div>

            <div id="programme-stats-points-needed" className="flex justify-between items-center">
              <span id="programme-stats-points-needed-label" className="text-sm text-gray-600">Points à gagner</span>
              <span id="programme-stats-points-needed-value" className="font-bold text-[#B40822]">29 pts</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h2 id="programme-benefits-title" className="text-lg font-medium mb-4 text-[#2A548D]">Mes avantages actuels</h2>

          <ul id="programme-benefits-list" className="space-y-2">
            <li id="programme-benefit-1" className="flex items-start gap-2">
              <div className="bg-[#FBC74F]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#FBC74F] rounded-full"></div>
              </div>
              <span id="programme-benefit-1-text" className="text-sm">5€ offerts pour votre anniversaire</span>
            </li>
            <li id="programme-benefit-2" className="flex items-start gap-2">
              <div className="bg-[#FBC74F]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#FBC74F] rounded-full"></div>
              </div>
              <span id="programme-benefit-2-text" className="text-sm">Accès aux ventes privées</span>
            </li>
            <li id="programme-benefit-3" className="flex items-start gap-2">
              <div className="bg-[#FBC74F]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#FBC74F] rounded-full"></div>
              </div>
              <span id="programme-benefit-3-text" className="text-sm">3 points pour chaque euro dépensé</span>
            </li>
          </ul>
        </div>

        <Link href="/paliers" className="w-full">
          <div id="programme-view-all" className="bg-[#2A548D] text-white p-4 rounded-lg text-center font-medium">
            Voir tous les paliers et récompenses
          </div>
        </Link>
      </main>
    </div>
  )
}
