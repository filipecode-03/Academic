export interface Passage {
  id: string;
  text: string;
}

export interface PassageData {
  easy: Passage[];
  medium: Passage[];
  hard: Passage[];
}