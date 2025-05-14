'use client';

import { useState, useEffect } from "react";

interface ProgressComponentProps {
  showMarkers?: boolean;
  currentValue: number;
  currentPoints: number;
  nextLevelPoints: number;
  level: string;
  nextLevel: string;
}

export default function ProgressComponent({
  showMarkers = false,
  currentValue,
  currentPoints,
  nextLevelPoints,
  level,
  nextLevel,
}: ProgressComponentProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <h2 className="text-lg font-medium mb-4 text-[#2A548D]">Votre progression</h2>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-1 relative flex-wrap gap-1">
        <span>0 pts</span>
        {showMarkers && (
          <>
            <span className="text-[#F95702] font-medium">{currentPoints} pts</span>
            <span className="text-[#F95702] font-medium">{nextLevelPoints} pts</span>
          </>
        )}
        {!showMarkers && (
          <>
            <span className="text-[#F95702] font-medium">{currentPoints} pts</span>
            <span>{nextLevelPoints} pts</span>
          </>
        )}
        <span>2500 pts</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4 relative">
        <div className="h-full bg-[#F95702] rounded-full transition-all duration-1000" style={{ width: `${currentValue}%` }}></div>
        {showMarkers && <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-white"></div>}
      </div>
      <p className="text-sm text-gray-600">
        Vous êtes au niveau <span className="font-bold">{level}</span>. Plus que{" "}
        <span className="font-bold text-[#F95702]">{nextLevelPoints - currentPoints} points</span> pour atteindre le niveau{" "}
        <span className="font-bold">{nextLevel}</span> !
      </p>
    </div>
  );
}
