interface IRow {
  elements: IElement[];
}

interface IElement {
  distance: IValue;
  duration: IValue;
  status: string;
}

interface IValue {
  text: string;
  value: number;
}

export interface IGoogleResponse {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: IRow[];
  status: string;
}
