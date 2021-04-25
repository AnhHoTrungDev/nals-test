export type IStripedField = {
  data: any[];
};

type dataFields = {
  className?: string | undefined;
  children: JSX.Element | string;
};

export type IStripedTable = {
  labels: string[];
  dataFields: dataFields[][];
};
