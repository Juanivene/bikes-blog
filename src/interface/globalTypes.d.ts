export interface ListOption {
  id: string;
  description: string;
}

export interface DataTestId {
  dti: string | undefined;
}

export interface AnyProp {
  [key: string]: unknown;
}
