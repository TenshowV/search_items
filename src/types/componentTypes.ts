export interface SelectOption {
  text: string | number;
  value: string | number;
  optgroup?: string;
  [key: string]: unknown;
}

export interface FillterOption {
  id: number;
  name: string;
  position: string;
  sectionId: number;
}
