import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, ChevronRight, ChevronLeft, Check, Sparkles } from 'lucide-react';
import { BreathingTechnique, BreathingStep } from '../types';

interface BreathingVideoPlayerProps {
  technique: BreathingTechnique;
}

export const BreathingVideoPlayer: React.FC<BreathingVideoPlayerProps> = ({ technique }) => {
  const { videoGuide } = technique;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(videoGuide.steps[0]?.durationSeconds || 3);
  const [currentCycle, setCurrentCycle] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const currentStep: BreathingStep = videoGuide.steps[currentStepIndex] || videoGuide.steps[0];

  // Play gentle sound cue on phase change
  const playBeep = (type: 'inhale' | 'hold' | 'exhale' | 'rest') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = 'sine';
      if (type === 'inhale') {
        osc.frequency.setValueAtTime(392, audioCtxRef.current.currentTime); // G4
        osc.frequency.exponentialRampToValueAtTime(523.25, audioCtxRef.current.currentTime + 0.3); // C5
      } else if (type === 'exhale') {
        osc.frequency.setValueAtTime(523.25, audioCtxRef.current.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(392, audioCtxRef.current.currentTime + 0.4); // G4
      } else {
        osc.frequency.setValueAtTime(440, audioCtxRef.current.currentTime); // A4
      }

      gain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.45);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  // Timer loop for video playback
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isPlaying) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Advance step
            const nextIndex = currentStepIndex + 1;
            if (nextIndex < videoGuide.steps.length) {
              setCurrentStepIndex(nextIndex);
              const nextStep = videoGuide.steps[nextIndex];
              playBeep(nextStep.actionType);
              return nextStep.durationSeconds;
            } else {
              // Completed one cycle
              if (currentCycle < videoGuide.totalCycles) {
                setCurrentCycle((c) => c + 1);
                setCurrentStepIndex(0);
                const firstStep = videoGuide.steps[0];
                playBeep(firstStep.actionType);
                return firstStep.durationSeconds;
              } else {
                // Completed all cycles
                setIsPlaying(false);
                setCurrentStepIndex(0);
                return videoGuide.steps[0].durationSeconds;
              }
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, currentStepIndex, currentCycle, videoGuide, soundEnabled]);

  const handleTogglePlay = () => {
    if (!isPlaying) {
      // Starting
      if (currentStepIndex === 0 && timeRemaining === currentStep.durationSeconds) {
        playBeep(currentStep.actionType);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
    setCurrentCycle(1);
    setTimeRemaining(videoGuide.steps[0].durationSeconds);
  };

  const handleSelectStep = (idx: number) => {
    setCurrentStepIndex(idx);
    setTimeRemaining(videoGuide.steps[idx].durationSeconds);
    if (isPlaying) {
      playBeep(videoGuide.steps[idx].actionType);
    }
  };

  // Visual scaling percentage for the breathing circle
  const getPacerScaleClass = () => {
    if (!isPlaying) return 'scale-90';
    switch (currentStep.actionType) {
      case 'inhale':
        return 'scale-125 transition-transform duration-[3000ms] ease-out';
      case 'hold':
        return 'scale-125 transition-transform duration-500';
      case 'exhale':
        return 'scale-85 transition-transform duration-[4000ms] ease-in-out';
      case 'rest':
      default:
        return 'scale-90 transition-transform duration-1000';
    }
  };

  const getPacerTheme = () => {
    switch (currentStep.actionType) {
      case 'inhale':
        return {
          bg: 'from-rose-800 to-rose-950',
          ring: 'ring-rose-500',
          tag: '들이마시기 (Inhale)',
          desc: '코로 부드럽고 깊게 들이마시는 중입니다',
        };
      case 'hold':
        return {
          bg: 'from-amber-700 to-zinc-900',
          ring: 'ring-amber-400',
          tag: '잠깐 멈추기 (Hold)',
          desc: '폐 속의 공기를 느끼며 부드럽게 멈춥니다',
        };
      case 'exhale':
        return {
          bg: 'from-rose-950 to-zinc-950',
          ring: 'ring-rose-400',
          tag: '길게 내쉬기 (Exhale)',
          desc: '입술을 모으고 천천히 끝까지 내보냅니다',
        };
      case 'rest':
      default:
        return {
          bg: 'from-zinc-800 to-zinc-900',
          ring: 'ring-zinc-500',
          tag: '호흡 정돈 및 휴식',
          desc: '어깨와 목의 힘을 풀고 편안하게 쉽니다',
        };
    }
  };

  const pacerTheme = getPacerTheme();

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-zinc-200">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-zinc-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-800"></span>
          <h3 className="font-bold text-lg sm:text-xl text-zinc-900">
            {videoGuide.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full font-semibold border border-zinc-300">
            반복 회차: <strong className="text-rose-900">{currentCycle}</strong> / {videoGuide.totalCycles}회
          </span>
          <span className="text-xs bg-rose-900 text-white px-3 py-1 rounded-full font-bold shadow-sm">
            영상 가이드 모드
          </span>
        </div>
      </div>

      {/* Video Screen Container */}
      <div 
        className="relative w-full aspect-video sm:h-96 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl flex flex-col justify-between p-4 sm:p-6 select-none"
        id="breathing-video-screen"
      >
        {/* Top Video Overlay Info */}
        <div className="flex items-center justify-between text-xs z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-rose-900/80 text-white font-bold tracking-wide flex items-center gap-1.5 border border-rose-700">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-400'}`}></span>
              {isPlaying ? '실시간 가이드 진행중' : '일시정지'}
            </span>
            <span className="text-zinc-400 hidden sm:inline">
              단계: {currentStepIndex + 1} / {videoGuide.steps.length}단계
            </span>
          </div>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800/90 text-zinc-300 hover:text-white hover:bg-zinc-700 border border-zinc-700 transition-colors"
            title="소리 알림 토글"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-[11px]">안내음 켜짐</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-[11px]">안내음 꺼짐</span>
              </>
            )}
          </button>
        </div>

        {/* Center Animated Breathing Pacer / Video Core */}
        <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
          {/* Breathing Circle Ring */}
          <div className="relative flex items-center justify-center mb-3">
            {/* Pulsing Outer Glow */}
            <div
              className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br ${pacerTheme.bg} shadow-2xl flex flex-col items-center justify-center text-white ring-4 ${pacerTheme.ring} ${getPacerScaleClass()}`}
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-rose-200 mb-0.5">
                {pacerTheme.tag}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {timeRemaining}
                <span className="text-sm font-normal ml-0.5 text-zinc-300">초</span>
              </span>
              <span className="text-[11px] text-zinc-300 mt-1 max-w-[120px] leading-tight text-center">
                {currentStep.visualCue}
              </span>
            </div>
          </div>

          {/* Subtitle Caption */}
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-zinc-800 max-w-lg mx-auto mt-2">
            <p className="text-sm sm:text-base font-semibold text-white tracking-tight">
              {currentStep.instruction}
            </p>
            <p className="text-xs text-rose-300 mt-0.5 flex items-center justify-center gap-1 font-medium">
              <Sparkles className="w-3 h-3" />
              <span>환자 팁: {currentStep.patientTip}</span>
            </p>
          </div>
        </div>

        {/* Bottom Video Progress & Control Bar */}
        <div className="z-10 space-y-2 mt-auto">
          {/* Step Timeline Bars */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {videoGuide.steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectStep(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx < currentStepIndex
                    ? 'bg-rose-700'
                    : idx === currentStepIndex
                    ? 'bg-rose-500 ring-2 ring-rose-400 animate-pulse'
                    : 'bg-zinc-800'
                }`}
                title={`${step.stepNumber}단계: ${step.title}`}
              />
            ))}
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-800/80">
            <div className="flex items-center gap-2">
              <button
                id="video-play-btn"
                onClick={handleTogglePlay}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-900 hover:bg-rose-800 text-white font-bold text-sm shadow-lg transition-all border border-rose-700 active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span>일시정지</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>{currentCycle > 1 || currentStepIndex > 0 ? '이어하기' : '영상 시작'}</span>
                  </>
                )}
              </button>

              <button
                id="video-reset-btn"
                onClick={handleReset}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700"
                title="처음부터 다시하기"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  if (currentStepIndex > 0) handleSelectStep(currentStepIndex - 1);
                }}
                disabled={currentStepIndex === 0}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs flex items-center gap-1 border border-zinc-700"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">이전 단계</span>
              </button>

              <span className="text-xs text-zinc-400 font-mono px-2">
                {currentStep.stepNumber} / {videoGuide.steps.length}
              </span>

              <button
                onClick={() => {
                  if (currentStepIndex < videoGuide.steps.length - 1) {
                    handleSelectStep(currentStepIndex + 1);
                  }
                }}
                disabled={currentStepIndex === videoGuide.steps.length - 1}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs flex items-center gap-1 border border-zinc-700"
              >
                <span className="hidden sm:inline">다음 단계</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step by Step Breakdown Cards below the Video */}
      <div className="mt-6">
        <h4 className="text-sm font-bold text-zinc-900 mb-3 flex items-center justify-between">
          <span>단계별 실행 방법 요약표</span>
          <span className="text-xs text-zinc-500 font-normal">카드를 클릭하여 해당 단계로 즉시 이동할 수 있습니다</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {videoGuide.steps.map((step, idx) => {
            const isActive = currentStepIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => handleSelectStep(idx)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isActive
                    ? 'bg-rose-50 border-rose-900 shadow-sm ring-1 ring-rose-900'
                    : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-rose-900 text-white' : 'bg-zinc-200 text-zinc-700'
                  }`}>
                    {step.stepNumber}단계 ({step.durationSeconds}초)
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-bold text-rose-900 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> 진행중
                    </span>
                  )}
                </div>
                <h5 className="font-bold text-sm text-zinc-900 mb-1">{step.title}</h5>
                <p className="text-xs text-zinc-600 line-clamp-2 mb-1.5">{step.instruction}</p>
                <p className="text-[11px] text-rose-800 font-medium">💡 {step.patientTip}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
