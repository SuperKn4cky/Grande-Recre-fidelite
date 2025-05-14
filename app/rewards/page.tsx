import { ChevronLeft, Gift, Check, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RewardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-6">
        {/* Badge Section */}
        <div className="flex justify-center py-6">
          <div className="relative flex flex-col items-center">
            <div className="bg-[#FBC74F] rounded-full p-6 w-32 h-32 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold mb-1">BRONZE</span>
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                      fill="#B40822"
                    />
                    <path
                      d="M12 16C9.87827 16 7.84344 15.1571 6.34315 13.6569C4.84285 12.1566 4 10.1217 4 8C4 5.87827 4.84285 3.84344 6.34315 2.34315C7.84344 0.842855 9.87827 0 12 0C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16ZM12 2C10.4178 2 8.87104 2.46919 7.55544 3.34824C6.23985 4.22729 5.21447 5.47672 4.60897 6.93853C4.00347 8.40034 3.84504 10.0089 4.15372 11.5607C4.4624 13.1126 5.22433 14.538 6.34315 15.6569C7.46197 16.7757 8.88743 17.5376 10.4393 17.8463C11.9911 18.155 13.5997 17.9965 15.0615 17.391C16.5233 16.7855 17.7727 15.7602 18.6518 14.4446C19.5308 13.129 20 11.5823 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2Z"
                      fill="#B40822"
                    />
                    <path
                      d="M20.5 21.9999C20.3674 22.0008 20.2379 21.9755 20.12 21.9259C20.0021 21.8763 19.8987 21.8035 19.818 21.7129L16.818 18.7129C16.7323 18.6272 16.6652 18.5254 16.6208 18.4134C16.5764 18.3015 16.5558 18.1815 16.5605 18.0608C16.5652 17.9402 16.5951 17.8222 16.6483 17.7143C16.7015 17.6064 16.7768 17.5108 16.8693 17.4329C16.9618 17.3549 17.0695 17.2966 17.1854 17.2618C17.3013 17.227 17.4229 17.2165 17.5427 17.2309C17.6624 17.2453 17.7777 17.2845 17.8811 17.3459C17.9845 17.4073 18.0736 17.4895 18.142 17.5879L21.142 20.5879C21.2599 20.7058 21.3363 20.8581 21.3612 21.0221C21.386 21.186 21.3581 21.3537 21.2808 21.4999C21.2035 21.6462 21.081 21.7635 20.9313 21.8339C20.7816 21.9043 20.6121 21.9242 20.45 21.8909L20.5 21.9999Z"
                      fill="#B40822"
                    />
                    <path
                      d="M3.5 21.9999C3.33785 22.0008 3.17846 21.9548 3.04275 21.8676C2.90704 21.7803 2.80137 21.6557 2.74109 21.5099C2.68081 21.3641 2.66896 21.2036 2.70725 21.0501C2.74554 20.8967 2.83202 20.7577 2.954 20.6519L5.954 17.6519C6.04852 17.5575 6.16326 17.4834 6.28878 17.4345C6.41429 17.3857 6.54765 17.363 6.68 17.3679C6.81235 17.3728 6.94371 17.4051 7.06534 17.4628C7.18697 17.5204 7.29612 17.6024 7.38382 17.7035C7.47151 17.8046 7.53576 17.9228 7.57238 18.0502C7.60901 18.1775 7.61712 18.3113 7.59616 18.4421C7.5752 18.573 7.52568 18.6977 7.45085 18.8084C7.37602 18.9191 7.27779 19.0132 7.164 19.0839L4.164 22.0839C4.08323 22.1649 3.98723 22.2291 3.88118 22.2727C3.77513 22.3163 3.66152 22.3385 3.547 22.3379L3.5 21.9999Z"
                      fill="#B40822"
                    />
                    <path
                      d="M12 22.9999C11.7348 22.9999 11.4804 22.8946 11.2929 22.707C11.1054 22.5195 11 22.2651 11 21.9999V15.9999C11 15.7347 11.1054 15.4804 11.2929 15.2928C11.4804 15.1053 11.7348 14.9999 12 14.9999C12.2652 14.9999 12.5196 15.1053 12.7071 15.2928C12.8946 15.4804 13 15.7347 13 15.9999V21.9999C13 22.2651 12.8946 22.5195 12.7071 22.707C12.5196 22.8946 12.2652 22.9999 12 22.9999Z"
                      fill="#B40822"
                    />
                  </svg>
                </div>
                <div className="flex mt-1">
                  <span className="text-xs">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Points Progress */}
        <div className="px-4">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>500 pts</span>
            <span className="text-[#F95702] font-medium">971 pts</span>
            <span>1000 pts</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#F95702] rounded-full" style={{ width: "97.1%" }}></div>
          </div>
        </div>

        {/* Rewards List */}
        <div className="px-4">
          <h2 id="rewards-title" className="text-lg font-medium border-b pb-2 mb-4 text-[#2A548D]">Mes rewards</h2>

          <div className="space-y-4">
            <div id="reward-item-1" className="flex gap-4 pb-4 border-b">
              <div className="bg-[#F7B2AD]/20 p-2 rounded-lg">
                <Gift className="w-6 h-6 text-[#B40822]" />
              </div>
              <div className="flex-1">
                <h3 id="reward-item-1-title" className="font-medium">Votre offre Anniversaire : 5€ Offerts</h3>
                <p id="reward-item-1-description" className="text-sm text-gray-500">
                  Joyeux anniversaire ! Pour l'occasion, nous vous offrons 5€ à dépenser...
                </p>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div id="reward-item-2" className="flex gap-4 pb-4 border-b">
              <div className="bg-[#72BF93]/20 p-2 rounded-lg">
                <Check className="w-6 h-6 text-[#42963E]" />
              </div>
              <div className="flex-1">
                <h3 id="reward-item-2-title" className="font-medium">Nouveau statut débloqué, cadeau offert !</h3>
                <p id="reward-item-2-description" className="text-sm text-gray-500">
                  Félicitations ! Vous avez atteint un nouveau statut. Pour vous récompenser, un jouet exclusif...
                </p>
              </div>
            </div>

            <div id="reward-item-3" className="flex gap-4 pb-4 border-b">
              <div className="bg-[#F7B2AD]/20 p-2 rounded-lg">
                <Gift className="w-6 h-6 text-[#B40822]" />
              </div>
              <div className="flex-1">
                <h3 id="reward-item-3-title" className="font-medium">-10% rien que pour vous !</h3>
                <p id="reward-item-3-description" className="text-sm text-gray-500">
                  5 mois ensemble, ça se fête ! Pour marquer l'occasion, on vous offre -10% sur v...
                </p>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div id="reward-item-4" className="flex gap-4 pb-4">
              <div className="bg-[#F7B2AD]/20 p-2 rounded-lg">
                <Gift className="w-6 h-6 text-[#B40822]" />
              </div>
              <div className="flex-1">
                <h3 id="reward-item-4-title" className="font-medium">Livraison offerte à domicile !</h3>
                <p id="reward-item-4-description" className="text-sm text-gray-500">9 mois avec nous, ça se fête !</p>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
