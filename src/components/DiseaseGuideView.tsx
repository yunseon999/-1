import React, { useState } from 'react';
import { ArrowLeft, Activity, AlertOctagon, HeartHandshake, HelpCircle, ShieldCheck, Flame, ChevronRight } from 'lucide-react';
import { RESPIRATORY_DISEASES } from '../data/respiratoryData';
import { RespiratoryDisease, MainMenuType } from '../types';
import { DiseaseVisualGuide } from './DiseaseVisualGuide';

interface DiseaseGuideViewProps {
  onNavigate: (menu: MainMenuType) => void;
  initialDiseaseId?: string;
}

export const DiseaseGuideView: React.FC<DiseaseGuideViewProps> = ({
  onNavigate,
  initialDiseaseId = 'copd',
}) => {
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>(initialDiseaseId);

  const selectedDisease: RespiratoryDisease =
    RESPIRATORY_DISEASES.find((d) => d.id === selectedDiseaseId) || RESPIRATORY_DISEASES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Breadcrumb & Navigation */}
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
          <span className="font-bold text-rose-900">③ 주요 호흡기질환 (5대 질환)</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-rose-900 text-white font-bold px-3 py-1 rounded-full shadow-sm">
            환자 친화적 의학 정보
          </span>
        </div>
      </div>

      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-900 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
            <Activity className="w-3.5 h-3.5" />
            <span>건강 정보 포털</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            주요 호흡기질환 안내
          </h2>
          <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
            어려운 의학용어 대신 환자와 보호자가 쉽게 이해할 수 있는 비유와 시각 이미지·영상을 제공합니다.
            알고 싶은 질환을 아래에서 선택해 보세요.
          </p>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs text-zinc-700 min-w-[240px]">
          <div className="font-bold text-rose-950 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-rose-800" />
            <span>정확한 전문의 감수 정보</span>
          </div>
          <p className="text-zinc-600">
            본 정보는 호흡기내과 전문의 진료 가이드라인을 바탕으로 알기 쉽게 재구성되었습니다.
          </p>
        </div>
      </div>

      {/* 5 Disease Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {RESPIRATORY_DISEASES.map((disease, idx) => {
          const isSelected = disease.id === selectedDiseaseId;
          return (
            <button
              key={disease.id}
              id={`disease-card-${disease.id}`}
              onClick={() => setSelectedDiseaseId(disease.id)}
              className={`text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-rose-900 text-white border-rose-900 shadow-lg ring-2 ring-rose-700'
                  : 'bg-white hover:bg-zinc-50 text-zinc-900 border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-rose-950 text-rose-200 border border-rose-700' : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    질환 0{idx + 1}
                  </span>
                  <span
                    className={`text-[10px] font-bold truncate ${
                      isSelected ? 'text-rose-200' : 'text-rose-900'
                    }`}
                  >
                    {disease.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base mb-1 leading-snug">
                  {disease.name}
                </h3>
                <p
                  className={`text-[11px] mb-2 font-mono truncate ${
                    isSelected ? 'text-rose-200' : 'text-zinc-500'
                  }`}
                >
                  {disease.englishName}
                </p>
                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${
                    isSelected ? 'text-zinc-100' : 'text-zinc-600'
                  }`}
                >
                  {disease.summary}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-current/20 flex items-center justify-between text-xs font-bold">
                <span>{isSelected ? '선택됨' : '자세히'}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Disease Details */}
      <div className="space-y-6">
        {/* Title & Patient Analogy Explanation Box */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-zinc-200 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-rose-900 text-white text-xs font-bold px-3 py-1 rounded">
                  {selectedDisease.badge}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {selectedDisease.englishName}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                {selectedDisease.name}
              </h3>
            </div>
          </div>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-5">
            {selectedDisease.summary}
          </p>

          {/* Easy Explanation with Patient Analogy */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 font-bold text-rose-950 text-sm sm:text-base mb-2">
              <HelpCircle className="w-5 h-5 text-rose-800" />
              <span>환자가 이해하기 쉬운 질환 설명 (비유로 이해하기)</span>
            </div>
            <p className="text-zinc-800 text-sm sm:text-base leading-relaxed">
              {selectedDisease.easyExplanation}
            </p>
          </div>
        </div>

        {/* Visual Guide (Image & Video Simulation) */}
        <div>
          <DiseaseVisualGuide disease={selectedDisease} />
        </div>

        {/* Main Symptoms Grid */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-zinc-100 pb-3">
            <h4 className="font-bold text-lg text-zinc-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-rose-900" />
              <span>{selectedDisease.name.split(' ')[0]}의 주요 증상</span>
            </h4>
            <span className="text-xs text-zinc-500">
              증상이 지속될 경우 호흡기내과 진료를 권장합니다
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedDisease.mainSymptoms.map((symptom, sIdx) => {
              const severityBadge =
                symptom.severity === 'urgent'
                  ? { label: '긴급 주의', bg: 'bg-rose-900 text-white' }
                  : symptom.severity === 'warning'
                  ? { label: '주의 필요', bg: 'bg-rose-800 text-white' }
                  : { label: '주요 증상', bg: 'bg-zinc-200 text-zinc-800' };

              return (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-base text-zinc-900">
                      {symptom.title}
                    </h5>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${severityBadge.bg}`}>
                      {severityBadge.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Characteristics & Causes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Characteristics */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm">
            <h4 className="font-bold text-base sm:text-lg text-zinc-900 mb-3 flex items-center gap-2">
              <Flame className="w-5 h-5 text-rose-800" />
              <span>질환의 핵심 특징</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
              {selectedDisease.characteristicsAndCauses.characteristics.map((char, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-900 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm">
            <h4 className="font-bold text-base sm:text-lg text-zinc-900 mb-3 flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-zinc-700" />
              <span>주요 발병 원인 및 위험 인자</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
              {selectedDisease.characteristicsAndCauses.causes.map((cause, causeIdx) => (
                <li key={causeIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Daily Care & Emergency Warning Banner */}
        <div className="space-y-4">
          {/* Daily Care */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm">
            <h4 className="font-bold text-base sm:text-lg text-zinc-900 mb-3 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-emerald-600" />
              <span>환자 일상생활 자가 관리 수칙</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedDisease.dailyCare.map((care, careIdx) => (
                <div
                  key={careIdx}
                  className="bg-zinc-50 p-3 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-700 flex items-start gap-2"
                >
                  <span className="font-bold text-rose-900">✓</span>
                  <span>{care}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Warning Banner (Burgundy Theme) */}
          <div className="bg-rose-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-rose-800">
            <div className="flex items-center gap-2.5 mb-2.5">
              <AlertOctagon className="w-6 h-6 text-rose-200 flex-shrink-0" />
              <h4 className="font-extrabold text-base sm:text-lg tracking-tight">
                🚨 즉시 병원 또는 응급실로 방문해야 하는 위험 신호
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-rose-100 mb-3">
              아래와 같은 증상이 나타나면 지체하지 마시고 119 또는 본원 응급의료센터로 즉시 연락하세요.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedDisease.emergencySigns.map((sign, signIdx) => (
                <div
                  key={signIdx}
                  className="bg-rose-950/70 border border-rose-700/80 p-3 rounded-xl text-xs text-rose-100 font-medium leading-relaxed"
                >
                  ⚠ {sign}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
