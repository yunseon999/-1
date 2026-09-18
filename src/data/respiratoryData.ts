import { BreathingTechnique, FloorInfo, RespiratoryDisease } from '../types';

export const BREATHING_TECHNIQUES: BreathingTechnique[] = [
  {
    id: 'diaphragmatic',
    name: '복식호흡 (횡격막 호흡)',
    englishName: 'Diaphragmatic Breathing',
    badge: '기초 필수 호흡법',
    summary: '가슴 대신 배의 횡격막 근육을 움직여 폐 깊숙이 산소를 공급하고 호흡 피로를 줄이는 기본 호흡법입니다.',
    recommendation: '하루 3~4회, 1회당 5~10분간 편안한 상태에서 실시하세요.',
    targetPatients: ['숨이 자주 차는 환자', '만성폐쇄성폐질환(COPD)', '폐수술 후 회복 환자', '호흡 불안 환자'],
    imageDescription: {
      postureTitle: '복식호흡 올바른 기본 자세',
      postureDetails: [
        '의자에 편안히 등을 기대고 앉거나, 베개를 받치고 누워 무릎을 살짝 세웁니다.',
        '한 손은 가슴 위에, 다른 한 손은 배(배꼽 바로 위)에 가볍게 얹습니다.',
        '어깨와 목의 힘을 완전히 빼고 편안한 상태를 유지합니다.'
      ],
      diagramType: 'diaphragm',
      keyPoints: [
        '숨을 들이마실 때 배에 얹은 손만 불룩 올라오고 가슴 손은 거의 움직이지 않아야 합니다.',
        '숨을 내쉴 때 배에 얹은 손이 자연스럽게 안쪽으로 내려갑니다.'
      ]
    },
    videoGuide: {
      title: '복식호흡 단계별 따라하기 가이드',
      totalCycles: 5,
      cycleDurationSeconds: 10,
      steps: [
        {
          stepNumber: 1,
          title: '준비 및 어깨 이완',
          durationSeconds: 2,
          actionType: 'rest',
          instruction: '어깨와 목의 힘을 편안히 빼고, 배에 손을 얹어 호흡 준비를 합니다.',
          patientTip: '눈을 감거나 편안한 곳을 응시하며 온몸의 긴장을 푸세요.',
          visualCue: '어깨 하강 및 몸 전체 이완'
        },
        {
          stepNumber: 2,
          title: '코로 깊게 들이마시기',
          durationSeconds: 3,
          actionType: 'inhale',
          instruction: '코로 풍선에 공기를 채우듯 3초 동안 부드럽게 숨을 들이마십니다.',
          patientTip: '가슴은 가만히 두고 배만 볼록하게 부풀어 오르는 느낌에 집중하세요.',
          visualCue: '배가 앞으로 팽창, 횡격막 아래로 하강'
        },
        {
          stepNumber: 3,
          title: '잠깐 멈추기',
          durationSeconds: 1,
          actionType: 'hold',
          instruction: '폐 속에 들어온 공기를 느끼며 약 1초간 호흡을 가볍게 멈춥니다.',
          patientTip: '목을 억지로 조이지 말고 편안하게 정지합니다.',
          visualCue: '공기 산소 교환'
        },
        {
          stepNumber: 4,
          title: '입으로 천천히 내쉬기',
          durationSeconds: 4,
          actionType: 'exhale',
          instruction: '입술을 모으고 배를 안쪽으로 당기면서 4초 동안 천천히 숨을 끝까지 내쉽니다.',
          patientTip: '들이마신 시간보다 내쉬는 시간을 더 길게 유지하는 것이 핵심입니다.',
          visualCue: '배 수축 및 이산화탄소 완전 배출'
        }
      ],
      cautions: [
        '어지러움이 느껴지면 즉시 중단하고 평소대로 숨을 쉬세요.',
        '가슴을 억지로 부풀리지 않도록 주의하세요.',
        '식사 직후보다는 식전이나 편안한 휴식 시간에 시행하는 것이 좋습니다.'
      ],
      benefits: [
        '폐 하부까지 충분한 환기가 이루어져 혈중 산소포화도가 올라갑니다.',
        '목과 어깨의 호흡 보조근육 피로를 효과적으로 덜어줍니다.',
        '심리적 긴장과 스트레스 호르몬을 완화해 마음이 편안해집니다.'
      ]
    }
  },
  {
    id: 'pursed-lip',
    name: '입술오므리기 호흡 (오므린 입술 호흡)',
    englishName: 'Pursed-Lip Breathing',
    badge: '호흡 곤란 완화 필수',
    summary: '입술을 촛불을 끄듯 동그랗게 오므려 숨을 내쉼으로써 기도 내 압력을 유지하여 기도가 좁아지는 것을 막아주는 호흡법입니다.',
    recommendation: '계단을 오르거나 무거운 짐을 들 때, 혹은 갑자기 숨이 가쁠 때 즉시 활용하세요.',
    targetPatients: ['천식 및 COPD 환자', '운동 중 숨가쁨이 심한 분', '가래 배출이 어려운 환자'],
    imageDescription: {
      postureTitle: '입술오므리기 호흡 입술 모양과 자세',
      postureDetails: [
        '어깨와 목의 힘을 빼고 등을 곧게 펴서 편안히 앉습니다.',
        '코로 숨을 천천히 들이마시고, 내쉴 때는 휘파람을 불듯 입술을 작게 오므립니다.',
        '촛불 앞의 불꽃이 꺼지지 않고 살랑거리듯 일정한 압력으로 숨을 뺍니다.'
      ],
      diagramType: 'lips',
      keyPoints: [
        '코로 들이마시는 시간보다 입으로 내쉬는 시간을 최소 2배 이상 길게 합니다 (1 : 2 비율).',
        '볼을 억지로 부풀리지 않고 입술 중앙의 작은 틈새로만 부드럽게 공기를 뺍니다.'
      ]
    },
    videoGuide: {
      title: '입술오므리기 호흡 1:2 템포 실전 가이드',
      totalCycles: 5,
      cycleDurationSeconds: 8,
      steps: [
        {
          stepNumber: 1,
          title: '어깨 긴장 풀기',
          durationSeconds: 1,
          actionType: 'rest',
          instruction: '어깨를 가볍게 털고 편안한 호흡 준비를 합니다.',
          patientTip: '턱과 목 주변의 굳은 근육을 가볍게 풀어주세요.',
          visualCue: '몸 정돈'
        },
        {
          stepNumber: 2,
          title: '코로 들이마시기 (2초)',
          durationSeconds: 2,
          actionType: 'inhale',
          instruction: '입을 다물고 코로 둘을 세며(하나, 둘) 부드럽게 숨을 들이마십니다.',
          patientTip: '너무 과하게 채우려 하지 말고 편안한 양만큼만 마십니다.',
          visualCue: '코를 통한 자연스러운 공기 유입'
        },
        {
          stepNumber: 3,
          title: '입술 오므리고 길게 내쉬기 (4~5초)',
          durationSeconds: 5,
          actionType: 'exhale',
          instruction: '입술을 동그랗게 모으고 촛불을 살살 불듯 넷을 세며(하나, 둘, 셋, 넷) 천천히 내쉽니다.',
          patientTip: '공기를 억지로 쥐어짜내지 말고 일정한 속도로 내보내세요.',
          visualCue: '오므린 입술을 통한 기도 양압 유지'
        }
      ],
      cautions: [
        '공기를 다 뱉으려고 가슴을 쥐어짜듯 억지로 힘주지 마세요.',
        '숨을 내쉬는 도중 기침이 나오면 잠시 멈추고 안정을 취하세요.'
      ],
      benefits: [
        '기관지가 일찍 닫히는 것을 막아 폐 속에 갇힌 공기를 시원하게 비워줍니다.',
        '분당 호흡수를 줄여 호흡 곤란으로 인한 불안과 숨가쁨을 즉시 진정시킵니다.'
      ]
    }
  },
  {
    id: 'huff-coughing',
    name: '단계적 기침법 (허프 기침법)',
    englishName: 'Huff Coughing Technique',
    badge: '가래 배출 및 폐 청결',
    summary: '기도에 무리를 주는 심한 기침 대신, 안경을 닦을 때처럼 ‘하-’ 하고 숨을 내뱉어 가래를 기관지 위쪽으로 안전하게 끌어올리는 기침법입니다.',
    recommendation: '아침 기상 후 또는 흡입기 사용 전, 기관지에 가래가 끓을 때 수시로 시행합니다.',
    targetPatients: ['기관지확장증 환자', '가래가 잘 뱉어지지 않는 분', '수술 후 상처 통증으로 기침이 힘든 분'],
    imageDescription: {
      postureTitle: '허프 기침법 올바른 배담 자세',
      postureDetails: [
        '턱을 살짝 들어 기도를 열어두고, 허리를 곧게 펴고 앉습니다.',
        '두 손으로 복부나 수술 부위를 베개로 부드럽게 감싸 지지합니다.',
        '거울에 김을 서리게 하듯 입을 동그랗게 벌린 채 숨을 뿜어내는 입 모양을 준비합니다.'
      ],
      diagramType: 'cough',
      keyPoints: [
        '목을 긁는 쇳소리의 거친 기침이 아니라 깊은 폐에서 울리는 ‘하!’ 소리를 냅니다.',
        '2~3회 연속 시행한 후 마지막에 가볍게 뱉어냅니다.'
      ]
    },
    videoGuide: {
      title: '허프 기침 3단계 안전 가래 배출 영상 가이드',
      totalCycles: 3,
      cycleDurationSeconds: 12,
      steps: [
        {
          stepNumber: 1,
          title: '느린 중간 호흡으로 가래 모으기',
          durationSeconds: 4,
          actionType: 'inhale',
          instruction: '코로 중간 깊이 정도로 숨을 천천히 들이마시고 1~2초간 멈춥니다.',
          patientTip: '공기가 폐 깊은 곳의 가래 뒤쪽으로 들어간다고 상상하세요.',
          visualCue: '폐 하부로 공기 유입'
        },
        {
          stepNumber: 2,
          title: '‘하!’ 하고 강하게 뿜어내기 (허핑 2회)',
          durationSeconds: 3,
          actionType: 'exhale',
          instruction: '입을 크게 벌리고 유리창에 김을 뿜듯이 "하! 하!" 하고 짧고 빠르게 숨을 내뿜습니다.',
          patientTip: '성대를 닫지 말고 목구멍을 열어둔 상태로 배 근육을 수축시킵니다.',
          visualCue: '기도 진동 및 가래 상부 이동'
        },
        {
          stepNumber: 3,
          title: '가벼운 기침으로 가래 뱉기 및 안정',
          durationSeconds: 5,
          actionType: 'rest',
          instruction: '목구멍 가까이 올라온 가래를 부드러운 기침 한 번으로 뱉어내고 휴식합니다.',
          patientTip: '휴지에 가래를 받아 색깔과 묽기를 가볍게 확인하세요.',
          visualCue: '정상 호흡으로 회복'
        }
      ],
      cautions: [
        '목에 핏줄이 설 정도로 강하게 기침하면 기관지 점막이 손상되므로 부드럽게 시행하세요.',
        '가래에 선홍색 피가 섞여 나오면 즉시 의료진에게 알려야 합니다.'
      ],
      benefits: [
        '기관지 자극과 흉통을 최소화하면서 깊은 곳의 가래를 효과적으로 제거합니다.',
        '가래로 인한 폐렴 등 2차 세균 감염 합병증을 예방합니다.'
      ]
    }
  },
  {
    id: 'tripod',
    name: '상체 숙이기 호흡 (삼각 자세 호흡)',
    englishName: 'Tripod Positioned Breathing',
    badge: '급성 숨가쁨 응급 완화',
    summary: '상체를 앞으로 기울여 팔을 테이블이나 무릎에 지지함으로써 횡격막의 부담을 덜고 가슴 보조근육을 최대로 활용하는 응급 자세 호흡법입니다.',
    recommendation: '보행 중 갑작스러운 호흡 곤란이 오거나 계단을 오른 직후 지쳤을 때 사용합니다.',
    targetPatients: ['보행 시 쉽게 지치는 폐질환 환자', '급성 호흡곤란 위험 환자', '폐활량이 떨어진 고령 환자'],
    imageDescription: {
      postureTitle: '상체 숙이기 호흡(삼각 자세)의 핵심 축',
      postureDetails: [
        '의자에 앉아 다리를 어깨너비로 벌리고 상체를 30~45도 앞으로 숙입니다.',
        '양 팔꿈치를 무릎이나 앞 테이블에 단단히 올리고 턱을 편안히 괴거나 지지합니다.',
        '(서 있는 경우) 벽이나 난간, 보행 보조기에 양팔을 짚고 상체를 숙입니다.'
      ],
      diagramType: 'tripod',
      keyPoints: [
        '양팔로 상체 무게를 받쳐줌으로써 목과 어깨의 흉곽 확장 보조근육이 최대한 일할 수 있게 합니다.',
        '이 자세를 취한 채 앞서 배운 [입술오므리기 호흡]을 병행하면 회복 속도가 2배 빨라집니다.'
      ]
    },
    videoGuide: {
      title: '삼각 자세 취하기 및 회복 호흡 영상 가이드',
      totalCycles: 4,
      cycleDurationSeconds: 9,
      steps: [
        {
          stepNumber: 1,
          title: '지지대 잡고 상체 기울이기',
          durationSeconds: 2,
          actionType: 'rest',
          instruction: '테이블이나 무릎에 팔꿈치를 안정적으로 대고 상체를 앞으로 숙입니다.',
          patientTip: '체중을 팔에 싣는다는 느낌으로 척추의 긴장을 푸세요.',
          visualCue: '삼각 구조 지지 및 횡격막 공간 확보'
        },
        {
          stepNumber: 2,
          title: '코로 가볍게 들이마시기 (2초)',
          durationSeconds: 2,
          actionType: 'inhale',
          instruction: '코로 공기를 편안하게 2초간 들이마십니다.',
          patientTip: '등 뒤쪽 갈비뼈가 옆과 뒤로 열리는 것을 느껴보세요.',
          visualCue: '등 뒤쪽 폐포 환기'
        },
        {
          stepNumber: 3,
          title: '입술 오므려 천천히 내쉬기 (5초)',
          durationSeconds: 5,
          actionType: 'exhale',
          instruction: '입술을 모으고 숨을 천천히 길게 내쉬며 심박수를 가라앉힙니다.',
          patientTip: '호흡이 정상을 되찾을 때까지 3~5회 반복하세요.',
          visualCue: '맥박 안정 및 호흡곤란 진정'
        }
      ],
      cautions: [
        '어지럽거나 빈혈기가 올 수 있으므로 발바닥을 바닥에 완전히 밀착시키세요.',
        '3~5분이 지나도 호흡 곤란이 호전되지 않으면 즉시 비상벨을 누르거나 응급실로 가야 합니다.'
      ],
      benefits: [
        '횡격막의 위치가 호흡하기 가장 편한 돔 형태로 복원되어 호흡 효율이 급증합니다.',
        '가슴을 쥐어짜는 공포감과 숨가쁨 증상을 단 1~2분 만에 빠르게 진정시킵니다.'
      ]
    }
  }
];

export const HOSPITAL_FLOORS: FloorInfo[] = [
  {
    floorId: '5F',
    floorName: '5층 호흡기 집중 치료 및 안심 입원병동',
    shortLabel: '5F',
    subTitle: '호흡기 단기 입원실, 음압 격리병실, 폐 재활 물리치료실',
    facilities: [
      {
        id: 'f5-ward',
        name: '호흡기내과 입원병동 (501~520호)',
        category: 'clinic',
        floor: '5F',
        roomNumber: '501-520호',
        description: '급성 악화 환자 및 산소 치료가 필요한 환자를 위한 쾌적한 안심 입원병동입니다.',
        operatingHours: '24시간 상시 운영 (면회: 18:00~20:00)',
        contact: '02-1588-0050 (원내 500번)',
        tags: ['입원실', '간호간병통합', '산소공급기']
        ,position: { x: 5, y: 15, width: 42, height: 35 }
      },
      {
        id: 'f5-rehab',
        name: '폐 재활 운동치료센터',
        category: 'exam',
        floor: '5F',
        roomNumber: '525호',
        description: '전담 물리치료사와 함께 산소포화도를 모니터링하며 안전하게 호흡근 강화 운동을 진행하는 공간입니다.',
        operatingHours: '평일 09:00 - 17:30 (점심시간 12:30 - 13:30)',
        contact: '02-1588-0051 (원내 525번)',
        notice: '운동 편한 복장과 운동화를 착용하고 방문하세요.',
        tags: ['호흡운동', '트레드밀', '심폐재활']
        ,position: { x: 53, y: 15, width: 42, height: 35 }
      },
      {
        id: 'f5-lounge',
        name: '환자·보호자 햇살 힐링라운지',
        category: 'amenity',
        floor: '5F',
        roomNumber: '중앙 라운지',
        description: '정수기, 공기청정 휴게공간, 도서 코너 및 호흡기 건강 교육 영상이 상영되는 쉼터입니다.',
        operatingHours: '06:00 - 22:00',
        contact: '원내 안내 0번',
        tags: ['휴게실', '공기청정구역', '정수기']
        ,position: { x: 25, y: 55, width: 50, height: 35 }
      }
    ]
  },
  {
    floorId: '4F',
    floorName: '4층 정밀 폐기능 검사실 및 내시경센터',
    shortLabel: '4F',
    subTitle: '기관지내시경실, 정밀 폐기능 검사실, 알레르기 유발 검사실',
    facilities: [
      {
        id: 'f4-pft',
        name: '정밀 폐기능 검사실 (PFT Lab)',
        category: 'exam',
        floor: '4F',
        roomNumber: '401호',
        description: '폐활량 측정기(Spirometry), 폐확산능, 기도저항 검사를 통해 폐의 실제 기능을 정밀 측정합니다.',
        operatingHours: '평일 08:30 - 17:00 (토요일 08:30 - 12:30)',
        contact: '02-1588-0041 (원내 401번)',
        notice: '검사 4시간 전 흡연을 삼가시고, 복용 중인 흡입기는 사전 안내대로 조절하세요.',
        tags: ['폐활량검사', '천식유발검사', '기도가역성']
        ,position: { x: 5, y: 15, width: 42, height: 38 }
      },
      {
        id: 'f4-broncho',
        name: '기관지내시경 검사실 및 회복실',
        category: 'exam',
        floor: '4F',
        roomNumber: '405호',
        description: '기관지 내부를 직접 관찰하여 조직검사, 객담 세척 및 기관지 출혈 원인을 정밀 진단합니다.',
        operatingHours: '평일 09:00 - 16:30',
        contact: '02-1588-0042 (원내 405번)',
        notice: '검사 전 최소 6시간 금식이 필요하며 보호자 동반이 필수입니다.',
        tags: ['수면내시경', '조직검사', '기관지세척']
        ,position: { x: 53, y: 15, width: 42, height: 38 }
      },
      {
        id: 'f4-allergy',
        name: '알레르기 피부 반응 및 항원 검사실',
        category: 'exam',
        floor: '4F',
        roomNumber: '409호',
        description: '천식 및 알레르기 비염을 유발하는 집먼지진드기, 꽃가루, 동물 털 등 원인 항원을 선별합니다.',
        operatingHours: '평일 09:00 - 17:00',
        contact: '02-1588-0043 (원내 409번)',
        tags: ['항원반응검사', '혈청검사', '천식원인']
        ,position: { x: 25, y: 58, width: 50, height: 32 }
      }
    ]
  },
  {
    floorId: '3F',
    floorName: '3층 호흡기 특화 진료센터',
    shortLabel: '3F',
    subTitle: '호흡기내과 외래진료실 1~6, 알레르기내과, 흉부외과, 흡입기 교육실',
    facilities: [
      {
        id: 'f3-pulm',
        name: '호흡기내과 외래 진료실 (1~4진료실)',
        category: 'clinic',
        floor: '3F',
        roomNumber: '301~304호',
        description: '만성기침, COPD, 천식, 폐렴, 기관지확장증 전문의 교수진 맞춤 진료를 제공합니다.',
        operatingHours: '평일 09:00 - 17:30 (토요일 09:00 - 12:30)',
        contact: '02-1588-0031 (원내 301번)',
        notice: '예약 시간 15분 전 3층 외래 키오스크에서 도착 접수를 해주세요.',
        tags: ['전문의진료', '만성기침클리닉', '폐질환상담']
        ,position: { x: 5, y: 15, width: 45, height: 36 }
      },
      {
        id: 'f3-inhaler',
        name: '호흡재활 & 맞춤 흡입기 교육실',
        category: 'clinic',
        floor: '3F',
        roomNumber: '308호',
        description: '전문 호흡기 교육 간호사가 정량식흡입기(MDI), 건조분말흡입기(DPI)의 올바른 사용법을 1:1로 지도합니다.',
        operatingHours: '평일 09:30 - 17:00',
        contact: '02-1588-0033 (원내 308번)',
        notice: '현재 사용 중이신 본인 흡입기를 지참하시면 더욱 정확한 교육이 가능합니다.',
        tags: ['흡입기교육', '복약상담', '호흡법실습']
        ,position: { x: 53, y: 15, width: 42, height: 36 }
      },
      {
        id: 'f3-thoracic',
        name: '흉부외과 및 흉부종양클리닉',
        category: 'clinic',
        floor: '3F',
        roomNumber: '310호',
        description: '폐결절, 기흉, 종격동 질환 및 흉강경 수술 상담 및 협진 진료를 진행합니다.',
        operatingHours: '화/목 09:00 - 17:00',
        contact: '02-1588-0035 (원내 310번)',
        tags: ['기흉', '폐수술협진', '흉강경']
        ,position: { x: 25, y: 56, width: 50, height: 34 }
      }
    ]
  },
  {
    floorId: '2F',
    floorName: '2층 첨단 영상의학센터 & 채혈검사실',
    shortLabel: '2F',
    subTitle: '저선량 흉부 CT, 흉부 X-ray 촬영실, 임상병리 채혈실',
    facilities: [
      {
        id: 'f2-ct',
        name: '영상의학센터 (흉부 CT & X-ray실)',
        category: 'exam',
        floor: '2F',
        roomNumber: '201-205호',
        description: '방사선 피폭을 최소화한 최신 저선량 흉부 CT와 디지털 엑스레이로 폐포 미세 병변까지 빠르고 정확하게 촬영합니다.',
        operatingHours: '평일 08:30 - 17:30 (응급의료 24시간 연계)',
        contact: '02-1588-0021 (원내 201번)',
        notice: '목걸이, 지퍼 달린 옷 등 금속 부착물은 탈의실에서 검사복으로 환복 후 진행됩니다.',
        tags: ['흉부CT', 'X선촬영', '저선량촬영']
        ,position: { x: 5, y: 15, width: 45, height: 36 }
      },
      {
        id: 'f2-blood',
        name: '중앙 채혈실 및 혈액가스분석실 (ABGA)',
        category: 'exam',
        floor: '2F',
        roomNumber: '210호',
        description: '일반 혈액검사, 염증 수치(CRP) 및 동맥혈 가스분석을 통해 혈중 산소·이산화탄소 분압을 측정합니다.',
        operatingHours: '평일 08:00 - 17:30 (토요일 08:00 - 12:30)',
        contact: '02-1588-0022 (원내 210번)',
        notice: '동맥혈 채혈 후에는 지혈을 위해 5분 이상 손가락으로 꾹 눌러주세요.',
        tags: ['혈액검사', '동맥혈가스분석', '염증수치']
        ,position: { x: 53, y: 15, width: 42, height: 36 }
      },
      {
        id: 'f2-cafe',
        name: '카페테리아 및 야외 테라스 쉼터',
        category: 'amenity',
        floor: '2F',
        roomNumber: '220호 테라스',
        description: '따뜻한 차와 음료, 간단한 샌드위치가 마련된 쾌적한 쉼터입니다.',
        operatingHours: '08:00 - 19:00',
        contact: '02-1588-0028',
        tags: ['카페', '휴식공간', '야외정원']
        ,position: { x: 25, y: 56, width: 50, height: 34 }
      }
    ]
  },
  {
    floorId: '1F',
    floorName: '1층 로비, 원무 접수/수납 및 약국',
    shortLabel: '1F',
    subTitle: '원무통합창구, 원외처방전 발행기, 무인 수납기, 병원 안내데스크',
    facilities: [
      {
        id: 'f1-reception',
        name: '원무 통합창구 (접수/수납/제증명)',
        category: 'amenity',
        floor: '1F',
        roomNumber: '1~10번 창구',
        description: '진료 접수, 진료비 수납, 진단서 및 입·퇴원 증명서 발급을 신속하게 처리해 드립니다.',
        operatingHours: '평일 08:30 - 17:30 (토요일 08:30 - 12:30)',
        contact: '02-1588-0011 (대표번호)',
        notice: '번호표를 먼저 뽑으신 후 안내 음성에 따라 창구로 이동하세요.',
        tags: ['접수', '수납', '진단서발급', '키오스크']
        ,position: { x: 5, y: 15, width: 44, height: 38 }
      },
      {
        id: 'f1-pharmacy',
        name: '병원 안내데스크 & 원외처방전 전송기',
        category: 'amenity',
        floor: '1F',
        roomNumber: '로비 정문',
        description: '처방전을 원하는 문전약국으로 키오스크를 통해 미리 전송하여 대기 시간을 줄일 수 있습니다.',
        operatingHours: '평일 08:30 - 18:00',
        contact: '안내데스크 원내 100번',
        tags: ['처방전전송', '병원안내', '휠체어대여']
        ,position: { x: 52, y: 15, width: 43, height: 38 }
      },
      {
        id: 'f1-convenience',
        name: '편의점 및 의료기기 전문점 (네블라이저/흡입보조기)',
        category: 'amenity',
        floor: '1F',
        roomNumber: '115호',
        description: '가정용 휴대용 네블라이저, 마스크, 스페이서(흡입보조기) 및 환자용 식음료를 구비하고 있습니다.',
        operatingHours: '07:00 - 22:00',
        contact: '02-1588-0015',
        tags: ['의료기기', '네블라이저', '편의점']
        ,position: { x: 25, y: 58, width: 50, height: 32 }
      }
    ]
  },
  {
    floorId: 'B1F',
    floorName: '지하 1층 주차장 및 응급의료지원',
    shortLabel: 'B1F',
    subTitle: '지하 주차장, 무인 정산기, 영양상담실, 직원식당',
    facilities: [
      {
        id: 'fb1-parking',
        name: '지하 주차장 및 사전 무인정산기',
        category: 'amenity',
        floor: 'B1F',
        roomNumber: '주차관제실',
        description: '외래 진료 시 4시간 무료 주차가 지원되며, 출차 전 무인정산기에서 바코드를 스캔해 주세요.',
        operatingHours: '24시간 연중무휴',
        contact: '02-1588-0008',
        notice: '호흡기 응급 환자를 위한 긴급 하차 구역이 주차장 입구에 마련되어 있습니다.',
        tags: ['주차정산', '장애인주차', '엘리베이터연결']
        ,position: { x: 8, y: 20, width: 42, height: 60 }
      },
      {
        id: 'fb1-diet',
        name: '임상영양상담실 (호흡부전 영양관리)',
        category: 'clinic',
        floor: 'B1F',
        roomNumber: 'B105호',
        description: '만성 폐질환 환자의 체중 감소 및 근손실 예방을 위한 고단백 영양 식단 맞춤 상담을 제공합니다.',
        operatingHours: '평일 09:00 - 16:30',
        contact: '02-1588-0005',
        tags: ['영양상담', '식단관리', '폐건강영양']
        ,position: { x: 53, y: 20, width: 40, height: 60 }
      }
    ]
  }
];

export const RESPIRATORY_DISEASES: RespiratoryDisease[] = [
  {
    id: 'copd',
    name: '만성폐쇄성폐질환 (COPD)',
    englishName: 'Chronic Obstructive Pulmonary Disease',
    iconName: 'Wind',
    badge: '국내 40대 이상 주요 만성질환',
    summary: '담배 연기나 미세먼지 등 유해 물질로 인해 기관지에 만성 염증이 생기고 폐포가 파괴되어 숨길이 좁아지는 비가역적 질환입니다.',
    easyExplanation: '폐 속의 공기 주머니(폐포)는 본래 스펀지나 풍선처럼 탄력이 있어야 공기가 잘 들락거립니다. COPD는 이 공기 주머니 벽이 녹아내려 커다란 빈 구멍이 생기고, 기관지가 붓고 가래가 차서 빨대로 숨을 쉬는 것처럼 숨이 차오르는 병입니다.',
    mainSymptoms: [
      {
        title: '만성 기침',
        description: '감기에 걸리지 않았는데도 3개월 이상 기침이 지속됩니다.',
        severity: 'common'
      },
      {
        title: '가래 배출',
        description: '아침에 일어났을 때 끈적한 흰색 또는 누런 가래가 자주 나옵니다.',
        severity: 'common'
      },
      {
        title: '운동 시 호흡곤란',
        description: '평지나 계단을 걸을 때 또래보다 유난히 숨이 차서 자주 멈추어 쉽니다.',
        severity: 'warning'
      },
      {
        title: '숨소리 쌕쌕거림 (천명음)',
        description: '숨을 내쉴 때 휘파람이나 피리 소리처럼 쌕쌕거리는 소리가 납니다.',
        severity: 'warning'
      }
    ],
    characteristicsAndCauses: {
      characteristics: [
        '한 번 파괴된 폐 조직은 원래대로 완전히 되돌리기 어려워 조기 진료와 관리가 필수적입니다.',
        '천식과 달리 기관지 확장제를 흡입해도 숨길이 완전히 정상으로 넓어지지 않습니다.',
        '감기나 독감에 걸리면 호흡곤란이 갑자기 심해지는 ‘급성 악화’가 발생할 수 있습니다.'
      ],
      causes: [
        '흡연: 전체 발병 원인의 80~90%를 차지하는 가장 강력한 위험 요인입니다.',
        '직업적 분진 및 화학 물질 노출 (분진, 석탄, 화학 가스 등)',
        '대기오염, 미세먼지 및 난방용 바이오매스 연기',
        '선천적 폐 성장 저하나 알파-1 항트립신 결핍증(드묾)'
      ]
    },
    visualGuide: {
      title: 'COPD의 폐 조직 및 기관지 변화',
      type: 'airway_comparison',
      description: '정상 기관지는 안쪽이 넓고 깨끗하여 공기가 거침없이 흐르지만, COPD 환자의 기관지는 염증으로 벽이 두꺼워지고 끈적한 가래가 차며 폐포 탄력이 상실됩니다.',
      normalState: '탄력 있는 팽팽한 폐포 조직 + 넓고 깨끗한 기관지 내경',
      diseaseState: '벽이 파괴된 늘어진 폐포(폐기종) + 점액으로 막히고 두꺼워진 기도 벽'
    },
    dailyCare: [
      '가장 먼저 반드시 금연해야 합니다. 금연만이 폐 기능 저하 속도를 늦출 수 있습니다.',
      '병원에서 처방받은 흡입기(LAMA/LABA)를 증상이 호전되어도 매일 정해진 시간에 빠짐없이 투약하세요.',
      '매년 인플루엔자(독감) 및 폐렴구균 예방접종을 반드시 완료하세요.',
      '숨이 차더라도 하루 20~30분씩 평지 걷기와 [복식호흡/입술오므리기 호흡]을 꾸준히 실천하세요.'
    ],
    emergencySigns: [
      '평소 쓰던 흡입기를 사용해도 숨찬 증상이 가라앉지 않고 말하기조차 힘들 때',
      '입술이나 손톱 끝이 파랗게 변하는 청색증이 나타날 때',
      '의식이 흐려지거나 심한 졸음, 두통이 동반될 때'
    ]
  },
  {
    id: 'asthma',
    name: '기관지 천식',
    englishName: 'Bronchial Asthma',
    badge: '가역적 기도 질환',
    summary: '특정 자극이나 알레르기 원인 물질에 폐 기도가 과민하게 반응하여 염증이 생기고 기관지가 일시적으로 좁아지는 만성 질환입니다.',
    easyExplanation: '기관지가 알레르기 물질에 과민하게 반응하여 깜짝 놀란 것처럼 기관지 근육이 꽉 조여들고 안쪽 벽이 퉁퉁 붓는 병입니다. 치료를 받거나 쉬면 기도가 다시 원래대로 넓어지는 ‘가역적’ 특성을 가지고 있습니다.',
    mainSymptoms: [
      {
        title: '발작적 호흡 곤란',
        description: '밤이나 새벽, 차가운 공기를 마셨을 때 갑자기 가슴이 답답하고 숨이 가빠집니다.',
        severity: 'warning'
      },
      {
        title: '쌕쌕거리는 숨소리 (천명)',
        description: '숨을 내쉴 때 목에서 피리 소리나 고양이 울음소리 같은 소리가 들립니다.',
        severity: 'warning'
      },
      {
        title: '발작적 기침',
        description: '말을 하거나 웃을 때, 밤에 잠자리에 들었을 때 멈추지 않는 마른기침이 납니다.',
        severity: 'common'
      },
      {
        title: '가슴 답답함 (흉부 압박감)',
        description: '가슴을 밧줄로 꽉 조이는 듯한 답답함과 통증을 느낍니다.',
        severity: 'common'
      }
    ],
    characteristicsAndCauses: {
      characteristics: [
        '증상이 날씨나 시간에 따라 변화무쌍하게 나타나며 밤이나 이른 새벽에 악화되는 경향이 있습니다.',
        '적절한 흡입 스테로이드 치료를 꾸준히 받으면 정상인과 다름없이 운동과 일상생활이 가능합니다.',
        '방치할 경우 영구적인 기도 변형(기도 개형)이 발생할 수 있습니다.'
      ],
      causes: [
        '유전적 요인 (가족력, 아토피 소인)',
        '원인 항원: 집먼지진드기, 꽃가루, 곰팡이, 반려동물의 털과 비듬, 바퀴벌레 분변',
        '악화 인자: 찬 공기, 대기오염, 감기 바이러스, 담배 연기, 스트레스, 특정 약물(아스피린 등)'
      ]
    },
    visualGuide: {
      title: '천식 발작 시 기관지의 순간적 수축 변화',
      type: 'airway_comparison',
      description: '알레르기 자극을 받으면 기관지를 둘러싼 평활근이 급격히 수축하고, 점막이 빨갛게 부어오르며 점액이 과다 분비되어 통로가 바늘구멍처럼 좁아집니다.',
      normalState: '평온하게 이완된 기관지 근육과 얇은 점막층',
      diseaseState: '경련성 근육 수축 + 부어오른 점막 + 끈적한 점액으로 좁아진 통로'
    },
    dailyCare: [
      '침구류는 2주마다 60도 이상 온수로 세탁하여 집먼지진드기를 제거하세요.',
      '갑자기 찬 공기에 노출되지 않도록 환절기나 겨울철 외출 시 마스크와 목도리를 꼭 착용하세요.',
      '증상이 없을 때도 기도 염증을 치료하는 ‘질병 조절제(흡입기)’를 절대 임의로 끊지 마세요.',
      '응급 시 사용하는 속효성 기관지 확장제(벤톨린 등)는 외출 시에도 항상 소지하세요.'
    ],
    emergencySigns: [
      '응급 흡입기를 2~3회 연속 사용해도 숨이 차서 한 문장을 끝까지 말하지 못할 때',
      '숨을 쉴 때 목덜미나 갈비뼈 사이가 쑥쑥 빨려 들어갈 때',
      '식은땀이 흐르며 심장이 몹시 빠르게 뛸 때'
    ]
  },
  {
    id: 'pneumonia',
    name: '폐렴',
    englishName: 'Pneumonia',
    badge: '급성 감염성 폐질환',
    summary: '세균, 바이러스, 곰팡이 등의 미생물이 폐 깊숙한 곳까지 침투하여 폐포에 심한 염증과 고름, 삼출물이 차는 감염성 질환입니다.',
    easyExplanation: '우리가 숨을 쉬는 폐포는 원래 깨끗한 공기로 가득 차 있어야 합니다. 폐렴은 균이 침입하여 폐포 안에 진물과 고름이 가득 차면서 산소가 핏속으로 전달되지 못하고, 온몸에 고열과 심한 오한이 나타나는 응급 감염 질환입니다.',
    mainSymptoms: [
      {
        title: '38도 이상의 고열 및 오한',
        description: '열이 심하게 오르며 온몸이 덜덜 떨리는 심한 오한이 동반됩니다.',
        severity: 'warning'
      },
      {
        title: '누렇거나 녹색을 띤 진한 가래',
        description: '끈적한 화농성 고름 가래가 나오며 때로는 피가 섞여 녹물색을 띱니다.',
        severity: 'warning'
      },
      {
        title: '숨쉴 때 찌르는 듯한 가슴 통증',
        description: '기침을 하거나 깊은 숨을 들이쉴 때 옆구리나 가슴이 콕콕 찔리듯 아픕니다.',
        severity: 'warning'
      },
      {
        title: '전신 쇠약 및 식욕 부진 (특히 어르신)',
        description: '고령 환자의 경우 열이 나지 않더라도 기운이 전혀 없고 식사를 못하며 헛소리를 하기도 합니다.',
        severity: 'urgent'
      }
    ],
    characteristicsAndCauses: {
      characteristics: [
        '면역력이 약한 영유아와 65세 이상 어르신에게 특히 위험하며 사망률이 높은 질환입니다.',
        '단순 감기와 달리 며칠이 지나도 열이 떨어지지 않고 기침과 가슴 통증이 점점 더 심해집니다.',
        '초기에 적절한 항생제나 항바이러스제를 투여하면 완치가 가능합니다.'
      ],
      causes: [
        '세균 감염: 폐렴구균(가장 흔함), 포도상구균, 마이코플라스마 등',
        '바이러스 감염: 인플루엔자(독감), 코로나19, 호흡기세포융합바이러스(RSV)',
        '흡인: 음식물, 침, 위산이 사레걸려 기도로 넘어가 발생하는 흡인성 폐렴(와상 환자 및 뇌졸중 환자)'
      ]
    },
    visualGuide: {
      title: '폐렴 시 폐포 내 삼출물과 염증 반응',
      type: 'alveoli_inflammation',
      description: '깨끗한 공기주머니(폐포) 속에 세균과 백혈구의 싸움으로 생긴 고름과 삼출액이 가득 차서, 엑스레이를 찍으면 폐가 하얗게 보이고 가스 교환이 불가능해집니다.',
      normalState: '산소와 이산화탄소가 자유롭게 통과하는 얇고 맑은 폐포벽',
      diseaseState: '고름과 삼출액이 꽉 차서 굳어버린 폐포(경화 상태)'
    },
    dailyCare: [
      '의사가 처방한 항생제는 증상이 나아졌더라도 처방된 일수를 끝까지 다 복용해야 재발과 내성을 막습니다.',
      '가래를 묽게 만들어 쉽게 뱉어낼 수 있도록 미온수를 하루 1.5~2리터 자주 마시세요.',
      '충분한 수면과 균형 잡힌 고단백 영양 섭취로 면역력을 끌어올리세요.',
      '65세 이상 어르신은 국가 무료 폐렴구균 23가 백신과 매년 독감 백신을 접종하세요.'
    ],
    emergencySigns: [
      '혈압이 급격히 떨어지거나 의식이 가물가물해질 때 (패혈증 위험)',
      '분당 호흡수가 30회 이상으로 매우 가쁘고 입술이 파래질 때',
      '물이나 약조차 삼키지 못하고 탈수 증상이 나타날 때'
    ]
  },
  {
    id: 'bronchiectasis',
    name: '기관지확장증',
    englishName: 'Bronchiectasis',
    badge: '만성 분비물 질환',
    summary: '반복적인 감염이나 염증으로 인해 기관지 벽의 탄력섬유와 근육이 영구적으로 늘어나 파괴되고, 이로 인해 가래 배출이 어려워져 고이는 만성 질환입니다.',
    easyExplanation: '정상적인 기관지는 매끄러운 파이프 같아서 가래가 생겨도 밖으로 잘 밀려 나옵니다. 하지만 기관지확장증은 파이프 곳곳이 꽈리처럼 늘어나 웅덩이가 생긴 것과 같습니다. 이 늘어난 웅덩이에 고인 가래가 썩으면서 세균이 번식해 대량의 가래와 피(객혈)가 나오는 병입니다.',
    mainSymptoms: [
      {
        title: '다량의 만성 화농성 가래',
        description: '하루 종일 컵에 고일 정도로 많은 양의 누렇고 냄새나는 가래가 지속적으로 나옵니다.',
        severity: 'warning'
      },
      {
        title: '객혈 (피가 섞인 가래)',
        description: '기침을 할 때 실핏줄이 터져 가래에 피가 묻어나오거나 새빨간 피를 쏟아냅니다.',
        severity: 'urgent'
      },
      {
        title: '반복되는 호흡기 감염',
        description: '1년에 수차례 폐렴이나 기관지염에 걸려 열이 나고 입원을 반복합니다.',
        severity: 'warning'
      },
      {
        title: '피로감 및 체중 감소',
        description: '만성적인 염증 소모로 인해 항상 피곤하고 입맛이 없으며 살이 빠집니다.',
        severity: 'common'
      }
    ],
    characteristicsAndCauses: {
      characteristics: [
        '늘어난 기관지는 다시 원래 크기로 줄어들지 않으므로 가래를 잘 배출하는 물리적 배담 요법이 치료의 핵심입니다.',
        '감염이 재발할 때마다 주변 정상 기관지까지 번져나갈 수 있어 정기적인 관리가 중요합니다.',
        '대량 객혈이 발생할 경우 즉각적인 혈관 색전술 등 응급 처치가 필요합니다.'
      ],
      causes: [
        '과거 앓았던 심한 폐렴, 백일해, 홍역 또는 폐결핵 후유증',
        '기관지 섬모 운동 장애 및 면역 결핍 질환',
        '비결핵 항산균(NTM) 등 만성 세균 감염',
        '기도 내 이물질 흡인으로 인한 기관지 폐쇄'
      ]
    },
    visualGuide: {
      title: '영구적으로 늘어난 기관지와 가래 웅덩이 구조',
      type: 'bronchi_dilation',
      description: '매끄럽고 탄력 있던 나뭇가지 모양의 기관지가 풍선이나 꽈리처럼 비정상적으로 부풀어 늘어나, 중력으로 인해 가래가 바닥에 고여 배출되지 못하는 상태입니다.',
      normalState: '가늘어지며 자연스럽게 점액을 밀어 올리는 탄력 기관지',
      diseaseState: '주머니 모양으로 늘어나 농성 가래가 찰랑거리는 기관지'
    },
    dailyCare: [
      '본 웹사이트의 [허프 기침법]과 체위 거담법(상체를 낮추어 중력으로 가래를 흘려보내는 자세)을 하루 2회 이상 실시하세요.',
      '수분을 충분히 섭취하여 끈적한 가래를 묽게 만들어야 배출이 수월해집니다.',
      '가래 색깔이 짙은 초록색이나 갈색으로 변하면 즉시 병원을 방문해 항생제 치료를 시작하세요.',
      '차가운 공기, 미세먼지, 담배 연기 등 기관지 자극 요인을 철저히 차단하세요.'
    ],
    emergencySigns: [
      '종이컵 반 컵 이상의 새빨간 생피를 기침과 함께 토해낼 때 (대량 객혈)',
      '갑작스러운 흉통과 함께 심한 호흡 곤란이 발생할 때',
      '고열과 함께 심한 오한이 나면서 호흡이 가빠질 때'
    ]
  },
  {
    id: 'acute-bronchitis',
    name: '급성 기관지염',
    englishName: 'Acute Bronchitis',
    badge: '흔한 호흡기 질환',
    summary: '주로 감기 바이러스로 인해 폐로 이어지는 기관지 점막에 급성 염증이 생겨 심한 기침과 가래를 유발하는 일시적 질환입니다.',
    easyExplanation: '일반 감기가 코나 목구멍(상기도)에 머무는 염증이라면, 급성 기관지염은 감기 바이러스가 더 깊숙이 내려와 큰 숨길인 기관지 벽(하기도)에 염증을 일으킨 상태입니다. 흔히 ‘목감기가 심해져 기관지까지 번졌다’고 표현합니다.',
    mainSymptoms: [
      {
        title: '가슴이 울리는 심한 기침',
        description: '기침을 할 때 가슴 뼈 안쪽이 타는 듯이 아프고 심하게 울립니다.',
        severity: 'common'
      },
      {
        title: '가래 분비',
        description: '초기에는 맑은 점액 가래가 나오다가 점차 누런색이나 녹색 가래로 변합니다.',
        severity: 'common'
      },
      {
        title: '미열과 전신 몸살 기운',
        description: '37~38도의 미열, 근육통, 목의 칼칼한 통증이 동반됩니다.',
        severity: 'common'
      },
      {
        title: '기관지 자극감과 숨참',
        description: '찬 공기를 마시면 발작적으로 기침이 터져 나와 숨이 찹니다.',
        severity: 'warning'
      }
    ],
    characteristicsAndCauses: {
      characteristics: [
        '대부분(90% 이상) 바이러스 감염이 원인이므로 불필요한 항생제 남용은 피해야 합니다.',
        '열과 몸살은 3~5일 내에 호전되지만, 손상된 기관지 점막이 재생되는 데는 2~3주가 걸려 기침이 오래 지속될 수 있습니다.',
        '폐 실질을 침범하는 폐렴과는 달리 흉부 X-ray 검사상 폐포는 깨끗하게 유지됩니다.'
      ],
      causes: [
        '바이러스: 리노바이러스, 아데노바이러스, 인플루엔자 바이러스, 파라인플루엔자 바이러스',
        '2차 세균 감염: 바이러스로 약해진 기관지에 세균이 덧나는 경우',
        '담배 연기, 유해 가스, 미세먼지 과다 흡입으로 인한 물리화학적 자극'
      ]
    },
    visualGuide: {
      title: '급성 기관지염의 점막 발적과 점액 분비',
      type: 'acute_bronchial',
      description: '기관지 안쪽 점막이 빨갛게 충혈되어 붓고, 침입한 바이러스를 씻어내기 위해 많은 양의 점액(가래)을 뿜어내어 기침 반사가 예민해진 상태입니다.',
      normalState: '연분홍빛의 매끄럽고 얇은 기관지 점막',
      diseaseState: '빨갛게 붓고 끈적끈적한 점액이 덮여 과민해진 점막'
    },
    dailyCare: [
      '실내 습도를 50~60%로 촉촉하게 유지하고 가습기를 적극 활용하세요.',
      '따뜻한 보리차나 도라지차, 꿀물을 자주 마셔 건조해진 목을 촉촉하게 적셔주세요.',
      '기침을 억지로 참지 말고, 기침 후 따뜻한 물을 한 모금 마셔 점막을 진정시키세요.',
      '충분한 휴식을 취하고 담배 연기가 있는 장소는 절대 피하세요.'
    ],
    emergencySigns: [
      '기침이 3주 이상 지속되거나 점점 심해질 때 (만성 기침 및 천식 감별 필요)',
      '38.5도 이상의 고열이 3일 이상 지속되며 호흡 곤란이 올 때 (폐렴으로의 진행 의심)',
      '가래에 피가 다량 섞여 나오거나 흉통이 극심할 때'
    ]
  }
];
