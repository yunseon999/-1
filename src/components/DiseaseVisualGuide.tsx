import React, { useState } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';
import { RespiratoryDisease } from '../types';

interface DiseaseVisualGuideProps {
  disease: RespiratoryDisease;
}

export const DiseaseVisualGuide: React.FC<DiseaseVisualGuideProps> = ({ disease }) => {
  const [viewMode, setViewMode] = useState<'compare' | 'disease_only' | 'normal_only'>('compare');
  const [isSimulatingAirflow, setIsSimulatingAirflow] = useState<boolean>(true);

  const { visualGuide } = disease;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-zinc-100 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-800"></span>
            <h3 className="font-bold text-lg sm:text-xl text-zinc-900">
              {visualGuide.title} (시각 이미지 & 영상 안내)
            </h3>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">
            {visualGuide.description}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-xl border border-zinc-200 text-xs">
          <button
            onClick={() => setViewMode('compare')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              viewMode === 'compare'
                ? 'bg-rose-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            정상 vs 질환 비교
          </button>
          <button
            onClick={() => setViewMode('disease_only')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              viewMode === 'disease_only'
                ? 'bg-rose-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            질환 상태만
          </button>
          <button
            onClick={() => setViewMode('normal_only')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              viewMode === 'normal_only'
                ? 'bg-rose-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            정상 상태만
          </button>
        </div>
      </div>

      {/* Visual Canvas Diagram */}
      <div className="relative w-full aspect-[16/9] sm:h-80 bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-inner flex items-center justify-center p-4">
        <svg viewBox="0 0 600 320" className="w-full h-full max-w-2xl select-none">
          <defs>
            <linearGradient id="healthyAirway" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="diseasedAirway" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>
            <pattern id="mucusPattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ca8a04" opacity="0.6" />
              <circle cx="7" cy="7" r="2" fill="#ca8a04" opacity="0.8" />
            </pattern>
          </defs>

          {/* Left Side: NORMAL AIRWAY */}
          {(viewMode === 'compare' || viewMode === 'normal_only') && (
            <g transform={viewMode === 'normal_only' ? 'translate(150, 0)' : 'translate(30, 0)'}>
              {/* Box border */}
              <rect x="0" y="20" width="250" height="270" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
              
              {/* Title Badge */}
              <rect x="20" y="32" width="110" height="24" rx="6" fill="#10b981" />
              <text x="75" y="48" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                ✓ 정상 기도 상태
              </text>

              {/* Cross section circle of Bronchus */}
              <circle cx="125" cy="140" r="70" fill="#27272a" stroke="#4ade80" strokeWidth="3" />
              {/* Airway lumen (wide, clear) */}
              <circle cx="125" cy="140" r="54" fill="#09090b" stroke="#86efac" strokeWidth="2" strokeDasharray="3 2" />

              {/* Airflow Particles Animation */}
              {isSimulatingAirflow && (
                <g>
                  <circle cx="125" cy="140" r="20" fill="#38bdf8" opacity="0.3" className="animate-ping" />
                  <path d="M 85 140 Q 125 120 165 140" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="4 2" />
                  <path d="M 85 150 Q 125 160 165 150" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="4 2" />
                </g>
              )}

              {/* Labels */}
              <text x="125" y="145" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                원활한 공기 흐름
              </text>
              <text x="125" y="240" fill="#e4e4e7" fontSize="12" fontWeight="bold" textAnchor="middle">
                넓고 깨끗한 공기 통로
              </text>
              <text x="125" y="260" fill="#9ca3af" fontSize="11" textAnchor="middle">
                점막이 얇고 근육이 이완되어 숨쉬기 편안함
              </text>
            </g>
          )}

          {/* Right Side: DISEASED AIRWAY */}
          {(viewMode === 'compare' || viewMode === 'disease_only') && (
            <g transform={viewMode === 'disease_only' ? 'translate(150, 0)' : 'translate(310, 0)'}>
              {/* Box border */}
              <rect x="0" y="20" width="260" height="270" rx="12" fill="#18181b" stroke="#881337" strokeWidth="2" />

              {/* Title Badge */}
              <rect x="20" y="32" width="125" height="24" rx="6" fill="#881337" />
              <text x="82" y="48" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                ⚠ {disease.name.split(' ')[0]} 상태
              </text>

              {/* Cross section circle of diseased Bronchus (thick, swollen wall) */}
              <circle cx="130" cy="140" r="70" fill="#27272a" stroke="#881337" strokeWidth="6" />
              {/* Swollen red inflamed mucosal ring */}
              <circle cx="130" cy="140" r="62" fill="#be123c" opacity="0.6" />
              {/* Constricted lumen (tiny, plugged) */}
              <circle cx="130" cy="140" r="24" fill="#450a0a" stroke="#f43f5e" strokeWidth="3" />

              {/* Mucus plug in center */}
              <ellipse cx="130" cy="140" rx="15" ry="12" fill="#eab308" opacity="0.85" />
              <text x="130" y="144" fill="#713f12" fontSize="9" fontWeight="bold" textAnchor="middle">
                가래/점액
              </text>

              {/* Spasm Arrows */}
              <path d="M 68 140 L 98 140" stroke="#fda4af" strokeWidth="2" />
              <polygon points="98,136 106,140 98,144" fill="#fda4af" />
              <path d="M 192 140 L 162 140" stroke="#fda4af" strokeWidth="2" />
              <polygon points="162,136 154,140 162,144" fill="#fda4af" />

              {/* Labels */}
              <text x="130" y="235" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">
                협착 및 점액 폐쇄
              </text>
              <text x="130" y="255" fill="#fecdd3" fontSize="11" textAnchor="middle">
                부어오른 기도 점막 + 끈적한 가래로 숨길 차단
              </text>
              <text x="130" y="272" fill="#fda4af" fontSize="10" textAnchor="middle">
                빨대로 숨을 쉬는 듯한 답답함 유발
              </text>
            </g>
          )}

          {/* Airflow flow arrow in compare mode */}
          {viewMode === 'compare' && (
            <g transform="translate(268, 140)">
              <circle cx="12" cy="0" r="14" fill="#27272a" stroke="#71717a" />
              <text x="12" y="4" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">➔</text>
            </g>
          )}
        </svg>

        {/* Video Simulation Floating Controls */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-800 text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span>공기 흐름 실시간 애니메이션 가이드</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSimulatingAirflow(!isSimulatingAirflow)}
              className="flex items-center gap-1 text-white hover:text-rose-300 font-medium"
            >
              {isSimulatingAirflow ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>일시정지</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>재생하기</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Text Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200 text-xs">
          <div className="font-bold text-zinc-800 mb-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>정상 상태의 기도</span>
          </div>
          <p className="text-zinc-600 leading-relaxed">
            {visualGuide.normalState}
          </p>
        </div>

        <div className="bg-rose-50/70 p-3.5 rounded-xl border border-rose-200 text-xs">
          <div className="font-bold text-rose-950 mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-800" />
            <span>질환 발생 시 기도 변화</span>
          </div>
          <p className="text-zinc-700 leading-relaxed">
            {visualGuide.diseaseState}
          </p>
        </div>
      </div>
    </div>
  );
};
