import React, { useState } from 'react';
import { ArrowLeft, Wind, AlertCircle, HeartPulse, CheckCircle, Users } from 'lucide-react';
import { BREATHING_TECHNIQUES } from '../data/respiratoryData';
import { BreathingTechnique, MainMenuType } from '../types';
import { BreathingDiagram } from './BreathingDiagram';
import { BreathingVideoPlayer } from './BreathingVideoPlayer';

interface BreathingGuideViewProps {
  onNavigate: (menu: MainMenuType) => void;
  initialSelectedId?: string;
}

export const BreathingGuideView: React.FC<BreathingGuideViewProps> = ({
  onNavigate,
  initialSelectedId = 'diaphragmatic',
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId);

  const selectedTechnique: BreathingTechnique =
    BREATHING_TECHNIQUES.find((t) => t.id === selectedId) || BREATHING_TECHNIQUES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Top Breadcrumb and Return button */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 text-zinc-600 hover:text-rose-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>메인 홈으로</span>
          </button>
          <span>/</span>
          <span className="font-bold text-rose-900">① 호흡법 가이드 (4대 호흡법)</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-rose-900 text-white font-bold px-3 py-1 rounded-full shadow-sm">
            4가지 맞춤 호흡 치료법
          </span>
        </div>
      </div>

      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-900 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
            <Wind className="w-3.5 h-3.5" />
            <span>환자 맞춤 재활 안내</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            호흡법 가이드
          </h2>
          <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
            이미지로 올바른 자세와 기본 원리를 이해하고, 실시간 영상 가이드를 보며 편안하게 따라 할 수 있습니다. 
            아래 4가지 호흡법 중 원하시는 항목을 선택해 보세요.
          </p>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs text-zinc-700 min-w-[240px]">
          <div className="font-bold text-rose-950 mb-1 flex items-center gap-1.5">
            <HeartPulse className="w-4 h-4 text-rose-800" />
            <span>호흡 훈련 권장 수칙</span>
          </div>
          <p className="text-zinc-600">
            무리하지 마시고 하루 3회, 편안한 식전이나 휴식 시간에 5~10분간 실시하세요.
          </p>
        </div>
      </div>

      {/* 4 Breathing Technique Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {BREATHING_TECHNIQUES.map((technique, index) => {
          const isSelected = technique.id === selectedId;
          return (
            <button
              key={technique.id}
              id={`breathing-card-${technique.id}`}
              onClick={() => setSelectedId(technique.id)}
              className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-rose-900 text-white border-rose-900 shadow-lg ring-2 ring-rose-700'
                  : 'bg-white hover:bg-zinc-50 text-zinc-900 border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-rose-950 text-rose-200 border border-rose-700'
                        : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                    }`}
                  >
                    호흡법 0{index + 1}
                  </span>
                  <span
                    className={`text-[11px] font-bold ${
                      isSelected ? 'text-rose-200' : 'text-rose-900'
                    }`}
                  >
                    {technique.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg mb-1 leading-snug">
                  {technique.name}
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    isSelected ? 'text-rose-200' : 'text-zinc-500'
                  }`}
                >
                  {technique.englishName}
                </p>
                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${
                    isSelected ? 'text-zinc-100' : 'text-zinc-600'
                  }`}
                >
                  {technique.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between text-xs font-bold">
                <span>{isSelected ? '현재 선택됨' : '상세 안내 보기'}</span>
                <span className="text-base">➔</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Breathing Method Full Details */}
      <div className="space-y-6">
        {/* Detail Title Header Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-rose-900 text-white text-xs font-bold px-2.5 py-0.5 rounded">
                  {selectedTechnique.badge}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {selectedTechnique.englishName}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                {selectedTechnique.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-zinc-500 block mb-1">권장 훈련 주기</span>
              <span className="text-xs sm:text-sm font-bold text-rose-900 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 inline-block">
                {selectedTechnique.recommendation}
              </span>
            </div>
          </div>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-4">
            {selectedTechnique.summary}
          </p>

          {/* Target Patients */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-100 text-xs">
            <span className="font-bold text-zinc-700 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-rose-800" />
              <span>추천 대상:</span>
            </span>
            {selectedTechnique.targetPatients.map((target, idx) => (
              <span
                key={idx}
                className="bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-md font-medium border border-zinc-200"
              >
                {target}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Image Explanation */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-rose-900 text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-zinc-900">
              호흡법 설명 (이미지 형태)
            </h3>
            <span className="text-xs text-zinc-500 font-normal">
              — 환자가 그림으로 올바른 자세와 동작 원리를 직관적으로 이해할 수 있습니다
            </span>
          </div>
          <BreathingDiagram technique={selectedTechnique} />
        </div>

        {/* Section 2: Video Step by Step Guide */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-rose-900 text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-zinc-900">
              단계별 안내 (영상 형태)
            </h3>
            <span className="text-xs text-zinc-500 font-normal">
              — 영상을 보며 호흡 속도와 단계별 지침을 실시간으로 따라 하세요
            </span>
          </div>
          <BreathingVideoPlayer technique={selectedTechnique} />
        </div>

        {/* Benefits & Precautions (Burgundy accent) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Benefits */}
          <div className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm">
            <h4 className="font-bold text-sm sm:text-base text-zinc-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>호흡법 시행 시 기대 효과</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
              {selectedTechnique.videoGuide.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-900 font-bold">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Precautions */}
          <div className="bg-rose-50/50 rounded-2xl p-5 border border-rose-200 shadow-sm">
            <h4 className="font-bold text-sm sm:text-base text-rose-950 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-800" />
              <span>환자 주의사항</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-800">
              {selectedTechnique.videoGuide.cautions.map((caution, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-800 font-bold">•</span>
                  <span>{caution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
