import React from "react";
import StripedField from "./stripedField";

type dataFields = {
  className?: string | undefined;
  children: JSX.Element | string;
};

type IStripedTable = {
  labels: string[];
  dataFields: dataFields[][];
};

const Striped: React.FC<IStripedTable> = ({ labels, dataFields }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {labels.map((label: string, idx: number) => (
            <th key={idx + label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataFields.map((dataField: any, idx: number) => (
          <StripedField key={idx} data={dataField} />
        ))}
      </tbody>
    </table>
  );
};

export default Striped;
