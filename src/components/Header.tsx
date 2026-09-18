import React from 'react';
import { Stethoscope, Phone, Volume2, Type, Home } from 'lucide-react';
import { MainMenuType } from '../types';

interface HeaderProps {
  currentMenu: MainMenuType;
  onSelectMenu: (menu: MainMenuType) => void;
  isLargeText: boolean;
  onToggleLargeText: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMenu,
  onSelectMenu,
  isLargeText,
  onToggleLargeText,
}) => {
  return (
    <header className="bg-zinc-900 text-white shadow-md border-b-4 border-rose-900 sticky top-0 z-50">
      {/* Top hospital bar */}
      <div className="bg-zinc-950 px-4 py-1.5 border-b border-zinc-800 text-xs text-zinc-300">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-700 animate-ping"></span>
            <span className="font-semibold text-zinc-200">호흡기 안심 병원 안내 시스템</span>
            <span className="hidden sm:inline text-zinc-500">|</span>
            <span className="hidden sm:inline text-zinc-400">환자 및 보호자 맞춤 안내</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>진료 예약 및 안내: <strong className="text-white">1588-0050</strong></span>
            </div>
            <button
              id="header-toggle-text-size"
              onClick={onToggleLargeText}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-xs transition-colors ${
                isLargeText 
                  ? 'bg-rose-900 text-white font-bold' 
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
              }`}
              title="글씨 크기 조정"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{isLargeText ? '기본 글씨' : '큰 글씨 모드'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div 
          onClick={() => onSelectMenu('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
          id="header-brand-logo"
        >
          <div className="w-11 h-11 rounded-xl bg-rose-900 flex items-center justify-center shadow-inner border border-rose-700 group-hover:bg-rose-800 transition-colors">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-rose-200 transition-colors">
                호흡기 건강 & 병원 안내 센터
              </h1>
              <span className="bg-rose-950 text-rose-300 text-[11px] font-semibold px-2 py-0.5 rounded border border-rose-800">
                환자안내포털
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              호흡기내과 외래·검사실 안내 및 환자 맞춤 호흡 건강 정보
            </p>
          </div>
        </div>

        {/* 3 Primary Navigation Buttons */}
        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0" aria-label="메인 메뉴">
          <button
            id="nav-home-btn"
            onClick={() => onSelectMenu('home')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              currentMenu === 'home'
                ? 'bg-rose-900 text-white shadow font-semibold'
                : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>홈</span>
          </button>

          <button
            id="nav-breathing-btn"
            onClick={() => onSelectMenu('breathing')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              currentMenu === 'breathing'
                ? 'bg-rose-900 text-white shadow font-semibold ring-1 ring-rose-600'
                : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>① 호흡법 가이드</span>
          </button>

          <button
            id="nav-floor-btn"
            onClick={() => onSelectMenu('floor')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              currentMenu === 'floor'
                ? 'bg-rose-900 text-white shadow font-semibold ring-1 ring-rose-600'
                : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>② 층별 안내도</span>
          </button>

          <button
            id="nav-disease-btn"
            onClick={() => onSelectMenu('disease')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              currentMenu === 'disease'
                ? 'bg-rose-900 text-white shadow font-semibold ring-1 ring-rose-600'
                : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>③ 주요 호흡기질환</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
