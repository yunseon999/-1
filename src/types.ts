export type MainMenuType = 'home' | 'breathing' | 'floor' | 'disease';

export interface BreathingStep {
  stepNumber: number;
  title: string;
  durationSeconds: number;
  actionType: 'inhale' | 'hold' | 'exhale' | 'rest';
  instruction: string;
  patientTip: string;
  visualCue: string;
}

export interface BreathingTechnique {
  id: string;
  name: string;
  englishName: string;
  badge: string;
  summary: string;
  recommendation: string;
  targetPatients: string[];
  imageDescription: {
    postureTitle: string;
    postureDetails: string[];
    diagramType: 'diaphragm' | 'lips' | 'cough' | 'tripod';
    keyPoints: string[];
  };
  videoGuide: {
    title: string;
    totalCycles: number;
    cycleDurationSeconds: number;
    steps: BreathingStep[];
    cautions: string[];
    benefits: string[];
  };
}

export type FacilityCategory = 'clinic' | 'exam' | 'amenity';

export interface HospitalFacility {
  id: string;
  name: string;
  category: FacilityCategory;
  floor: string;
  roomNumber: string;
  description: string;
  operatingHours: string;
  contact: string;
  notice?: string;
  tags: string[];
  position: {
    x: number; // percentage from left
    y: number; // percentage from top
    width: number;
    height: number;
  };
}

export interface FloorInfo {
  floorId: string;
  floorName: string;
  shortLabel: string;
  subTitle: string;
  facilities: HospitalFacility[];
}

export interface RespiratoryDisease {
  id: string;
  name: string;
  englishName: string;
  iconName?: string;
  badge: string;
  summary: string;
  easyExplanation: string;
  mainSymptoms: {
    title: string;
    description: string;
    severity: 'common' | 'warning' | 'urgent';
  }[];
  characteristicsAndCauses: {
    characteristics: string[];
    causes: string[];
  };
  visualGuide: {
    title: string;
    type: 'airway_comparison' | 'alveoli_inflammation' | 'mucus_plug' | 'bronchi_dilation' | 'acute_bronchial';
    description: string;
    normalState: string;
    diseaseState: string;
  };
  dailyCare: string[];
  emergencySigns: string[];
}
