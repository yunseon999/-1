import React from 'react';
import { Wind, Building2, Activity, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, Phone, Clock } from 'lucide-react';
import { MainMenuType } from '../types';

interface HomeViewProps {
  onSelectMenu: (menu: MainMenuType) => void;
  onSelectBreathingTechnique?: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectMenu,
  onSelectBreathingTechnique,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10 space-y-8">
      {/* Top Welcome & Hospital Hero Banner (Gray backdrop with burgundy accents) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-rose-50/80 pointer-events-none blur-3xl"></div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full text-xs font-bold text-rose-900">
            <span className="w-2 h-2 rounded-full bg-rose-800 animate-pulse"></span>
            <span>환자 중심 호흡기 전문 의료 안내</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            호흡기 건강정보와 병원 이용을 <br className="hidden sm:inline" />
            <span className="text-rose-900">쉽고 직관적으로</span> 안내해 드립니다
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed pt-1">
            원하시는 주요 메뉴를 선택하시면, 이미지와 영상으로 제공되는 <strong>4대 호흡법 가이드</strong>, 
            병원 <strong>층별 안내도</strong>, 알기 쉽게 정리된 <strong>주요 호흡기질환 정보</strong>를 바로 확인하실 수 있습니다.
          </p>
        </div>

        {/* Quick status bar */}
        <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span>외래 진료: 09:00 - 17:30</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium text-rose-900">
              <Phone className="w-4 h-4 text-rose-800" />
              <span>원내 안내: 1588-0050</span>
            </span>
          </div>
          <span className="bg-zinc-100 px-3 py-1 rounded-md text-zinc-700 font-semibold">
            호흡기 전문 간호사 상시 상담실 운영
          </span>
        </div>
      </div>

      {/* 3 PRIMARY MENUS (The Core Specification) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-rose-900 rounded-sm inline-block"></span>
            <span>병원 이용 3대 핵심 메뉴</span>
          </h3>
          <span className="text-xs text-zinc-500 font-medium">
            원하시는 메뉴 카드를 클릭하세요
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Menu 1: 호흡법 가이드 */}
          <div
            id="main-menu-card-breathing"
            onClick={() => onSelectMenu('breathing')}
            className="group bg-white rounded-3xl p-6 sm:p-7 border-2 border-zinc-200 hover:border-rose-900 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Burgundy Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-rose-900"></div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-900 flex items-center justify-center border border-rose-200 group-hover:bg-rose-900 group-hover:text-white transition-colors">
                  <Wind className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                  4가지 호흡법
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold text-rose-900 tracking-wide uppercase">MENU 01</span>
                <h4 className="text-xl sm:text-2xl font-black text-zinc-900 group-hover:text-rose-900 transition-colors">
                  ① 호흡법 가이드
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                복식호흡, 입술오므리기 호흡, 단계적 기침법, 삼각 자세 호흡을 <strong>자세 이미지</strong>와 <strong>실시간 영상</strong>으로 보며 쉽게 따라 하실 수 있습니다.
              </p>

              {/* Sub-features list */}
              <div className="space-y-1.5 mb-6 text-xs text-zinc-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>호흡법별 올바른 자세 이미지 제공</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>단계별 안내 실시간 영상 및 타이머</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>환자 맞춤 주의사항 및 기대 효과</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-sm font-bold text-rose-900 group-hover:translate-x-1 transition-transform">
              <span>호흡법 배우기 바로가기</span>
              <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Menu 2: 층별 안내도 */}
          <div
            id="main-menu-card-floor"
            onClick={() => onSelectMenu('floor')}
            className="group bg-white rounded-3xl p-6 sm:p-7 border-2 border-zinc-200 hover:border-rose-900 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Burgundy Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-rose-900"></div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center border border-zinc-200 group-hover:bg-rose-900 group-hover:text-white transition-colors">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                  B1F ~ 5F 전체
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold text-rose-900 tracking-wide uppercase">MENU 02</span>
                <h4 className="text-xl sm:text-2xl font-black text-zinc-900 group-hover:text-rose-900 transition-colors">
                  ② 층별 안내도
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                호흡기내과 진료실, 정밀 폐기능 검사실, CT·X-ray 촬영실, 원무과, 약국 등 원내 모든 장소의 위치와 운영시간을 한눈에 파악합니다.
              </p>

              {/* Sub-features list */}
              <div className="space-y-1.5 mb-6 text-xs text-zinc-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>층별 원클릭 평면 안내도 제공</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>주요 진료과·검사실·편의시설 위치</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>운영시간, 준비사항, 원내 직통전화</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-sm font-bold text-rose-900 group-hover:translate-x-1 transition-transform">
              <span>층별 지도 확인하기</span>
              <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Menu 3: 주요 호흡기질환 */}
          <div
            id="main-menu-card-disease"
            onClick={() => onSelectMenu('disease')}
            className="group bg-white rounded-3xl p-6 sm:p-7 border-2 border-zinc-200 hover:border-rose-900 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Burgundy Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-rose-900"></div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-900 flex items-center justify-center border border-rose-200 group-hover:bg-rose-900 group-hover:text-white transition-colors">
                  <Activity className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                  5대 주요 질환
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold text-rose-900 tracking-wide uppercase">MENU 03</span>
                <h4 className="text-xl sm:text-2xl font-black text-zinc-900 group-hover:text-rose-900 transition-colors">
                  ③ 주요 호흡기질환
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                COPD, 천식, 폐렴, 기관지확장증, 급성 기관지염에 대해 환자가 이해하기 쉬운 설명과 <strong>기도 변화 비교 영상</strong>을 제공합니다.
              </p>

              {/* Sub-features list */}
              <div className="space-y-1.5 mb-6 text-xs text-zinc-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>쉬운 일상 비유로 질환 원리 이해</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>주요 증상 및 기도 비교 영상 시뮬레이터</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 flex-shrink-0" />
                  <span>자가 관리 수칙 및 즉시 응급실 내원 신호</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-sm font-bold text-rose-900 group-hover:translate-x-1 transition-transform">
              <span>질환 정보 알아보기</span>
              <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Emergency Action Callout for Patients (Burgundy Alert Card) */}
      <div className="bg-rose-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-rose-800 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-rose-950 px-2.5 py-1 rounded text-rose-200 border border-rose-700">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-300" />
            <span>응급 환자 즉시 도움</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold tracking-tight">
            지금 숨이 많이 차고 가슴이 답답하신가요?
          </h4>
          <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
            당황하지 마시고 바로 자리에 앉아 <strong>[상체 숙이기 호흡]</strong>과 <strong>[입술오므리기 호흡]</strong>을 시행하세요. 
            가슴의 답답함이 훨씬 빠르게 진정됩니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => {
              if (onSelectBreathingTechnique) onSelectBreathingTechnique('tripod');
              onSelectMenu('breathing');
            }}
            className="px-4 py-2.5 rounded-xl bg-white text-rose-950 font-bold text-xs sm:text-sm hover:bg-rose-50 transition-colors shadow"
          >
            상체 숙이기 호흡 바로보기
          </button>
          <button
            onClick={() => {
              if (onSelectBreathingTechnique) onSelectBreathingTechnique('pursed-lip');
              onSelectMenu('breathing');
            }}
            className="px-4 py-2.5 rounded-xl bg-rose-950 text-rose-100 border border-rose-700 font-bold text-xs sm:text-sm hover:bg-rose-800 transition-colors"
          >
            입술오므리기 호흡 보기
          </button>
        </div>
      </div>

      {/* Hospital Respiratory Care Guide summary footer cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm text-xs">
          <div className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-rose-900" />
            <span>흡입기 1:1 맞춤 교육실</span>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            3층 308호에서 전문 간호사가 정량식 및 건조분말 흡입기의 정확한 흡입법을 무료로 지도해 드립니다.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm text-xs">
          <div className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-rose-900" />
            <span>폐 재활 운동센터 (5F)</span>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            산소포화도를 실시간 측정하며 안전하게 폐활량을 기르고 일상 보행 능력을 회복하도록 돕습니다.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm text-xs">
          <div className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-rose-900" />
            <span>호흡기 안심 콜센터</span>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            진료 예약 및 검사 일정 문의는 <strong>1588-0050</strong>으로 전화 주시면 친절히 안내해 드립니다.
          </p>
        </div>
      </div>
    </div>
  );
};
