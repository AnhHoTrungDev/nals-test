export type IStripedField = {
  data: IDataFields[];
};

export interface IDataFields {
  className?: string | undefined;
  children: JSX.Element | string;
}

export interface IStripedTable {
  labels: string[];
  dataFields: dataFields[][];
}
