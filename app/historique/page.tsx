'use client';

import { ChevronLeft, ShoppingBag, Gift, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import ProgressComponent from "@/components/progress-component"

export default function HistoriquePage() {
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

  const transactions = [
    {
      id: 1,
      date: "12/05/2025",
      type: "achat",
      description: "Achat en magasin - Paris Rivoli",
      montant: "65,90€",
      points: "+198",
      icon: <ShoppingBag className="w-5 h-5 text-[#2A548D]" />,
    },
    {
      id: 2,
      date: "28/04/2025",
      type: "achat",
      description: "Achat en ligne - Commande #45789",
      montant: "129,50€",
      points: "+389",
      icon: <ShoppingBag className="w-5 h-5 text-[#2A548D]" />,
    },
    {
      id: 3,
      date: "15/04/2025",
      type: "bonus",
      description: "Bonus anniversaire",
      montant: "-",
      points: "+150",
      icon: <Gift className="w-5 h-5 text-[#B40822]" />,
    },
    {
      id: 4,
      date: "02/04/2025",
      type: "achat",
      description: "Achat en magasin - Lyon Part-Dieu",
      montant: "42,95€",
      points: "+129",
      icon: <ShoppingBag className="w-5 h-5 text-[#2A548D]" />,
    },
    {
      id: 5,
      date: "15/03/2025",
      type: "achat",
      description: "Achat en ligne - Commande #42156",
      montant: "89,99€",
      points: "+270",
      icon: <ShoppingBag className="w-5 h-5 text-[#2A548D]" />,
    },
    {
      id: 6,
      date: "01/03/2025",
      type: "bonus",
      description: "Bonus fidélité trimestriel",
      montant: "-",
      points: "+75",
      icon: <Calendar className="w-5 h-5 text-[#42963E]" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 flex flex-col gap-6">
        <ProgressComponent 
          currentValue={progress} 
          currentPoints={currentPoints} 
          nextLevelPoints={nextLevelPoints} 
          level={level} 
          nextLevel={nextLevel} 
        />

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h2 id="history-title" className="text-lg font-medium mb-4 text-[#2A548D]">Mon historique de points</h2>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} id={`transaction-${transaction.id}`} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className="bg-gray-100 p-2 rounded-full mt-1">{transaction.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p id={`transaction-${transaction.id}-description`} className="font-medium">{transaction.description}</p>
                    <p id={`transaction-${transaction.id}-points`} className="font-bold text-[#F95702]">{transaction.points}</p>
                  </div>
                  <div className="flex justify-between">
                    <p id={`transaction-${transaction.id}-date`} className="text-xs text-gray-500">{transaction.date}</p>
                    <p id={`transaction-${transaction.id}-montant`} className="text-xs text-gray-500">{transaction.montant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h3 id="earning-points-title" className="font-medium mb-2 text-[#2A548D]">Comment gagner des points ?</h3>
          <ul className="space-y-2">
            <li id="earning-points-item-1" className="flex items-start gap-2">
              <div className="bg-[#F95702]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#F95702] rounded-full"></div>
              </div>
              <span id="earning-points-item-1-text" className="text-sm">3 points pour chaque euro dépensé</span>
            </li>
            <li id="earning-points-item-2" className="flex items-start gap-2">
              <div className="bg-[#F95702]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#F95702] rounded-full"></div>
              </div>
              <span id="earning-points-item-2-text" className="text-sm">Bonus anniversaire : 150 points</span>
            </li>
            <li id="earning-points-item-3" className="flex items-start gap-2">
              <div className="bg-[#F95702]/20 p-1 rounded-full mt-0.5">
                <div className="w-3 h-3 bg-[#F95702] rounded-full"></div>
              </div>
              <span id="earning-points-item-3-text" className="text-sm">Bonus trimestriel selon votre niveau</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
