import React from 'react';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { BreathingTechnique } from '../types';

interface BreathingDiagramProps {
  technique: BreathingTechnique;
}

export const BreathingDiagram: React.FC<BreathingDiagramProps> = ({ technique }) => {
  const { imageDescription } = technique;

  const renderVisualIllustration = () => {
    switch (imageDescription.diagramType) {
      case 'diaphragm':
        return (
          <div className="relative w-full h-80 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-zinc-700 shadow-inner">
            <svg viewBox="0 0 440 280" className="w-full h-full max-w-md select-none" aria-label="복식호흡 자세 안내도">
              <defs>
                <linearGradient id="lungGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
                <linearGradient id="bellyGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#881337" />
                </linearGradient>
              </defs>

              {/* Background silhouette of patient seated comfortably */}
              <path
                d="M 120 70 Q 145 50 170 65 Q 185 80 180 110 L 195 130 Q 200 170 190 220 L 160 250 L 110 250 L 110 180 Z"
                fill="#27272a"
                stroke="#52525b"
                strokeWidth="2"
              />

              {/* Head silhouette */}
              <circle cx="150" cy="55" r="28" fill="#3f3f46" stroke="#71717a" strokeWidth="2" />
              {/* Nose indicator */}
              <path d="M 175 52 L 186 58 L 174 64" fill="none" stroke="#e4e4e7" strokeWidth="2" />
              <text x="195" y="55" fill="#f43f5e" fontSize="12" fontWeight="bold">① 코로 숨 들이마시기</text>

              {/* Lungs */}
              <path
                d="M 145 105 Q 130 115 135 145 Q 148 155 155 140 Z"
                fill="url(#lungGrad)"
                opacity="0.8"
              />
              <path
                d="M 160 105 Q 175 115 170 145 Q 158 155 155 140 Z"
                fill="url(#lungGrad)"
                opacity="0.8"
              />

              {/* Chest Hand (Still) */}
              <rect x="125" y="115" width="46" height="18" rx="6" fill="#881337" stroke="#fda4af" strokeWidth="1.5" />
              <text x="130" y="128" fill="#ffffff" fontSize="10" fontWeight="bold">가슴 손 (정지)</text>

              {/* Diaphragm Muscle (curved arch moving down) */}
              <path
                d="M 130 152 Q 150 142 170 152"
                fill="none"
                stroke="#fb7185"
                strokeWidth="4"
                strokeDasharray="4 2"
              />
              <text x="75" y="152" fill="#fb7185" fontSize="11" fontWeight="bold">횡격막 하강 ➔</text>

              {/* Abdomen (Bulging belly with motion arrow) */}
              <path
                d="M 175 160 Q 215 180 175 205"
                fill="none"
                stroke="#e11d48"
                strokeWidth="3.5"
              />
              {/* Belly Hand */}
              <rect x="175" y="170" width="56" height="20" rx="6" fill="#881337" stroke="#fda4af" strokeWidth="2" />
              <text x="180" y="184" fill="#ffffff" fontSize="10" fontWeight="bold">배 손 (볼록)</text>

              {/* Arrows showing belly moving forward */}
              <path d="M 235 180 L 255 180" stroke="#fda4af" strokeWidth="3" markerEnd="url(#arrow)" />
              <polygon points="255,175 265,180 255,185" fill="#fda4af" />
              <text x="270" y="184" fill="#fecdd3" fontSize="12" fontWeight="bold">배만 팽창</text>

              {/* Explanation cards inside SVG */}
              <g transform="translate(20, 215)">
                <rect width="400" height="50" rx="8" fill="#18181b" stroke="#71717a" strokeWidth="1" />
                <circle cx="20" cy="25" r="9" fill="#881337" />
                <text x="17" y="29" fill="#ffffff" fontSize="11" fontWeight="bold">✓</text>
                <text x="36" y="20" fill="#f4f4f5" fontSize="12" fontWeight="bold">
                  핵심: 가슴의 손은 가만히, 배의 손만 오르내리도록 합니다
                </text>
                <text x="36" y="38" fill="#a1a1aa" fontSize="11">
                  어깨를 으쓱거리거나 목 근육에 힘이 들어가지 않도록 온몸을 이완하세요.
                </text>
              </g>
            </svg>
          </div>
        );

      case 'lips':
        return (
          <div className="relative w-full h-80 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-zinc-700 shadow-inner">
            <svg viewBox="0 0 440 280" className="w-full h-full max-w-md select-none" aria-label="입술오므리기 호흡 안내도">
              {/* Profile silhouette */}
              <path
                d="M 90 230 L 90 140 Q 90 60 160 50 Q 200 45 220 75 Q 230 90 225 105 L 245 115 L 235 125 Q 248 133 242 143 L 225 145 Q 220 185 160 210 L 160 230 Z"
                fill="#27272a"
                stroke="#52525b"
                strokeWidth="2"
              />

              {/* 1. Inhale nose box */}
              <rect x="25" y="45" width="135" height="42" rx="8" fill="#18181b" stroke="#881337" strokeWidth="1.5" />
              <text x="35" y="62" fill="#fb7185" fontSize="11" fontWeight="bold">1단계: 코로 들이마시기</text>
              <text x="35" y="77" fill="#e4e4e7" fontSize="10">2초간 코로 공기 흡입</text>
              <path d="M 165 65 Q 210 70 230 100" fill="none" stroke="#fb7185" strokeWidth="2.5" strokeDasharray="3 3" />

              {/* 2. Pursed Lips Mouth Indicator */}
              <circle cx="238" cy="138" r="8" fill="#881337" stroke="#fda4af" strokeWidth="2" />
              <ellipse cx="238" cy="138" rx="4" ry="7" fill="#ffffff" />
              <text x="255" y="135" fill="#ffffff" fontSize="11" fontWeight="bold">촛불 불듯 오므린 입술</text>

              {/* Gentle Exhale stream (1:2 ratio) */}
              <path d="M 248 140 L 370 140" stroke="#fda4af" strokeWidth="4" strokeDasharray="8 4" />
              <polygon points="370,135 385,140 370,145" fill="#fda4af" />

              {/* 2. Exhale box */}
              <rect x="255" y="150" width="165" height="52" rx="8" fill="#18181b" stroke="#be123c" strokeWidth="1.5" />
              <text x="265" y="168" fill="#f43f5e" fontSize="11" fontWeight="bold">2단계: 입술 오므려 내쉬기</text>
              <text x="265" y="183" fill="#e4e4e7" fontSize="10">4초간 천천히 촛불 흔들리듯 분다</text>
              <text x="265" y="196" fill="#fda4af" fontSize="9" fontWeight="bold">들이마신 시간의 2배 이상 길게</text>

              {/* Ratio badge at bottom */}
              <g transform="translate(40, 225)">
                <rect width="360" height="42" rx="6" fill="#881337" opacity="0.9" />
                <text x="20" y="26" fill="#ffffff" fontSize="12" fontWeight="bold">
                  호흡 시간 비율 공식 = 들이마시기 (1) : 내쉬기 (2 이상)
                </text>
              </g>
            </svg>
          </div>
        );

      case 'cough':
        return (
          <div className="relative w-full h-80 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-zinc-700 shadow-inner">
            <svg viewBox="0 0 440 280" className="w-full h-full max-w-md select-none" aria-label="허프 기침법 자세 안내도">
              {/* Seated figure with pillow */}
              <path
                d="M 110 90 Q 140 70 170 85 L 180 130 Q 185 180 175 220 L 140 245 L 90 245 Z"
                fill="#27272a"
                stroke="#52525b"
                strokeWidth="2"
              />
              {/* Head with open mouth */}
              <circle cx="150" cy="55" r="26" fill="#3f3f46" stroke="#71717a" strokeWidth="2" />
              <path d="M 165 60 Q 180 65 170 75 Z" fill="#881337" stroke="#fda4af" strokeWidth="1.5" />
              <text x="185" y="65" fill="#fda4af" fontSize="12" fontWeight="bold">입을 ‘O’로 열기</text>

              {/* Pillow held on abdomen */}
              <ellipse cx="185" cy="165" rx="28" ry="38" fill="#881337" stroke="#fda4af" strokeWidth="2" />
              <text x="168" y="169" fill="#ffffff" fontSize="11" fontWeight="bold">베개 지지</text>

              {/* Huff blast arrows */}
              <g transform="translate(180, 50)">
                <path d="M 15 20 L 55 10" stroke="#f43f5e" strokeWidth="3" />
                <path d="M 15 25 L 65 25" stroke="#f43f5e" strokeWidth="4" />
                <path d="M 15 30 L 55 40" stroke="#f43f5e" strokeWidth="3" />
                <text x="75" y="30" fill="#ffffff" fontSize="14" fontWeight="bold">" 하! 하! "</text>
              </g>

              {/* Step annotations */}
              <g transform="translate(25, 215)">
                <rect width="390" height="50" rx="8" fill="#18181b" stroke="#71717a" strokeWidth="1" />
                <text x="16" y="22" fill="#fda4af" fontSize="12" fontWeight="bold">
                  유리창에 입김을 불듯 "하-!" 하고 배 힘으로 밀어내기
                </text>
                <text x="16" y="38" fill="#d4d4d8" fontSize="11">
                  목을 쥐어짜는 마른기침을 방지하고, 기관지 깊은 곳 가래를 안전하게 올립니다.
                </text>
              </g>
            </svg>
          </div>
        );

      case 'tripod':
        return (
          <div className="relative w-full h-80 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-zinc-700 shadow-inner">
            <svg viewBox="0 0 440 280" className="w-full h-full max-w-md select-none" aria-label="상체 숙이기 호흡 안내도">
              {/* Chair and table */}
              <rect x="40" y="160" width="60" height="75" fill="#3f3f46" rx="4" />
              <rect x="250" y="140" width="70" height="95" fill="#3f3f46" rx="4" />
              <text x="260" y="180" fill="#a1a1aa" fontSize="11">테이블</text>

              {/* Leaning torso (30-45 degree angle) */}
              <path
                d="M 80 180 L 120 150 L 190 125 L 200 135 L 140 185 L 90 200 Z"
                fill="#27272a"
                stroke="#52525b"
                strokeWidth="2"
              />

              {/* Head */}
              <circle cx="215" cy="115" r="22" fill="#3f3f46" stroke="#71717a" strokeWidth="2" />

              {/* Arms propped firmly on table */}
              <path
                d="M 190 130 L 250 142 L 270 142"
                fill="none"
                stroke="#881337"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <circle cx="270" cy="142" r="6" fill="#fda4af" />

              {/* Angle arc 30-45 deg */}
              <path d="M 120 170 A 40 40 0 0 0 145 145" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
              <text x="145" y="165" fill="#f43f5e" fontSize="11" fontWeight="bold">30°~45° 숙임</text>

              {/* Weight support point */}
              <rect x="235" y="80" width="160" height="48" rx="8" fill="#18181b" stroke="#881337" strokeWidth="1.5" />
              <text x="245" y="98" fill="#fda4af" fontSize="11" fontWeight="bold">양 팔꿈치 지지</text>
              <text x="245" y="114" fill="#e4e4e7" fontSize="10">상체 무게를 테이블에 분산</text>

              {/* Bottom card */}
              <g transform="translate(25, 218)">
                <rect width="390" height="48" rx="8" fill="#18181b" stroke="#71717a" strokeWidth="1" />
                <text x="16" y="20" fill="#fecdd3" fontSize="12" fontWeight="bold">
                  횡격막 공간 확보 & 목·어깨 보조근육 피로 즉시 해소
                </text>
                <text x="16" y="36" fill="#d4d4d8" fontSize="11">
                  보행 중 숨이 찰 때 난간이나 보행기, 무릎을 짚고 이 자세를 취하세요.
                </text>
              </g>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-4 border-b border-zinc-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-800"></span>
          <h3 className="font-bold text-lg sm:text-xl text-zinc-900">
            {imageDescription.postureTitle}
          </h3>
        </div>
        <span className="text-xs bg-rose-50 text-rose-900 px-3 py-1 rounded-full font-semibold border border-rose-200">
          호흡법 설명 이미지
        </span>
      </div>

      {/* Visual illustration box */}
      <div className="mb-5">
        {renderVisualIllustration()}
      </div>

      {/* Posture Steps List */}
      <div className="space-y-3 mb-5">
        <h4 className="text-sm font-bold text-zinc-800 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-rose-800" />
          <span>올바른 자세 세부 안내</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {imageDescription.postureDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed flex items-start gap-2.5"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-900 text-white font-bold text-xs flex items-center justify-center">
                {index + 1}
              </span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Check Points */}
      <div className="bg-rose-50/60 rounded-xl p-4 border border-rose-200">
        <h4 className="text-xs font-bold text-rose-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-rose-800" />
          <span>자세 시행 시 꼭 확인할 핵심 체크포인트</span>
        </h4>
        <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-800">
          {imageDescription.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-rose-700 font-bold mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
