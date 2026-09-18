import React, { useState } from 'react';
import { MainMenuType } from './types';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { BreathingGuideView } from './components/BreathingGuideView';
import { FloorGuideView } from './components/FloorGuideView';
import { DiseaseGuideView } from './components/DiseaseGuideView';
import { Phone, MapPin, Stethoscope, AlertTriangle } from 'lucide-react';

export default function App() {
  const [currentMenu, setCurrentMenu] = useState<MainMenuType>('home');
  const [selectedBreathingId, setSelectedBreathingId] = useState<string>('diaphragmatic');
  const [selectedFloorId, setSelectedFloorId] = useState<string>('3F');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('copd');
  const [isLargeText, setIsLargeText] = useState<boolean>(false);

  const handleNavigate = (menu: MainMenuType) => {
    setCurrentMenu(menu);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBreathingFromHome = (id: string) => {
    setSelectedBreathingId(id);
    setCurrentMenu('breathing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#f4f5f7] text-zinc-900 transition-all ${
      isLargeText ? 'text-lg [&_p]:text-base [&_h2]:text-3xl [&_h3]:text-2xl [&_h4]:text-xl' : ''
    }`}>
      {/* Header */}
      <Header
        currentMenu={currentMenu}
        onSelectMenu={handleNavigate}
        isLargeText={isLargeText}
        onToggleLargeText={() => setIsLargeText(!isLargeText)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 pb-16">
        {currentMenu === 'home' && (
          <HomeView
            onSelectMenu={handleNavigate}
            onSelectBreathingTechnique={handleSelectBreathingFromHome}
          />
        )}

        {currentMenu === 'breathing' && (
          <BreathingGuideView
            onNavigate={handleNavigate}
            initialSelectedId={selectedBreathingId}
          />
        )}

        {currentMenu === 'floor' && (
          <FloorGuideView
            onNavigate={handleNavigate}
            initialFloorId={selectedFloorId}
          />
        )}

        {currentMenu === 'disease' && (
          <DiseaseGuideView
            onNavigate={handleNavigate}
            initialDiseaseId={selectedDiseaseId}
          />
        )}
      </main>

      {/* Footer (Gray Base with Burgundy Details) */}
      <footer className="bg-zinc-900 text-zinc-400 text-xs border-t-2 border-rose-900 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-900 flex items-center justify-center text-white shadow">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">
                  호흡기 건강 & 병원 안내 센터
                </h4>
                <p className="text-zinc-400 text-xs">
                  환자와 보호자의 빠른 쾌유와 편리한 원내 이용을 위해 최선을 다합니다.
                </p>
              </div>
            </div>

            {/* Emergency Info Pill */}
            <div className="bg-zinc-950 px-4 py-2.5 rounded-xl border border-rose-950 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-900 text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 block">24시간 응급의료센터 직통</span>
                <span className="font-bold text-sm text-white">02-1588-0050 (응급 내선 119)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-zinc-400">
            <div>
              <span className="font-bold text-zinc-300 block mb-1">병원 위치</span>
              <p className="flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>서울특별시 중구 을지로 호흡기병원로 123 안심메디컬빌딩</span>
              </p>
            </div>
            <div>
              <span className="font-bold text-zinc-300 block mb-1">외래 진료 시간</span>
              <p>평일: 09:00 - 17:30 (점심시간: 12:30 - 13:30)</p>
              <p>토요일: 09:00 - 12:30 (일요일/공휴일 휴진)</p>
            </div>
            <div>
              <span className="font-bold text-zinc-300 block mb-1">의학 정보 안내</span>
              <p className="text-zinc-500 text-[11px] leading-relaxed">
                본 웹사이트에 제공된 호흡법 및 질환 정보는 환자의 이해를 돕기 위한 보조 교육 자료이며, 
                구체적인 진단 및 치료는 반드시 담당 주치의와 상의하시기 바랍니다.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500">
            <span>© 2026 호흡기 건강 & 병원 안내 센터. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <button onClick={() => handleNavigate('breathing')} className="hover:text-zinc-300 transition-colors">호흡법 가이드</button>
              <button onClick={() => handleNavigate('floor')} className="hover:text-zinc-300 transition-colors">층별 안내도</button>
              <button onClick={() => handleNavigate('disease')} className="hover:text-zinc-300 transition-colors">주요 호흡기질환</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
