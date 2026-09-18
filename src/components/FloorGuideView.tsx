import React, { useState } from 'react';
import { ArrowLeft, MapPin, Search, Clock, Phone, AlertCircle, Building2, Eye } from 'lucide-react';
import { HOSPITAL_FLOORS } from '../data/respiratoryData';
import { FloorInfo, HospitalFacility, MainMenuType, FacilityCategory } from '../types';

interface FloorGuideViewProps {
  onNavigate: (menu: MainMenuType) => void;
  initialFloorId?: string;
}

export const FloorGuideView: React.FC<FloorGuideViewProps> = ({
  onNavigate,
  initialFloorId = '3F',
}) => {
  const [selectedFloorId, setSelectedFloorId] = useState<string>(initialFloorId);
  const [selectedFacilityId, setSelectedFacilityId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<FacilityCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentFloor: FloorInfo =
    HOSPITAL_FLOORS.find((f) => f.floorId === selectedFloorId) || HOSPITAL_FLOORS[0];

  // Filter facilities on current floor based on category
  const filteredFacilities = currentFloor.facilities.filter((fac) => {
    if (categoryFilter !== 'all' && fac.category !== categoryFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        fac.name.toLowerCase().includes(q) ||
        fac.roomNumber.toLowerCase().includes(q) ||
        fac.description.toLowerCase().includes(q) ||
        fac.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const getCategoryBadge = (category: FacilityCategory) => {
    switch (category) {
      case 'clinic':
        return { label: '진료과', bg: 'bg-rose-900 text-white', border: 'border-rose-800' };
      case 'exam':
        return { label: '검사실', bg: 'bg-zinc-800 text-white', border: 'border-zinc-700' };
      case 'amenity':
        return { label: '편의시설', bg: 'bg-zinc-200 text-zinc-800', border: 'border-zinc-300' };
      default:
        return { label: '시설', bg: 'bg-zinc-100 text-zinc-800', border: 'border-zinc-200' };
    }
  };

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
          <span className="font-bold text-rose-900">② 층별 안내도 (B1F ~ 5F)</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-zinc-800 text-white px-3 py-1 rounded-full font-semibold">
            호흡기 특화 메디컬 센터
          </span>
        </div>
      </div>

      {/* Intro Box */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-900 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>원내 위치 안내</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            병원 층별 안내도
          </h2>
          <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
            원하시는 층을 선택하면 해당 층의 상세 지도와 주요 진료과, 검사실, 편의시설 위치를 직관적으로 확인할 수 있습니다.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="시설명 또는 검사명 검색 (예: CT, 폐활량)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-rose-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Floor Selection Buttons (B1F to 5F) */}
      <div className="bg-white p-2 rounded-2xl border border-zinc-200 shadow-sm">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {HOSPITAL_FLOORS.map((floor) => {
            const isSelected = floor.floorId === selectedFloorId;
            return (
              <button
                key={floor.floorId}
                id={`floor-btn-${floor.floorId}`}
                onClick={() => {
                  setSelectedFloorId(floor.floorId);
                  setSelectedFacilityId(null);
                }}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-all font-bold cursor-pointer ${
                  isSelected
                    ? 'bg-rose-900 text-white shadow-md ring-2 ring-rose-700'
                    : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200'
                }`}
              >
                <span className="text-lg sm:text-xl font-black tracking-tight">
                  {floor.shortLabel}
                </span>
                <span className={`text-[11px] font-medium truncate max-w-full px-1 ${
                  isSelected ? 'text-rose-200' : 'text-zinc-500'
                }`}>
                  {floor.floorId === '3F' ? '호흡기외래' : floor.floorId === '4F' ? '폐기능검사' : floor.floorId === '2F' ? 'CT·채혈' : floor.floorId === '1F' ? '접수·로비' : floor.floorId === '5F' ? '입원·재활' : '주차장'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floor Information Banner */}
      <div className="bg-zinc-900 text-white p-4 sm:p-5 rounded-2xl shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-l-4 border-rose-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-rose-900 text-white font-black text-sm px-2.5 py-0.5 rounded">
              {currentFloor.shortLabel}
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-white">
              {currentFloor.floorName}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300">
            {currentFloor.subTitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              categoryFilter === 'all'
                ? 'bg-rose-900 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            전체 ({currentFloor.facilities.length})
          </button>
          <button
            onClick={() => setCategoryFilter('clinic')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              categoryFilter === 'clinic'
                ? 'bg-rose-900 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            진료과
          </button>
          <button
            onClick={() => setCategoryFilter('exam')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              categoryFilter === 'exam'
                ? 'bg-rose-900 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            검사실
          </button>
          <button
            onClick={() => setCategoryFilter('amenity')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              categoryFilter === 'amenity'
                ? 'bg-rose-900 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            편의시설
          </button>
        </div>
      </div>

      {/* Visual Floor Map Diagram & Selected Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Architectural Map Diagram (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-900" />
              <h4 className="font-bold text-sm text-zinc-900">
                {currentFloor.shortLabel} 평면 안내도
              </h4>
            </div>
            <span className="text-[11px] text-zinc-500">
              지도의 공간을 클릭하면 상세 정보를 확인할 수 있습니다
            </span>
          </div>

          {/* SVG Map */}
          <div className="relative w-full aspect-[4/3] bg-zinc-100 rounded-xl overflow-hidden border border-zinc-300 p-2 shadow-inner">
            <svg viewBox="0 0 500 360" className="w-full h-full select-none">
              {/* Outer floor outline */}
              <rect x="15" y="15" width="470" height="330" rx="12" fill="#e4e4e7" stroke="#71717a" strokeWidth="2.5" />
              
              {/* Central Hallway / Corridor */}
              <rect x="30" y="140" width="440" height="60" fill="#f4f4f5" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x="235" y="175" fill="#71717a" fontSize="13" fontWeight="bold" textAnchor="middle">
                중앙 복도 (HALLWAY)
              </text>

              {/* Fixed Building Services (Elevator, Restroom, Stairs) */}
              <g transform="translate(25, 25)">
                <rect width="60" height="40" rx="4" fill="#3f3f46" />
                <text x="30" y="24" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">엘리베이터</text>
              </g>

              <g transform="translate(415, 25)">
                <rect width="60" height="40" rx="4" fill="#3f3f46" />
                <text x="30" y="24" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">비상계단/화장실</text>
              </g>

              <g transform="translate(25, 285)">
                <rect width="60" height="45" rx="4" fill="#3f3f46" />
                <text x="30" y="28" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">중앙계단</text>
              </g>

              {/* Dynamic Facilities rendered as interactive zones */}
              {currentFloor.facilities.map((fac, idx) => {
                const isSelected = selectedFacilityId === fac.id;
                // Calculate position scaled
                const posX = 20 + (fac.position.x / 100) * 440;
                const posY = 20 + (fac.position.y / 100) * 310;
                const width = (fac.position.width / 100) * 440;
                const height = (fac.position.height / 100) * 310;

                const isClinic = fac.category === 'clinic';
                const isExam = fac.category === 'exam';

                const fillColor = isSelected
                  ? '#881337'
                  : isClinic
                  ? '#ffffff'
                  : isExam
                  ? '#fbf2f4'
                  : '#ffffff';

                const strokeColor = isSelected ? '#4c0519' : isClinic ? '#be123c' : '#71717a';

                return (
                  <g
                    key={fac.id}
                    onClick={() => setSelectedFacilityId(fac.id)}
                    className="cursor-pointer transition-all hover:opacity-90"
                    id={`map-zone-${fac.id}`}
                  >
                    <rect
                      x={posX}
                      y={posY}
                      width={width}
                      height={height}
                      rx="8"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isSelected ? 3.5 : 2}
                      filter={isSelected ? 'drop-shadow(0px 4px 6px rgba(0,0,0,0.25))' : 'none'}
                    />

                    {/* Room Badge */}
                    <rect
                      x={posX + 8}
                      y={posY + 8}
                      width="50"
                      height="16"
                      rx="3"
                      fill={isSelected ? '#ffffff' : '#881337'}
                    />
                    <text
                      x={posX + 33}
                      y={posY + 20}
                      fill={isSelected ? '#881337' : '#ffffff'}
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {fac.roomNumber}
                    </text>

                    {/* Facility Name */}
                    <text
                      x={posX + 10}
                      y={posY + 44}
                      fill={isSelected ? '#ffffff' : '#18181b'}
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {fac.name.length > 15 ? fac.name.substring(0, 14) + '...' : fac.name}
                    </text>

                    {/* Small category tag */}
                    <text
                      x={posX + 10}
                      y={posY + 64}
                      fill={isSelected ? '#fecdd3' : '#52525b'}
                      fontSize="10"
                    >
                      {fac.tags.slice(0, 2).join(' · ')}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Map Legend */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-zinc-100 text-xs text-zinc-600">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-white border border-rose-700"></span>
                <span>진료과 (클리닉)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-rose-50 border border-zinc-500"></span>
                <span>정밀 검사실</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-zinc-700"></span>
                <span>승강기/화장실</span>
              </span>
            </div>
            <span className="text-[11px] text-rose-900 font-medium">붉은색 강조: 현재 선택된 위치</span>
          </div>
        </div>

        {/* Facility Cards List & Details (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-zinc-900 flex items-center gap-1.5">
              <span>{currentFloor.shortLabel} 주요 장소 목록</span>
              <span className="text-xs text-zinc-400 font-normal">({filteredFacilities.length}곳)</span>
            </h4>
          </div>

          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {filteredFacilities.map((fac) => {
              const isSelected = selectedFacilityId === fac.id;
              const badge = getCategoryBadge(fac.category);

              return (
                <div
                  key={fac.id}
                  id={`facility-card-${fac.id}`}
                  onClick={() => setSelectedFacilityId(fac.id)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-50 border-rose-900 shadow-md ring-1 ring-rose-900'
                      : 'bg-white hover:bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded mr-1.5 ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-600 bg-zinc-100 px-1.5 py-0.5 rounded">
                        {fac.roomNumber}
                      </span>
                    </div>
                    <button
                      className={`text-xs font-bold flex items-center gap-1 ${
                        isSelected ? 'text-rose-900' : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isSelected ? '선택됨' : '위치보기'}</span>
                    </button>
                  </div>

                  <h5 className="font-bold text-base text-zinc-900 mb-1">
                    {fac.name}
                  </h5>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                    {fac.description}
                  </p>

                  <div className="space-y-1 text-xs text-zinc-600 pt-2 border-t border-zinc-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>운영: {fac.operatingHours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-rose-800" />
                      <span>원내 전화: <strong className="text-zinc-900">{fac.contact}</strong></span>
                    </div>
                  </div>

                  {fac.notice && (
                    <div className="mt-2.5 p-2 bg-rose-100/60 rounded-lg text-xs text-rose-950 font-medium flex items-start gap-1.5 border border-rose-200">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-800 flex-shrink-0 mt-0.5" />
                      <span>안내: {fac.notice}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {fac.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredFacilities.length === 0 && (
              <div className="p-8 text-center bg-white rounded-xl border border-zinc-200 text-zinc-500 text-sm">
                해당 조건에 맞는 시설이 없습니다. 검색어를 확인해 주세요.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
