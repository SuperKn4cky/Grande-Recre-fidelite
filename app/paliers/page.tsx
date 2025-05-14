'use client';

import { ChevronLeft, Star, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import ProgressComponent from "@/components/progress-component"

export default function PaliersPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(38.8);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const currentPoints = 971;
  const nextLevelPoints = 1000;
  const level = "Bronze";
  const nextLevel = "Argent";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 flex flex-col gap-6">
        <ProgressComponent 
          currentValue={progress} 
          currentPoints={currentPoints} 
          nextLevelPoints={nextLevelPoints} 
          level={level} 
          nextLevel={nextLevel} 
          showMarkers={true}
        />

        {/* Paliers */}
        <div id="paliers-list" className="space-y-4">
          {/* Bronze */}
          <div id="paliers-bronze" className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#FBC74F] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <Trophy className="w-6 h-6 text-[#FBC74F]" />
                </div>
                <h3 id="paliers-bronze-title" className="font-bold text-white">Bronze</h3>
              </div>
              <div id="paliers-bronze-range" className="bg-white rounded-full px-3 py-1 text-sm font-medium">0 - 1000 pts</div>
            </div>
            <div className="p-4">
              <h4 id="paliers-bronze-benefits-title" className="font-medium mb-2 text-[#2A548D]">Avantages</h4>
              <ul id="paliers-bronze-benefits-list" className="space-y-2">
                <li id="paliers-bronze-benefit-1" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#FBC74F] mt-0.5 flex-shrink-0" />
                  <span id="paliers-bronze-benefit-1-text" className="text-sm">5€ offerts pour votre anniversaire</span>
                </li>
                <li id="paliers-bronze-benefit-2" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#FBC74F] mt-0.5 flex-shrink-0" />
                  <span id="paliers-bronze-benefit-2-text" className="text-sm">Accès aux ventes privées</span>
                </li>
                <li id="paliers-bronze-benefit-3" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#FBC74F] mt-0.5 flex-shrink-0" />
                  <span id="paliers-bronze-benefit-3-text" className="text-sm">3 points pour chaque euro dépensé</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Argent */}
          <div id="paliers-argent" className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#72BF93] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <Trophy className="w-6 h-6 text-[#72BF93]" />
                </div>
                <h3 id="paliers-argent-title" className="font-bold text-white">Argent</h3>
              </div>
              <div id="paliers-argent-range" className="bg-white rounded-full px-3 py-1 text-sm font-medium">1000 - 2000 pts</div>
            </div>
            <div className="p-4">
              <h4 id="paliers-argent-benefits-title" className="font-medium mb-2 text-[#2A548D]">Avantages</h4>
              <ul id="paliers-argent-benefits-list" className="space-y-2">
                <li id="paliers-argent-benefit-1" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#72BF93] mt-0.5 flex-shrink-0" />
                  <span id="paliers-argent-benefit-1-text" className="text-sm">Tous les avantages Bronze</span>
                </li>
                <li id="paliers-argent-benefit-2" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#72BF93] mt-0.5 flex-shrink-0" />
                  <span id="paliers-argent-benefit-2-text" className="text-sm">10% de réduction sur une sélection de jouets</span>
                </li>
                <li id="paliers-argent-benefit-3" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#72BF93] mt-0.5 flex-shrink-0" />
                  <span id="paliers-argent-benefit-3-text" className="text-sm">Livraison gratuite dès 50€ d'achat</span>
                </li>
                <li id="paliers-argent-benefit-4" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#72BF93] mt-0.5 flex-shrink-0" />
                  <span id="paliers-argent-benefit-4-text" className="text-sm">Un cadeau surprise à chaque passage au niveau supérieur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Or */}
          <div id="paliers-or" className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#5B5698] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <Trophy className="w-6 h-6 text-[#5B5698]" />
                </div>
                <h3 id="paliers-or-title" className="font-bold text-white">Or</h3>
              </div>
              <div id="paliers-or-range" className="bg-white rounded-full px-3 py-1 text-sm font-medium">2000 - 3500 pts</div>
            </div>
            <div className="p-4">
              <h4 id="paliers-or-benefits-title" className="font-medium mb-2 text-[#2A548D]">Avantages</h4>
              <ul id="paliers-or-benefits-list" className="space-y-2">
                <li id="paliers-or-benefit-1" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#5B5698] mt-0.5 flex-shrink-0" />
                  <span id="paliers-or-benefit-1-text" className="text-sm">Tous les avantages Argent</span>
                </li>
                <li id="paliers-or-benefit-2" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#5B5698] mt-0.5 flex-shrink-0" />
                  <span id="paliers-or-benefit-2-text" className="text-sm">15% de réduction sur tout le magasin une fois par trimestre</span>
                </li>
                <li id="paliers-or-benefit-3" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#5B5698] mt-0.5 flex-shrink-0" />
                  <span id="paliers-or-benefit-3-text" className="text-sm">Livraison gratuite sans minimum d'achat</span>
                </li>
                <li id="paliers-or-benefit-4" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#5B5698] mt-0.5 flex-shrink-0" />
                  <span id="paliers-or-benefit-4-text" className="text-sm">Accès prioritaire aux nouveautés</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Platine */}
          <div id="paliers-platine" className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#2A548D] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <Trophy className="w-6 h-6 text-[#2A548D]" />
                </div>
                <h3 id="paliers-platine-title" className="font-bold text-white">Platine</h3>
              </div>
              <div id="paliers-platine-range" className="bg-white rounded-full px-3 py-1 text-sm font-medium">3500+ pts</div>
            </div>
            <div className="p-4">
              <h4 id="paliers-platine-benefits-title" className="font-medium mb-2 text-[#2A548D]">Avantages</h4>
              <ul id="paliers-platine-benefits-list" className="space-y-2">
                <li id="paliers-platine-benefit-1" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#2A548D] mt-0.5 flex-shrink-0" />
                  <span id="paliers-platine-benefit-1-text" className="text-sm">Tous les avantages Or</span>
                </li>
                <li id="paliers-platine-benefit-2" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#2A548D] mt-0.5 flex-shrink-0" />
                  <span id="paliers-platine-benefit-2-text" className="text-sm">20% de réduction permanente sur une sélection de produits</span>
                </li>
                <li id="paliers-platine-benefit-3" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#2A548D] mt-0.5 flex-shrink-0" />
                  <span id="paliers-platine-benefit-3-text" className="text-sm">Invitations aux événements exclusifs</span>
                </li>
                <li id="paliers-platine-benefit-4" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#2A548D] mt-0.5 flex-shrink-0" />
                  <span id="paliers-platine-benefit-4-text" className="text-sm">Service client dédié</span>
                </li>
                <li id="paliers-platine-benefit-5" className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#2A548D] mt-0.5 flex-shrink-0" />
                  <span id="paliers-platine-benefit-5-text" className="text-sm">Cadeaux surprises tout au long de l'année</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
